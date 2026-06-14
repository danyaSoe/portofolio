'use client';

import { useState } from 'react';
import { projects } from '@/lib/portfolio-db';

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full max-w-max-width mx-auto px-gutter">
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-surface-tint font-code-md text-code-md">C:\USERS\DANYA\WORK_DIR&gt;</span>
          <span className="font-code-md text-code-md text-on-surface-variant">ls -la ./projects</span>
        </div>
        <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface mb-4">PROJECT_ARCHIVE</h1>
        <p className="text-on-surface-variant max-w-2xl text-body-lg font-body-lg">
          A catalog of compiled systems, decentralized protocols, and neural architectures. Click any executable to view documentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-section-gap">
        {projects.slice(0, 3).map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="group cursor-pointer border border-outline-variant bg-surface-container-low rounded overflow-hidden flex flex-col hover:glow-green transition-all duration-300"
          >
            <div className="bg-outline-variant/30 px-4 py-2 flex items-center justify-between border-b border-outline-variant">
              <span className="font-code-md text-label-sm text-surface-tint flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">terminal</span>
                {project.id}
              </span>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-on-surface-variant/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-on-surface-variant/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-surface-tint/60"></div>
              </div>
            </div>
            <div className="p-0 aspect-video relative overflow-hidden bg-black">
              <img
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                alt={project.title}
                src={project.image}
              />
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{project.title}</h3>
              <p className="text-on-surface-variant text-body-md line-clamp-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(project.tags ?? project.stack ?? []).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-code-md font-code-md border border-outline-variant text-on-surface-variant rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {projects[3] && (
          <div
            onClick={() => openModal(projects[3])}
            className="terminal-window lg:col-span-2 group cursor-pointer border border-outline-variant bg-surface-container-low rounded overflow-hidden flex flex-col md:flex-row hover:glow-green transition-all duration-300"
          >
            <div className="bg-outline-variant/30 p-2 md:w-12 flex flex-col items-center border-r border-outline-variant gap-4">
              <span className="material-symbols-outlined text-surface-tint rotate-90 md:rotate-0">settings_input_component</span>
              <div className="flex flex-col gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-surface-tint"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-surface-tint/40"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-surface-tint/10"></div>
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-code-md text-label-sm text-surface-tint">SYSTEM_BOOT: {projects[3].id}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface mt-1">{projects[3].title}</h3>
                  </div>
                  <span className="material-symbols-outlined text-surface-tint">memory</span>
                </div>
                <p className="text-on-surface-variant text-body-md mb-6 max-w-xl">{projects[3].description}</p>
                <div className="flex flex-wrap gap-3">
                  {(projects[3].tags ?? projects[3].stack ?? []).map((tag: string) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-surface-tint/10 text-surface-tint font-code-md text-code-md border border-surface-tint/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {projects[4] && (
          <div
            onClick={() => openModal(projects[4])}
            className="group cursor-pointer border border-outline-variant bg-surface-container-low rounded overflow-hidden flex flex-col hover:glow-green transition-all duration-300"
          >
            <div className="bg-outline-variant/30 px-4 py-2 flex items-center justify-between border-b border-outline-variant">
              <span className="font-code-md text-label-sm text-surface-tint flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">database</span>
                {projects[4].id}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{projects[4].title}</h3>
              <p className="text-on-surface-variant text-body-md line-clamp-3">{projects[4].description}</p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-surface-container p-6 border border-outline-variant rounded relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-surface-tint"></div>
        <div className="flex items-center gap-3 font-code-md text-code-md text-surface-tint">
          <span className="material-symbols-outlined">info</span>
          <span>SYSTEM_STATUS: ALL PROJECTS COMPILED SUCCESSFULLY.</span>
        </div>
        <div className="mt-4 font-code-md text-on-surface-variant flex gap-2">
          <span>$</span>
          <span>init project_explorer --filter=all --view=detailed</span>
          <span className="cursor"></span>
        </div>
      </div>

      {modalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-background/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-4xl bg-surface border border-surface-tint shadow-[0_0_50px_rgba(52,229,7,0.2)] rounded overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-outline-variant flex items-center justify-between px-4 py-3 border-b border-surface-tint">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-surface-tint">wysiwyg</span>
                <span className="font-code-md text-label-sm text-surface-tint">{selectedProject.id}</span>
              </div>
              <button
                onClick={closeModal}
                className="text-surface-tint hover:bg-surface-tint hover:text-surface transition-colors p-1 flex items-center justify-center"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row h-full max-h-[819px] overflow-y-auto">
              <div className="md:w-1/2 border-r border-outline-variant bg-black flex items-center justify-center relative group">
                <img
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-80"
                  src={selectedProject.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent md:hidden"></div>
              </div>

              <div className="md:w-1/2 p-8 flex flex-col">
                <h2 className="font-display-lg text-headline-md md:text-display-lg text-surface-tint mb-4">
                  {selectedProject.title}
                </h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-2 border-b border-outline-variant inline-block">
                      Description
                    </h4>
                    <p className="text-body-md text-on-surface leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-2 border-b border-outline-variant inline-block">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {selectedProject.stack.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-code-md font-code-md border border-outline-variant text-surface-tint rounded bg-surface-tint/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-8 flex gap-4 mt-auto">
                    <a
                      className="flex-1 py-3 border border-surface-tint bg-surface-tint/10 text-surface-tint font-code-md text-center hover:bg-surface-tint hover:text-surface transition-all duration-150"
                      href={selectedProject.sourceUrl ?? '#'}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">code</span> VIEW_SOURCE
                      </span>
                    </a>
                    <a
                      className="flex-1 py-3 border border-outline-variant text-on-surface font-code-md text-center hover:bg-outline-variant transition-all duration-150"
                      href="#"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-sm">language</span> LIVE_DEMO
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low px-4 py-2 border-t border-outline-variant flex justify-between items-center">
              <span className="text-[10px] font-code-md text-on-surface-variant">SECURE_SHELL_ESTABLISHED // ACCESS_LEVEL: ROOT</span>
              <span className="text-[10px] font-code-md text-on-surface-variant">BUILD: v2.4.0-stable</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
