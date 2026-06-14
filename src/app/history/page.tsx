'use client';

import { useState } from 'react';

export default function HistoryPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  const timeline = [
    {
      id: 'entry_2023',
      year: '2023',
      yearEnd: 'Present',
      title: 'Senior Systems Architect',
      company: 'University Tech Lab',
      description: 'Leading the architectural design and deployment of distributed neural networks across academic computing clusters. Tasked with maintaining sub-50ms latency for real-time sensor processing and orchestrating heterogeneous compute nodes.',
      tasks: [
        'Refactored legacy Unix-based drivers to support GPU hardware, increasing throughput by 240%',
        'Designed asynchronous message broker facilitating 400+ concurrent AI modeling agents',
        'Implemented end-to-end encrypted datastreams using quantum-resistant algorithms',
        'Supervised migration of 15 years of research data from tape storage to S3-compatible cloud'
      ],
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD2y80I-0zKmSLCsV22DY7cBc1lgpD9zRcQvpZq0DMEgNcO3rZ127Uzd7WkmSnA63fwBzy54yrYqdz8_d7RQggDgYFD_ID4lmOlJZ6-r8jexMGMRXUNsDILhcj8MAnuI-zIsOs9INx7fPS2xciN-m1jKBtNdoGJBN4kKNPQZS1kljQIu7P6EL7c3ksBaZa9GRl4anh7PplAeX3crhUwQkOKvdNe3gwV--Xy2OHDuJpvD63kxy55eLMHyf_oZwGVhUVKT_fEiGeCAF8',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUmD3unUduZuhMy_6ubnCa38qWT-d8xyGVRUh_FJZyjgk5l2I61XD0skEG2MX9GX7ClWlpuQo-lVSq0nHovWSYj80tOP_1ZvXmwG6q39igb2ypnnwd3zRS-iTsxiq8zgsKbBGHMhMQC-_b4Yd516doq_FI2Mc5idpMmjds4yzlJwjrIoHUMC9KOYrxHSpLuIQ5e0ZZDPy4ZDYrfar84fFBC9nsiu75r9UFnHGfHnbdhIPZfVqXskkAwfzQa_lokbfrO-qFVt6EFMI',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKILlvxF2nJ3M8lQ5x1nEyF9QvR9VqPb8Rz2hXyTv9X5b8K3C6J7D9E2F1G0H3I4J5'
      ]
    },
    {
      id: 'entry_2021',
      year: '2021',
      yearEnd: '2023',
      title: 'Full Stack Operative',
      company: 'CloudScale Systems',
      description: 'Orchestrated cloud infrastructure migration from on-premise data centers to multi-region AWS deployment. Reduced operational costs by 45% while improving system reliability to 99.99% uptime.',
      tasks: [
        'Architected Kubernetes deployment strategy across 3 AWS regions',
        'Implemented Infrastructure as Code using Terraform and CDK',
        'Established CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
        'Mentored junior engineers on distributed systems and cloud-native patterns'
      ],
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKILlvxF2nJ3M8lQ5x1nEyF9QvR9VqPb8Rz2hXyTv9X5b8K3C6J7D9E2F1G0H3I4J5',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD2y80I-0zKmSLCsV22DY7cBc1lgpD9zRcQvpZq0DMEgNcO3rZ127Uzd7WkmSnA63fwBzy54yrYqdz8_d7RQggDgYFD_ID4lmOlJZ6-r8jexMGMRXUNsDILhcj8MAnuI-zIsOs9INx7fPS2xciN-m1jKBtNdoGJBN4kKNPQZS1kljQIu7P6EL7c3ksBaZa9GRl4anh7PplAeX3crhUwQkOKvdNe3gwV--Xy2OHDuJpvD63kxy55eLMHyf_oZwGVhUVKT_fEiGeCAF8',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUmD3unUduZuhMy_6ubnCa38qWT-d8xyGVRUh_FJZyjgk5l2I61XD0skEG2MX9GX7ClWlpuQo-lVSq0nHovWSYj80tOP_1ZvXmwG6q39igb2ypnnwd3zRS-iTsxiq8zgsKbBGHMhMQC-_b4Yd516doq_FI2Mc5idpMmjds4yzlJwjrIoHUMC9KOYrxHSpLuIQ5e0ZZDPy4ZDYrfar84fFBC9nsiu75r9UFnHGfHnbdhIPZfVqXskkAwfzQa_lokbfrO-qFVt6EFMI'
      ]
    },
    {
      id: 'entry_2019',
      year: '2019',
      yearEnd: '2021',
      title: 'Interface Specialist',
      company: 'AeroTech Solutions',
      description: 'Developed real-time data visualization dashboards for aerospace command centers. Built WebGL-based 3D visualization layer enabling pilots to process complex telemetry streams.',
      tasks: [
        'Created interactive 3D visualization engine using Three.js and custom GLSL shaders',
        'Optimized rendering pipeline for 60 FPS performance on legacy hardware',
        'Implemented real-time data ingestion from multiple satellite feeds',
        'Collaborated with FAA to ensure compliance with avionics standards'
      ],
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUmD3unUduZuhMy_6ubnCa38qWT-d8xyGVRUh_FJZyjgk5l2I61XD0skEG2MX9GX7ClWlpuQo-lVSq0nHovWSYj80tOP_1ZvXmwG6q39igb2ypnnwd3zRS-iTsxiq8zgsKbBGHMhMQC-_b4Yd516doq_FI2Mc5idpMmjds4yzlJwjrIoHUMC9KOYrxHSpLuIQ5e0ZZDPy4ZDYrfar84fFBC9nsiu75r9UFnHGfHnbdhIPZfVqXskkAwfzQa_lokbfrO-qFVt6EFMI',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD2y80I-0zKmSLCsV22DY7cBc1lgpD9zRcQvpZq0DMEgNcO3rZ127Uzd7WkmSnA63fwBzy54yrYqdz8_d7RQggDgYFD_ID4lmOlJZ6-r8jexMGMRXUNsDILhcj8MAnuI-zIsOs9INx7fPS2xciN-m1jKBtNdoGJBN4kKNPQZS1kljQIu7P6EL7c3ksBaZa9GRl4anh7PplAeX3crhUwQkOKvdNe3gwV--Xy2OHDuJpvD63kxy55eLMHyf_oZwGVhUVKT_fEiGeCAF8',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKILlvxF2nJ3M8lQ5x1nEyF9QvR9VqPb8Rz2hXyTv9X5b8K3C6J7D9E2F1G0H3I4J5'
      ]
    },
    {
      id: 'entry_2017',
      year: '2017',
      yearEnd: '2019',
      title: 'Junior Code Monkey',
      company: 'CipherTech Labs',
      description: 'Contributed to open-source cryptography libraries and security tooling. Started career learning low-level systems programming and contributing to encryption algorithm optimization.',
      tasks: [
        'Implemented optimized AES-256 encryption routines in assembly',
        'Contributed patches to OpenSSL and libsodium projects',
        'Built CLI tools for cryptographic key management',
        'Participated in security audits and penetration testing'
      ],
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKILlvxF2nJ3M8lQ5x1nEyF9QvR9VqPb8Rz2hXyTv9X5b8K3C6J7D9E2F1G0H3I4J5',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBUmD3unUduZuhMy_6ubnCa38qWT-d8xyGVRUh_FJZyjgk5l2I61XD0skEG2MX9GX7ClWlpuQo-lVSq0nHovWSYj80tOP_1ZvXmwG6q39igb2ypnnwd3zRS-iTsxiq8zgsKbBGHMhMQC-_b4Yd516doq_FI2Mc5idpMmjds4yzlJwjrIoHUMC9KOYrxHSpLuIQ5e0ZZDPy4ZDYrfar84fFBC9nsiu75r9UFnHGfHnbdhIPZfVqXskkAwfzQa_lokbfrO-qFVt6EFMI',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD2y80I-0zKmSLCsV22DY7cBc1lgpD9zRcQvpZq0DMEgNcO3rZ127Uzd7WkmSnA63fwBzy54yrYqdz8_d7RQggDgYFD_ID4lmOlJZ6-r8jexMGMRXUNsDILhcj8MAnuI-zIsOs9INx7fPS2xciN-m1jKBtNdoGJBN4kKNPQZS1kljQIu7P6EL7c3ksBaZa9GRl4anh7PplAeX3crhUwQkOKvdNe3gwV--Xy2OHDuJpvD63kxy55eLMHyf_oZwGVhUVKT_fEiGeCAF8'
      ]
    }
  ];

  const openModal = (entry: any) => {
    setSelectedEntry(entry);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEntry(null);
  };

  return (
    <div className="w-full max-w-max-width mx-auto px-gutter">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-surface-tint font-code-md text-code-md">C:\USERS\DANYA\SYSTEM&gt;</span>
          <span className="font-code-md text-code-md text-on-surface-variant">cat ./historical_log.exe</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-surface-tint glow-green"></span>
          <span className="font-code-md text-label-sm text-surface-tint">SYSTEM_BOOT [TIMESTAMP: 2024.01.15.09:47:32]</span>
        </div>
        <h1 className="font-display-lg text-display-lg md:text-display-lg text-on-surface mb-4">HISTORICAL_LOG</h1>
        <p className="text-on-surface-variant max-w-2xl text-body-lg font-body-lg">
          Professional timeline spanning 7 years of systems architecture, distributed computing, and secure infrastructure deployment.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative mb-section-gap">
        {/* Timeline Center Line */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-surface-tint via-surface-tint/50 to-transparent"></div>

        {/* Timeline Entries */}
        <div className="space-y-12">
          {timeline.map((entry, index) => (
            <div
              key={entry.id}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:mb-0`}
              onClick={() => openModal(entry)}
            >
              {/* Left/Right Content Area */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                <div className="group cursor-pointer bg-surface-container-low border border-outline-variant rounded overflow-hidden hover:glow-green transition-all duration-300 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-surface-tint font-code-md text-label-sm">{entry.year} - {entry.yearEnd}</span>
                      <h3 className="font-headline-md text-headline-md text-on-surface mt-1">{entry.title}</h3>
                      <p className="text-on-surface-variant font-body-md">{entry.company}</p>
                    </div>
                    <span className="material-symbols-outlined text-surface-tint/40 group-hover:text-surface-tint group-hover:rotate-45 transition-all">arrow_outward</span>
                  </div>
                  <p className="text-on-surface-variant text-body-md line-clamp-3">{entry.description}</p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 w-8 h-8 bg-surface border-2 border-surface-tint rounded-full flex items-center justify-center group hover:scale-125 transition-transform duration-300 cursor-pointer"
                   onClick={() => openModal(entry)}>
                <div className="w-3 h-3 bg-surface-tint rounded-full glow-green"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedEntry && (
        <div
          className="fixed inset-0 z-[100] bg-background/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-4xl bg-surface border border-surface-tint shadow-[0_0_50px_rgba(52,229,7,0.2)] rounded overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-outline-variant flex items-center justify-between px-4 py-3 border-b border-surface-tint">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-surface-tint">work_history</span>
                <span className="font-code-md text-label-sm text-surface-tint">{selectedEntry.id}</span>
              </div>
              <button
                onClick={closeModal}
                className="text-surface-tint hover:bg-surface-tint hover:text-surface transition-colors p-1 flex items-center justify-center"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col h-full max-h-[819px] overflow-y-auto">
              {/* Header Section */}
              <div className="p-8 border-b border-outline-variant bg-surface-container-low/30">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-code-md text-surface-tint text-label-sm">{selectedEntry.year} - {selectedEntry.yearEnd}</span>
                    <span className="text-on-surface-variant">/</span>
                    <span className="font-code-md text-on-surface-variant text-label-sm">{selectedEntry.company}</span>
                  </div>
                  <h2 className="font-display-lg text-headline-md md:text-display-lg text-surface-tint">
                    {selectedEntry.title}
                  </h2>
                </div>
                <p className="text-body-md text-on-surface leading-relaxed">{selectedEntry.description}</p>
              </div>

              {/* Tasks Section */}
              <div className="p-8 border-b border-outline-variant">
                <h3 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-4 border-b border-outline-variant inline-block pb-2">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3 mt-4">
                  {selectedEntry.tasks.map((task: string, idx: number) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-surface-tint flex-shrink-0 mt-1">▸</span>
                      <span className="text-body-md text-on-surface-variant">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Gallery */}
              <div className="p-8">
                <h3 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest mb-4 inline-block">
                  Visual Records
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  {selectedEntry.images.map((image: string, idx: number) => (
                    <div
                      key={idx}
                      className="group overflow-hidden rounded border border-outline-variant aspect-square bg-black"
                    >
                      <img
                        src={image}
                        alt={`Record ${idx + 1}`}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-surface-container-low px-4 py-2 border-t border-outline-variant flex justify-between items-center">
              <span className="text-[10px] font-code-md text-on-surface-variant">RECORD_VERIFIED // ACCESS_LEVEL: STANDARD</span>
              <span className="text-[10px] font-code-md text-on-surface-variant">V2024.Q1</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
