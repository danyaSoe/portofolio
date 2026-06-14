"use client";

import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let rafId = 0;
    let ro: ResizeObserver | null = null;

    function syncSize() {
      const w = canvas!.clientWidth || 1280;
      const h = canvas!.clientHeight || 720;
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w;
        canvas!.height = h;
      }
    }

    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(syncSize);
      ro.observe(canvas);
    }
    syncSize();

    const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `attribute vec2 a_position;\nvarying vec2 v_texCoord;\nvoid main() {\n  v_texCoord = a_position * 0.5 + 0.5;\n  gl_Position = vec4(a_position, 0.0, 1.0);\n}`;

    const fs = `precision highp float;\nvarying vec2 v_texCoord;\nuniform float u_time;\nuniform vec2 u_resolution;\nfloat random(vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123); }\nvoid main() {\n  vec2 uv = v_texCoord;\n  vec3 color = vec3(0.043, 0.047, 0.059);\n  vec2 grid = fract(uv * u_resolution / 4.0);\n  float gridLine = step(0.9, grid.x) + step(0.9, grid.y);\n  color += gridLine * 0.02;\n  float scanline = sin(uv.y * 800.0 + u_time * 2.0) * 0.04;\n  color -= scanline;\n  float noise = random(uv + u_time * 0.01) * 0.05;\n  color += noise;\n  float glow = 1.0 - length(uv - 0.5);\n  color += vec3(0.29, 0.96, 0.15) * pow(glow, 4.0) * 0.05;\n  gl_FragColor = vec4(color, 1.0);\n}`;

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!;
      gl!.shaderSource(s, src);
      gl!.compileShader(s);
      return s;
    }

    const prog = gl!.createProgram()!;
    gl!.attachShader(prog, compile(gl!.VERTEX_SHADER, vs));
    gl!.attachShader(prog, compile(gl!.FRAGMENT_SHADER, fs));
    gl!.linkProgram(prog);
    gl!.useProgram(prog);

    const buf = gl!.createBuffer();
    gl!.bindBuffer(gl!.ARRAY_BUFFER, buf);
    gl!.bufferData(gl!.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl!.STATIC_DRAW);
    const pos = gl!.getAttribLocation(prog, 'a_position');
    gl!.enableVertexAttribArray(pos);
    gl!.vertexAttribPointer(pos, 2, gl!.FLOAT, false, 0, 0);

    const uTime = gl!.getUniformLocation(prog, 'u_time');
    const uRes = gl!.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl!.getUniformLocation(prog, 'u_mouse');

    let mouse = { x: canvas!.width / 2, y: canvas!.height / 2 };
    function onMouse(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (e.clientX - rect.left) / rect.width;
        const ny = 1.0 - (e.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas!.width;
        mouse.y = ny * canvas!.height;
      }
    }
    window.addEventListener('mousemove', onMouse);

    function render(t: number) {
      if (typeof ResizeObserver === 'undefined') syncSize();
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      if (uTime) gl!.uniform1f(uTime, t * 0.001);
      if (uRes) gl!.uniform2f(uRes, canvas!.width, canvas!.height);
      if (uMouse) gl!.uniform2f(uMouse, mouse.x, mouse.y);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    }

    render(0);

    return () => {
      cancelAnimationFrame(rafId);
      if (ro) ro.disconnect();
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 w-full h-full opacity-40" />;
}
