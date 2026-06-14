'use client';

export default function AboutPage() {
  const skills = [
    { category: 'TYPESCRIPT / NEXT.JS / TAILWIND', percentage: 94 },
    { category: 'PYTHON / SCIPY / STATS', percentage: 88 },
    { category: 'JAVA / JAVAFX / GRADLE', percentage: 85 },
  ];

  const infraSkills = [
    { category: 'DIGITAL ART / FREELANCE', percentage: 90 },
    { category: 'AUDIO PROD / BANDWIDTH', percentage: 82 },
    { category: 'ASSEMBLY / X86 / GDB', percentage: 75 },
  ];

  return (
    <div className="w-full max-w-max-width mx-auto px-gutter">
      {/* Hero Section / Identity */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-section-gap">
        <div className="md:col-span-5 relative group">
          <div className="absolute -inset-2 bg-surface-tint/20 rounded-lg blur-lg group-hover:bg-surface-tint/30 transition-all duration-500"></div>
          <div className="relative bg-surface border-2 border-surface-tint/50 p-1 rounded-lg overflow-hidden shadow-2xl">
            <img
              alt="Danya Damaris"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 rounded-sm"
              src="https://res.cloudinary.com/dtjuzy2kr/image/upload/v1781440246/danya_bust_fvddg8.jpg"
            />
            <div className="absolute bottom-4 left-4 right-4 py-2 px-3 bg-surface/90 border border-surface-tint/30 backdrop-blur-md rounded">
              <p className="font-code-md text-label-sm text-surface-tint">ID: DAMARIS_DANYA_ST_IST</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-surface-tint glow-green"></span>
            <span className="font-code-md text-label-sm text-surface-tint uppercase tracking-widest">
              System Profile Loaded
            </span>
          </div>
          <h1 className="font-display-lg text-display-lg md:text-display-lg mb-6 leading-tight">
            Engineering <span className="text-surface-tint">Creative Interfaces</span> at the Intersect of Art and Code.
          </h1>
          <div className="bg-surface border border-outline-variant p-6 rounded-lg">
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
              &gt; I am a Information Systems and Technology student fascinated by the intersection of tech and my other interests such as music and art. My journey in technology is a continuous loop of learning, building, and refining.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-surface border border-outline-variant font-code-md text-label-sm hover:text-surface-tint hover:border-surface-tint transition-all duration-150 active:scale-95 group flex items-center gap-2">
                INIT_CHAT <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="px-6 py-2 font-code-md text-label-sm text-on-surface-variant hover:text-surface-tint underline underline-offset-8 transition-colors">
                DOWNLOAD_CV_V2.PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Narrative / Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-gap">
        <div className="md:col-span-2 bg-surface border border-outline-variant p-8 rounded-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-symbols-outlined text-[120px]">architecture</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-surface-tint mb-4">0x01: Philosophy</h3>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            Code isn't just logic; it's a canvas. I believe that computing achieves its highest form when married with the rhythm of music and the aesthetics of art. For me, software development is an iterative feedback loop—constantly compiling ideas, deploying creativity, and refining the output.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
              <h4 className="font-code-md text-label-sm text-on-surface mb-2">CREATIVITY</h4>
              <div className="w-full h-1 bg-outline-variant rounded-full overflow-hidden">
                <div className="h-full w-[95%] bg-surface-tint"></div>
              </div>
            </div>
            <div className="p-4 bg-surface-container-low border border-outline-variant rounded">
              <h4 className="font-code-md text-label-sm text-on-surface mb-2">ITERATION</h4>
              <div className="w-full h-1 bg-outline-variant rounded-full overflow-hidden">
                <div className="h-full w-[88%] bg-surface-tint"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface border border-outline-variant p-8 rounded-lg bg-surface-tint/[0.03]">
          <h3 className="font-headline-md text-headline-md text-surface-tint mb-4">0x02: Focus</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-surface-tint mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <div>
                <span className="font-code-md text-on-surface">Creative Technology</span>
                <p className="text-label-sm text-on-surface-variant">Exploring the intersection of code, sound, and visual arts</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-surface-tint mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <div>
                <span className="font-code-md text-on-surface">Continuous Iteration</span>
                <p className="text-label-sm text-on-surface-variant">An endless loop of learning, building, and refining systems</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-surface-tint mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <div>
                <span className="font-code-md text-on-surface">Interactive Design</span>
                <p className="text-label-sm text-on-surface-variant">Crafting aesthetic and functional software interfaces</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Matrix Terminal */}
      <section className="mb-section-gap">
        <div className="bg-surface border border-outline-variant rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-surface-container-high h-10 px-4 flex items-center justify-between border-b border-outline-variant">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-error/40 border border-error/60"></div>
              <div className="w-3 h-3 rounded-full bg-secondary/40 border border-secondary/60"></div>
              <div className="w-3 h-3 rounded-full bg-surface-tint/40 border border-surface-tint/60"></div>
            </div>
            <div className="font-code-md text-label-sm text-on-surface-variant">root@sys_damaris: ~/skills_matrix</div>
            <div className="w-12"></div>
          </div>

          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Core Engineering */}
            <div>
              <h3 className="font-headline-md text-headline-md mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-surface-tint">developer_board</span>
                CORE_STACK
              </h3>
              <div className="space-y-8">
                {skills.map((skill) => (
                  <div key={skill.category}>
                    <div className="flex justify-between font-code-md text-label-sm mb-2">
                      <span>{skill.category}</span>
                      <span className="text-surface-tint">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-4 bg-surface-container-highest border border-outline-variant p-0.5 rounded-sm">
                      <div className="h-full bg-surface-tint" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                    <div className="mt-1 font-code-md text-[10px] text-on-surface-variant tracking-tighter">
                      {'█'.repeat(Math.floor(skill.percentage / 3))}
                      {'░'.repeat(33 - Math.floor(skill.percentage / 3))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visuals & Ops */}
            <div>
              <h3 className="font-headline-md text-headline-md mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-surface-tint">brush</span>
                CREATIVE_LOGIC
              </h3>
              <div className="space-y-8">
                {infraSkills.map((skill) => (
                  <div key={skill.category}>
                    <div className="flex justify-between font-code-md text-label-sm mb-2">
                      <span>{skill.category}</span>
                      <span className="text-surface-tint">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-4 bg-surface-container-highest border border-outline-variant p-0.5 rounded-sm">
                      <div className="h-full bg-surface-tint" style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                    <div className="mt-1 font-code-md text-[10px] text-on-surface-variant tracking-tighter">
                      {'█'.repeat(Math.floor(skill.percentage / 3))}
                      {'░'.repeat(33 - Math.floor(skill.percentage / 3))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
