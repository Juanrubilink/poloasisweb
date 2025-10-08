"use client"

import React, { useEffect, useState } from 'react';
import { ArrowRight, Award, Clock, Shield } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Main Hero Content */}
      <div className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Established Badge */}
              <div className={`inline-flex items-center space-x-2 text-sm font-light tracking-widest text-gray-600 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="w-8 h-px bg-gray-400"></div>
                <span>ESTABLISHED 1993</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-light leading-tight text-gray-900">
                <span className={`block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Precision
                </span>
                <span className={`block mt-2 bg-gradient-to-br from-red-300 to-blue-500 via-purple-500 bg-clip-text text-transparent font-normal transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  crafted
                </span>
                <span className={`block mt-2 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  for excellence
                </span>
              </h1>

              {/* Subheadline */}
              <p className={`text-lg lg:text-xl font-light text-gray-600 leading-relaxed max-w-xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                Dimana keahlian manufaktur tradisional bertemu dengan inovasi modern. 
                Menghadirkan komponen berkualitas luar biasa selama lebih dari tiga dekade.
              </p>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-all duration-300"
                >
                  Pelajari Produk
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                <a
                  href="#products"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-900 text-sm font-light tracking-wide hover:border-gray-900 transition-all duration-300"
                >
                  Hubungi Kami
                </a>
              </div>

              {/* Trust Indicators */}
              <div className={`grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div>
                  <div className="text-3xl font-light text-gray-900">32+</div>
                  <div className="text-sm font-light text-gray-600 mt-1">Tahun Penglaman</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900">10,000+</div>
                  <div className="text-sm font-light text-gray-600 mt-1">Proyek Selesai</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-gray-900">98%</div>
                  <div className="text-sm font-light text-gray-600 mt-1">Kepuasan Klien</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className={`relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {/* Placeholder for manufacturing image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-center space-y-4">
                    <img src="/assets/products-2.jpg" alt="Manufacturing" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className={`absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 opacity-10 blur-3xl transition-all duration-2000 ${isVisible ? 'scale-100' : 'scale-0'}`}></div>
              </div>

              {/* Floating Card */}
              <div className={`absolute -bottom-8 -left-8 bg-white p-6 shadow-xl max-w-xs transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-0 -translate-x-8 translate-y-8'}`}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 flex items-center justify-center">
                    <Award className="text-white" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-normal text-gray-900 mb-1">Sertifikasi ISO 9001</h3>
                    <p className="text-xs font-light text-gray-600 leading-relaxed">
                      Berkomitmen pada standar kualitas tertinggi di setiap proyek.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Strip */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className={`flex items-start space-x-4 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex-shrink-0 mt-1">
                <Clock size={20} strokeWidth={1.5} className="text-gray-700" />
              </div>
              <div>
                <h3 className="text-sm font-normal text-gray-900 mb-1 tracking-wide">Pengiriman Tepat Waktu</h3>
                <p className="text-sm font-light text-gray-600">
                  Penjadwalan presisi bertemu eksekusi yang handal
                </p>
              </div>
            </div>
            <div className={`flex items-start space-x-4 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex-shrink-0 mt-1">
                <Shield size={20} strokeWidth={1.5} className="text-gray-700" />
              </div>
              <div>
                <h3 className="text-sm font-normal text-gray-900 mb-1 tracking-wide">Kualitas Terjamin</h3>
                <p className="text-sm font-light text-gray-600">
                  Setiap komponen diperiksa dengan standar yang ketat
                </p>
              </div>
            </div>
            <div className={`flex items-start space-x-4 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex-shrink-0 mt-1">
                <Award size={20} strokeWidth={1.5} className="text-gray-700" />
              </div>
              <div>
                <h3 className="text-sm font-normal text-gray-900 mb-1 tracking-wide">Keahlian Ahli</h3>
                <p className="text-sm font-light text-gray-600">
                  Puluhan tahun pengalaman dalam manufaktur presisi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}