"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Factory, Users, TrendingUp, Award } from 'lucide-react';

export default function Heritage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(0);
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

  const timeline = [
    {
      year: '1993',
      title: 'Awal Perjalanan',
      description: 'Didirikan dengan visi untuk menghadirkan manufaktur presisi berkualitas tinggi di Indonesia.',
      icon: Factory
    },
    {
      year: '2000',
      title: 'Ekspansi Fasilitas',
      description: 'Menambah kapasitas produksi dengan teknologi CNC modern dan perluasan tim ahli.',
      icon: TrendingUp
    },
    {
      year: '2010',
      title: 'Sertifikasi ISO',
      description: 'Meraih sertifikasi ISO 9001, menandai komitmen kami pada standar kualitas internasional.',
      icon: Award
    },
    {
      year: '2025',
      title: 'Inovasi Berkelanjutan',
      description: 'Terus berinovasi dengan teknologi terkini sambil mempertahankan keahlian tradisional.',
      icon: Users
    }
  ];

  const values = [
    {
      title: 'Keahlian Turun Temurun',
      description: 'Pengetahuan dan keterampilan yang dipelihara dan dikembangkan selama lebih dari tiga dekade.'
    },
    {
      title: 'Komitmen Kualitas',
      description: 'Standar tertinggi dalam setiap proses, dari bahan baku hingga produk akhir.'
    },
    {
      title: 'Inovasi Berkelanjutan',
      description: 'Memadukan tradisi dengan teknologi modern untuk solusi manufaktur terdepan.'
    },
    {
      title: 'Kepercayaan Klien',
      description: 'Membangun hubungan jangka panjang berdasarkan keandalan dan hasil yang konsisten.'
    }
  ];

  return (
    <section id="heritage" ref={sectionRef} className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className={`inline-flex items-center space-x-2 text-sm font-light tracking-widest text-gray-600 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-8 h-px bg-gray-400"></div>
            <span>OUR HERITAGE</span>
            <div className="w-8 h-px bg-gray-400"></div>
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-light leading-tight text-gray-900 mb-7 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Warisan yang
            <span className={`block mt-2 font-normal transition-all duration-1500 delay-500 ${isVisible ? 'bg-gradient-to-br from-red-300 to-blue-500 via-purple-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
              membanggakan
            </span>
          </h2>
          
          <p className={`text-lg font-light text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Lebih dari tiga dekade pengalaman dalam manufaktur presisi, membangun fondasi kepercayaan dan keunggulan yang berkelanjutan.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 lg:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 lg:space-y-24">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={item.year}
                  className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                  onMouseEnter={() => setActiveYear(index)}
                >
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                      <div className="inline-block">
                        <div className="text-5xl lg:text-6xl font-extralight text-gray-300 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-light text-gray-900 mb-3 tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-base font-light text-gray-600 leading-relaxed max-w-md">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative flex-shrink-0">
                      <div className={`w-16 h-16 border-4 border-white bg-gray-900 flex items-center justify-center transition-all duration-500 ${activeYear === index ? 'scale-110 bg-gradient-to-br from-red-300 to-blue-500 via-purple-500' : ''}`}>
                        <Icon className="text-white" size={28} strokeWidth={1.5} />
                      </div>
                      {/* Outer ring */}
                      <div className={`absolute inset-0 -m-1 border border-gray-300 transition-all duration-500 ${activeYear === index ? 'scale-125 border-gray-400' : ''}`}></div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values Grid */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Nilai-Nilai Kami
            </h3>
            <p className="text-base font-light text-gray-600 max-w-2xl mx-auto">
              Prinsip fundamental yang membimbing setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group p-8 border border-gray-200 bg-white hover:border-gray-900 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-900 group-hover:bg-gradient-to-br group-hover:from-red-300 group-hover:to-blue-500 group-hover:via-purple-500 transition-all duration-500"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-light text-gray-900 mb-2 tracking-wide">
                      {value.title}
                    </h4>
                    <p className="text-sm font-light text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect line */}
                <div className="mt-6 w-0 h-px bg-gradient-to-r from-red-300 to-blue-500 via-purple-500 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Statement */}
        <div className={`mt-20 lg:mt-24 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative p-12 lg:p-16 border border-gray-200 bg-white">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="w-12 h-px bg-gray-400 mx-auto"></div>
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-900 leading-relaxed italic">
                &quot;Kami tidak hanya membuat komponen, kami membangun warisan keunggulan yang terus berkembang dari generasi ke generasi.&quot;
              </blockquote>
              <div className="text-sm font-light text-gray-600 tracking-wider">
                — IMEXTAMA FOUNDER
              </div>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gray-900"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gray-900"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gray-900"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gray-900"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-blue-600 opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-red-300 to-purple-500 opacity-5 blur-3xl pointer-events-none"></div>
    </section>
  );
}