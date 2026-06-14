'use client';

export default function ContactPage() {
  return (
    <div className="w-full max-w-max-width mx-auto px-gutter">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg text-surface-tint mb-4 uppercase tracking-tight">
          Establish Connection
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
          Ready to initiate a data transfer. Whether you have a project in mind or just want to discuss the future of
          the web, my terminal is open.
        </p>
      </header>

      <div className="flex flex-col gap-12">
        {/* Contact Links Grid */}
        <div className="flex-col gap-6">
          <h2 className="text-headline-md font-headline-md text-surface-tint border-b border-outline-variant pb-2 inline-block mx-auto">
            NODE_DIRECTORIES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mx-auto">
            {/* LinkedIn Card */}
            <a
              className="group relative bg-surface-container-low border border-outline-variant p-6 transition-all duration-300 hover:glow-green hover:-translate-y-1"
              href="https://www.linkedin.com/in/danya-damaris-565434391"
            >
              <div className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-3xl text-surface-tint">share</span>
                <div>
                  <div className="text-label-sm font-label-sm text-on-surface-variant group-hover:text-surface-tint">
                    LinkedIn
                  </div>
                  <div className="text-code-md font-code-md text-surface-tint">/in/danya-damaris</div>
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              className="group relative bg-surface-container-low border border-outline-variant p-6 transition-all duration-300 hover:glow-green hover:-translate-y-1"
              href="https://github.com/danyaSoe"
            >
              <div className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-3xl text-surface-tint">code</span>
                <div>
                  <div className="text-label-sm font-label-sm text-on-surface-variant group-hover:text-surface-tint">
                    GitHub
                  </div>
                  <div className="text-code-md font-code-md text-surface-tint">@danyaSoe</div>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              className="group relative bg-surface-container-low border border-outline-variant p-6 transition-all duration-300 hover:glow-green hover:-translate-y-1"
              href="https://www.instagram.com/damarisdanya"
            >
              <div className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-3xl text-surface-tint">photo_camera</span>
                <div>
                  <div className="text-label-sm font-label-sm text-on-surface-variant group-hover:text-surface-tint">
                    Instagram
                  </div>
                  <div className="text-code-md font-code-md text-surface-tint">@damarisdanya</div>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              className="group relative bg-surface-container-low border border-outline-variant p-6 transition-all duration-300 hover:glow-green hover:-translate-y-1"
              href="mailto:danyasoe@gmail.com"
            >
              <div className="flex flex-col gap-4">
                <span className="material-symbols-outlined text-3xl text-surface-tint">alternate_email</span>
                <div>
                  <div className="text-label-sm font-label-sm text-on-surface-variant group-hover:text-surface-tint">
                    Direct Mail
                  </div>
                  <div className="text-code-md font-code-md text-surface-tint">danyasoe@gmail.com</div>
                </div>
              </div>
            </a>
          </div>

          {/* Decorative Asset */}
          <div className="mt-8 relative aspect-video border border-outline-variant bg-surface-container-lowest overflow-hidden group max-w-2xl mx-auto w-full">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="text-label-sm font-label-sm text-surface-tint opacity-60">GEOGRAPHIC_LOCATOR</div>
                <div className="text-headline-md font-headline-md text-surface-tint font-bold">SAN FRANCISCO, CA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
