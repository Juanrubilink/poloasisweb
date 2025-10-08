"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Gauge, Cog, Boxes, Zap } from 'lucide-react';

export default function Expertise() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const expertiseAreas = [
    {
      icon: Gauge,
      title: 'Precision Machining',
      description: 'Toleransi ultra-ketat hingga mikron untuk komponen yang menuntut akurasi sempurna dalam setiap dimensi.',
      capabilities: ['CNC Milling', 'Turning', 'Grinding']
    },
    {
      icon: Cog,
      title: 'Custom Fabrication',
      description: 'Solusi manufaktur khusus yang dirancang sesuai spesifikasi unik setiap klien dengan fleksibilitas penuh.',
      capabilities: ['Sheet Metal', 'Welding', 'Assembly']
    },
    {
      icon: Boxes,
      title: 'Tool & Die Making',
      description: 'Pembuatan cetakan dan alat presisi tinggi untuk produksi massal dengan konsistensi terjamin.',
      capabilities: ['Injection Molds', 'Stamping Dies', 'Jigs & Fixtures']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Dari konsep ke prototype dalam waktu singkat, memungkinkan iterasi cepat dan pengembangan produk efisien.',
      capabilities: ['3D Printing', 'CAD/CAM', 'Testing']
    }
  ];

  return (
    <section id="expertise" ref={sectionRef} className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className={`inline-flex items-center space-x-2 text-sm font-light tracking-widest text-gray-600 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-8 h-px bg-gray-400"></div>
            <span>OUR EXPERTISE</span>
            <div className="w-8 h-px bg-gray-400"></div>
          </div>

          <h2 className={`text-4xl lg:text-6xl font-light leading-tight text-gray-900 mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Keahlian yang
            <span className={`block mt-2 font-normal transition-all duration-1500 delay-500 ${isVisible ? 'bg-gradient-to-br from-red-300 to-blue-500 via-purple-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
              terbukti
            </span>
            <span className="block mt-2">dalam setiap detail</span>
          </h2>

          <p className={`text-lg font-light text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Dengan pengalaman lebih dari tiga dekade, kami menguasai berbagai teknologi manufaktur untuk menghadirkan solusi yang tepat bagi kebutuhan industri Anda.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative h-full p-8 lg:p-10 border border-gray-200 bg-white hover:border-gray-900 transition-all duration-500">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 group-hover:bg-gradient-to-br group-hover:from-red-300 group-hover:to-blue-500 group-hover:via-purple-500 transition-all duration-500">
                      <Icon className="text-white" size={28} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                    {area.title}
                  </h3>

                  <p className="text-base font-light text-gray-600 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-2">
                    {area.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="px-3 py-1 text-xs font-light tracking-wide text-gray-700 border border-gray-200 bg-gray-50"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-red-300 to-blue-500 via-purple-500 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 lg:mt-20 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-sm font-light tracking-wide text-gray-600">
              Ingin mendiskusikan proyek Anda?
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-all duration-300"
            >
              Konsultasi Gratis
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 opacity-5 blur-3xl -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
