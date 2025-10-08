"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Droplets, Flame, RotateCw, CheckCircle, Settings, PackageCheck, ArrowRight } from 'lucide-react';

export default function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  const processSteps = [
    {
      number: '01',
      title: 'Persiapan Material',
      subtitle: 'Material Selection',
      description: 'Pemilihan resin HDPE berkualitas tinggi dan pewarna sesuai spesifikasi. Material diperiksa untuk memastikan kualitas optimal sebelum proses dimulai.',
      icon: Droplets,
      details: ['Quality Check', 'Material Mixing', 'Color Matching']
    },
    {
      number: '02',
      title: 'Pemuatan & Pemanasan',
      subtitle: 'Loading & Heating',
      description: 'Material dimuat ke dalam cetakan dan dipanaskan secara bertahap. Cetakan diputar dalam dua sumbu untuk distribusi material yang merata.',
      icon: Flame,
      details: ['Mold Loading', 'Temperature Control', 'Even Distribution']
    },
    {
      number: '03',
      title: 'Rotasi & Pembentukan',
      subtitle: 'Rotation & Molding',
      description: 'Proses rotomolding dengan kecepatan terkontrol untuk membentuk produk. Material meleleh dan melapisi dinding cetakan secara sempurna.',
      icon: RotateCw,
      details: ['Bi-axial Rotation', 'Uniform Thickness', 'Precision Control']
    },
    {
      number: '04',
      title: 'Pendinginan',
      subtitle: 'Cooling Process',
      description: 'Produk didinginkan secara bertahap dengan kontrol suhu yang ketat. Proses pendinginan yang tepat memastikan kekuatan struktural optimal.',
      icon: Settings,
      details: ['Controlled Cooling', 'Stress Relief', 'Dimensional Stability']
    },
    {
      number: '05',
      title: 'Finishing & QC',
      subtitle: 'Quality Control',
      description: 'Produk dilepas dari cetakan dan dilakukan finishing. Inspeksi menyeluruh untuk memastikan setiap produk memenuhi standar kualitas kami.',
      icon: CheckCircle,
      details: ['Demolding', 'Trimming', 'Final Inspection']
    },
    {
      number: '06',
      title: 'Pengemasan',
      subtitle: 'Packaging',
      description: 'Produk dikemas dengan hati-hati menggunakan material pelindung. Setiap unit diberi label dan dokumentasi lengkap sebelum pengiriman.',
      icon: PackageCheck,
      details: ['Protective Packaging', 'Labeling', 'Documentation']
    }
  ];

  const advantages = [
    {
      title: 'Kekuatan Struktural',
      description: 'Distribusi material yang merata menghasilkan produk dengan kekuatan tinggi dan tahan lama.'
    },
    {
      title: 'Desain Fleksibel',
      description: 'Dapat memproduksi berbagai bentuk dan ukuran sesuai kebutuhan spesifik pelanggan.'
    },
    {
      title: 'Efisiensi Biaya',
      description: 'Proses yang efisien dengan minimal waste material, menghasilkan harga yang kompetitif.'
    },
    {
      title: 'Kualitas Konsisten',
      description: 'Kontrol proses yang ketat memastikan setiap produk memiliki kualitas yang sama.'
    }
  ];

  return (
    <section id="process" ref={sectionRef} className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className={`inline-flex items-center space-x-2 text-sm font-light tracking-widest text-gray-600 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-8 h-px bg-gray-400"></div>
            <span>OUR PROCESS</span>
            <div className="w-8 h-px bg-gray-400"></div>
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-light leading-tight text-gray-900 mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Proses yang
            <span className={`block mt-2 font-normal transition-all duration-1500 delay-500 ${isVisible ? 'bg-gradient-to-br from-red-300 to-blue-500 via-purple-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
              presisi
            </span>
            <span className="block mt-2">dalam setiap tahap</span>
          </h2>
          
          <p className={`text-lg font-light text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Teknologi rotomolding modern dikombinasikan dengan keahlian tradisional untuk menghasilkan produk berkualitas superior dengan konsistensi tinggi.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-20">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={step.number}
                className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`grid lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Number & Icon */}
                  <div className={`lg:col-span-2 ${isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-11'}`}>
                    <div className="flex lg:flex-col items-center lg:items-start space-x-4 lg:space-x-0 lg:space-y-4">
                      <div className="text-6xl lg:text-7xl font-extralight text-gray-200 leading-none">
                        {step.number}
                      </div>
                      <div className={`flex-shrink-0 w-16 h-16 border-2 border-gray-900 bg-white flex items-center justify-center transition-all duration-500 ${activeStep === index ? 'bg-gradient-to-br from-red-300 to-blue-500 via-purple-500 border-transparent' : ''}`}>
                        <Icon className={`transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-gray-900'}`} size={28} strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="group p-8 lg:p-10 border border-gray-200 bg-white hover:border-gray-900 transition-all duration-500">
                      {/* Title */}
                      <div className="mb-4">
                        <div className="text-xs font-light tracking-widest text-gray-500 mb-2">
                          {step.subtitle}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-light text-gray-900 tracking-wide">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-base font-light text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-900 group-hover:bg-gradient-to-br group-hover:from-red-300 group-hover:to-blue-500 group-hover:via-purple-500 transition-all duration-500"></div>
                            <span className="text-sm font-light text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Decorative line */}
                      <div className="mt-6 w-0 h-px bg-gradient-to-r from-red-300 to-blue-500 via-purple-500 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line (except last) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-full w-px h-8 bg-gray-200"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Advantages of Rotomolding */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Keunggulan Rotomolding
            </h3>
            <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
              Teknologi manufaktur yang menghasilkan produk berkualitas superior dengan berbagai keunggulan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.title}
                className={`p-6 border border-gray-200 bg-white hover:border-gray-900 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="w-8 h-px bg-gray-900 mb-4"></div>
                <h4 className="text-lg font-light text-gray-900 mb-3 tracking-wide">
                  {advantage.title}
                </h4>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Box */}
        {/* <div className={`mt-20 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative p-10 lg:p-12 border border-gray-200 bg-white">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 mb-4">
                <RotateCw className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                Tertarik Memahami Proses Kami?
              </h3>
              <p className="text-base font-light text-gray-600 leading-relaxed mb-6">
                Hubungi tim kami untuk menjadwalkan kunjungan atau konsultasi proyek Anda.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-all duration-300"
              >
                Hubungi Kami
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gray-900"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gray-900"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gray-900"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gray-900"></div>
          </div>
        </div> */}
      </div>

       {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-blue-600 opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-red-300 to-purple-500 opacity-5 blur-3xl pointer-events-none"></div>
    </section>
  );
}