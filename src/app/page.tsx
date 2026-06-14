export default function Home() {
  return (
    <div className="w-full">
      <div className="fixed inset-0 scanlines z-[60] pointer-events-none opacity-20"></div>

      <section id="root" className="relative h-screen flex items-center justify-center overflow-hidden px-gutter">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-4 flex items-center justify-center gap-2 text-surface-tint font-code-md opacity-100">
            <span className="text-surface-tint">[OK]</span>
            <span>SYSTEM ONLINE / USER DETECTED / READY.</span>
          </div>

          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4 tracking-tighter uppercase">
            DANYA DAMARIS
          </h1>

          <div className="text-headline-md font-headline-md text-secondary-container mb-12 h-8">
            <span>
              Computer Science Student • Software Developer • Tech Enthusiast
            </span>
            <span className="terminal-cursor text-surface-tint">_</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="#projects"
              className="bg-surface-tint/10 border border-surface-tint text-surface-tint px-8 py-3 font-code-md hover:bg-surface-tint hover:text-on-primary transition-all duration-300 glow-green active:scale-95"
            >
              VIEW_PROJECTS.EXE
            </a>
            <a
              href="#contact"
              className="border border-outline-variant text-on-surface-variant px-8 py-3 font-code-md hover:border-on-surface-variant transition-all active:scale-95"
            >
              CONTACT_ME.LOG
            </a>
          </div>
        </div>
      </section>

      <main className="max-w-max-width mx-auto px-gutter">
        <section id="about" className="py-section-gap-mobile md:py-section-gap grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-headline-md text-headline-md text-surface-tint mb-8 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-surface-tint"></span> 01. WHO_AM_I
            </h2>
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
              <div className="w-48 h-48 flex-shrink-0 rounded-lg overflow-hidden border border-surface-tint shadow-[0_0_15px_rgba(74,246,38,0.3)]">
                <img
                  alt="Danya Damaris"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTMXrmHiy_ONsBTvCdkd-tbdo15IkeHnaG8O84ALQ12PxMLgtLrdm6vgGF6XkTjU8_RSTxOajeEY1w4ytgRdPM92N_yN8YATX2p33xPVYNlK1_mbJfKODA6flugC2663eCqUiJJq4oVRDOro-T5cUvOltfAM8C1FIKPoAdoQAiHyECmsUuY7R6EIJ-S0CTrM9-_B88GuMpx0MY1rTaup8WUeyEkj_qAh6QUoOcxbBIm-U-9LdjVZ_YIivBDAm594pvbuPoIbyj6jQ"
                />
              </div>
              <div className="space-y-6 text-on-surface-variant font-body-lg flex-1">
                <p>I am a Computer Science student driven by the architecture of complex systems and the elegance of functional code. My journey in technology is a continuous loop of learning, building, and refining.</p>
                <p>
                  Specializing in <span className="text-secondary">Full-Stack Development</span> and{' '}
                  <span className="text-surface-tint">Cloud Architecture</span>, I treat every project as a terminal session where efficiency and precision are paramount.
                </p>
                <div className="p-6 border border-outline-variant bg-surface-container-low italic">
                  "The goal isn't just to write code that works, but to build systems that endure."
                </div>
              </div>
            </div>
          </div>

          <div className="terminal-window rounded-lg overflow-hidden border-subtle">
            <div className="terminal-header">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
              <span className="text-label-sm font-code-md text-on-surface-variant ml-2">skills_matrix.sh</span>
            </div>
            <div className="p-6 font-code-md space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-surface-tint">PYTHON</span>
                  <span className="text-on-surface-variant">90%</span>
                </div>
                <div className="w-full h-4 bg-surface-container-highest border border-outline-variant">
                  <div className="h-full bg-surface-tint" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-surface-tint">JAVA</span>
                  <span className="text-on-surface-variant">85%</span>
                </div>
                <div className="w-full h-4 bg-surface-container-highest border border-outline-variant">
                  <div className="h-full bg-surface-tint" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-surface-tint">TYPESCRIPT</span>
                  <span className="text-on-surface-variant">80%</span>
                </div>
                <div className="w-full h-4 bg-surface-container-highest border border-outline-variant">
                  <div className="h-full bg-surface-tint" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant">
                <span className="text-secondary block mb-4 uppercase text-label-sm">Environment &amp; Tools</span>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-surface-container border border-outline text-label-sm">REACT</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline text-label-sm">NODE.JS</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline text-label-sm">DOCKER</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline text-label-sm">AWS</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline text-label-sm">POSTGRES</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline text-label-sm">GIT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-section-gap-mobile md:py-section-gap">
          <h2 className="font-headline-md text-headline-md text-surface-tint mb-12 uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[2px] bg-surface-tint"></span> 02. PROJECTS.DIR
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                color: 'dot-red',
                title: 'NEURAL_OBSERVER',
                description: 'Real-time computer vision system for automated traffic flow analysis.',
                tags: ['#Python', '#OpenCV', '#PyTorch'],
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuA-2SXWSRy8vlygaxvHpirApY8Bh0HIDnq8P35XJXYQpLPGQ9k0LsjRUWcOd37AhUidxRd5jq4CRPKnFqnj0kgDF1oWm8TsseCF3VP5Mm6Rj0Qvq6KAY8WJWsoEgR0LlKts0YCLqorqRNIaiPfaMsotD8vZGq-GTXTGQWkhAj9qrLsDezdM8XgJPkH32hU1Xs7POomQPks1AZoCT6e5zgb1Dy5S6teWSgaVwurIN8xDzATWWmHDNgY8W2j1cZU_Nob5wthaeNkTKq0',
              },
              {
                color: 'dot-yellow',
                title: 'LEDGER_SYNC',
                description: 'Decentralized peer-to-peer file synchronization protocol using Rust.',
                tags: ['#Rust', '#Web3', '#P2P'],
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuDKMhLe2MMIw27MaS4FwnoyQZHC7FgUOjZey80K5gvpVvhitEC_T1DDxVOwKD2DET1Xp_8Bew7cMPygslqws1xb2AyeG_ykO8AdYAlZV2XEVE71rqImt7skFWujKbX-P4qvx7ZGZd2AVRzBo40wz0q3j-z_lC9usgjK7tcSc3rk4SozveViCGsRLCE8h09KeUgvn-wgVppQxgr3ZwgGWFsY5hp7Rd87jlLqgGwSvHu4kothkLE6IhQvoTCMABRE0lYtZuORNiLLd94',
              },
              {
                color: 'dot-green',
                title: 'CLOUD_WATCHER',
                description: 'Serverless infrastructure monitoring tool with real-time alerting.',
                tags: ['#Go', '#AWS', '#Terraform'],
                image:
                  'https://lh3.googleusercontent.com/aida-public/AB6AXuBVoOCQgx9dHc4GofegX1g4kJj7bc-OUv4lT7TmSwFwIzignNCDWUuZOu3dIXI6YkvGv_9AlhconOJhWeeP_4AXaHLH6SRHawI--X5l0369VlNO8V8OrAGD_iqcXPVB0jdk1URdZg31EKQnkfU1QydNNU-QgZtXLkCUnSqPQIKkQDLMCz51HawAeGD2WrTVAGpTICW48QMNq6ebuqp19XZTUPlpyO7-1dmj6EJA_ihcJkRFVUUtFaKyKb70WDqInkYXVjzJt20Ah-I',
              },
            ].map((project) => (
              <div key={project.title} className="terminal-window rounded-lg overflow-hidden border-subtle crt-flicker hover:glow-green transition-all duration-300 group">
                <div className="terminal-header">
                  <div className={`dot ${project.color}`}></div>
                  <span className="text-label-sm font-code-md text-on-surface-variant ml-2">{project.title.toLowerCase().replace(/ /g, '_')}.bin</span>
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    alt={project.title}
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-surface/60 mix-blend-multiply"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-2">{project.title}</h3>
                  <p className="text-on-surface-variant text-body-md mb-4">{project.description}</p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-label-sm font-code-md text-surface-tint">{tag}</span>
                    ))}
                  </div>
                  <a className="text-surface-tint font-code-md flex items-center gap-2 hover:underline" href="#projects">
                    EXECUTE_SRC <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="history" className="py-section-gap-mobile md:py-section-gap">
          <h2 className="font-headline-md text-headline-md text-surface-tint mb-12 uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-[2px] bg-surface-tint"></span> 03. HISTORY.LOG
          </h2>
          <div className="relative border-l border-subtle ml-4 pl-10 space-y-12">
            {[
              {
                date: '2023 - PRESENT',
                title: 'LEAD DEVELOPER @ UNIVERSITY TECH LAB',
                summary:
                  'Spearheading the development of open-source research tools. Optimized data processing pipelines by 40% using concurrent programming patterns in Go.',
                accent: 'bg-surface-tint',
              },
              {
                date: '2022 - 2023',
                title: 'SOFTWARE ENGINEERING INTERN @ DATAFLOW_CO',
                summary:
                  'Implemented microservices architecture for real-time telemetry. Migrated legacy monolith systems to Dockerized environments.',
                accent: 'bg-surface-tint/50',
              },
              {
                date: '2021 - 2022',
                title: 'CS TEACHING ASSISTANT',
                summary:
                  'Mentored 100+ students in Data Structures and Algorithms. Automated grading systems using Python scripts.',
                accent: 'bg-surface-tint/30',
              },
            ].map((entry) => (
              <div key={entry.title} className="relative">
                <div className={`absolute -left-[45px] top-1 w-[10px] h-[10px] ${entry.accent} rounded-full shadow-[0_0_10px_#4AF626]`}></div>
                <span className="text-label-sm font-code-md text-secondary block mb-2">[ {entry.date} ]</span>
                <h3 className="text-headline-md font-headline-md text-on-surface">{entry.title}</h3>
                <p className="text-on-surface-variant text-body-md mt-4">{entry.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-section-gap-mobile md:py-section-gap mb-20">
          <div className="max-w-max-width mx-auto px-gutter">
            <h2 className="font-headline-md text-headline-md text-surface-tint mb-12 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-[2px] bg-surface-tint"></span> 04. GET_IN_TOUCH
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: 'account_circle',
                  title: 'LinkedIn',
                  subtitle: '/in/danya-damaris',
                  href: '#',
                },
                {
                  icon: 'terminal',
                  title: 'GitHub',
                  subtitle: '/ddamaris-dev',
                  href: '#',
                },
                {
                  icon: 'photo_camera',
                  title: 'Instagram',
                  subtitle: '@sys_damaris',
                  href: '#',
                },
                {
                  icon: 'mail',
                  title: 'Email',
                  subtitle: 'danya@terminal.sys',
                  href: 'mailto:danya@terminal.sys',
                },
              ].map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="terminal-window p-8 flex flex-col items-center justify-center gap-4 rounded-lg border-subtle hover:glow-green transition-all duration-300 group"
                >
                  <span className="material-symbols-outlined text-4xl text-surface-tint group-hover:scale-110 transition-transform">{card.icon}</span>
                  <span className="font-code-md text-on-surface uppercase tracking-widest">{card.title}</span>
                  <span className="text-[10px] text-on-surface-variant/50">{card.subtitle}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
