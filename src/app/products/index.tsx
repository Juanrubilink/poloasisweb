"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Droplet, Layers, ShieldCheck, Truck } from 'lucide-react';

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
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

  const products = [
    {
      name: 'Polo Water Tank',
      category: 'Tangki Air Premium',
      description: 'Tangki air berkualitas tinggi dengan desain ergonomis dan material tahan lama. Dilengkapi dengan teknologi tahan lumut dan UV protection untuk menjaga kualitas air tetap bersih.',
      features: ['Anti-Lumut', 'UV Protection', 'Food Grade Material'],
      capacity: '250L - 5250L',
      icon: Droplet,
      image: '/assets/products-1.jpg'
    },
    {
      name: 'Oasis Water Tank',
      category: 'Tangki Air Industrial',
      description: 'Solusi penyimpanan air untuk kebutuhan industrial dan komersial. Konstruksi kokoh dengan kapasitas besar dan sistem penyimpanan optimal bahkan baik digunakan untuk penyimpanan cairan kimia.',
      features: ['High Capacity', 'Reinforced Structure', 'Weather Resistant'],
      capacity: '250L - 5250L',
      icon: Layers,
      image: '/assets/products-2.jpg'
    },
    {
      name: 'Resin HDPE',
      category: 'Material Berkualitas Tinggi',
      description: 'Resin HDPE grade premium untuk berbagai aplikasi manufaktur. Material dengan kekuatan tinggi, tahan kimia, dan fleksibilitas dalam proses produksi.',
      features: ['High Density', 'Chemical Resistant', 'Durable'],
      capacity: 'Custom Order',
      icon: ShieldCheck,
      image: '/assets/products-3.jpg'
    },
    {
      name: 'Instalasi Pengolahan Air Limbah (IPAL)',
      category: 'Sistem Sanitasi Modern',
      description: 'Tangki septik fiberglass dengan desain modern dan efisien. Ringan, mudah dipasang, anti-bocor, dan ramah lingkungan untuk sistem sanitasi yang optimal.',
      features: ['Leak-Proof', 'Easy Installation', 'Eco-Friendly'],
      capacity: 'Custom Order',
      icon: Truck,
      image: '/assets/products-4.jpg'
    }
  ];

  return (
    <section id="products" ref={sectionRef} className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <div className={`inline-flex items-center space-x-2 text-sm font-light tracking-widest text-gray-600 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-8 h-px bg-gray-400"></div>
            <span>OUR PRODUCTS</span>
            <div className="w-8 h-px bg-gray-400"></div>
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-light leading-tight text-gray-900 mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Produk yang
            <span className={`block mt-2 font-normal transition-all duration-1500 delay-500 ${isVisible ? 'bg-gradient-to-br from-red-300 to-blue-500 via-purple-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
              terpercaya
            </span>
            <span className="block mt-2">untuk setiap kebutuhan</span>
          </h2>
          
          <p className={`text-lg font-light text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Rangkaian produk berkualitas tinggi yang dirancang untuk memenuhi standar industri dan memberikan solusi terbaik bagi pelanggan kami.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            const isActive = activeProduct === index; // ✅ use activeProduct here
            return (
              <div
                key={product.name}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onMouseEnter={() => setActiveProduct(index)}
                onMouseLeave={() => setActiveProduct(-1)} // optional reset when mouse leaves
              >
                {/* Card */}
                <div
                  className={`relative h-full border ${
                    isActive ? 'border-gray-900 shadow-xl scale-[1.02]' : 'border-gray-200'
                  } bg-white hover:border-gray-900 transition-all duration-500 overflow-hidden`}
                >
                  {/* Image */}
                  <div className="relative h-64 lg:h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-gray-400 text-center">
                        <Icon
                          size={48}
                          strokeWidth={1}
                          className={`mx-auto mb-4 ${
                            isActive ? 'text-gray-800' : 'text-gray-300'
                          } transition-colors duration-500`}
                        />
                        <p
                          className={`text-sm font-light ${
                            isActive ? 'text-gray-900' : 'text-gray-600'
                          } transition-colors duration-500`}
                        >
                          {product.name}
                        </p>
                      </div>
                    </div>

                    {/* Gradient Overlay on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ${
                        isActive
                          ? 'from-red-300/10 to-blue-500/10 via-purple-500/10'
                          : 'from-red-300/0 to-blue-500/0 via-purple-500/0'
                      }`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    {/* Category */}
                    <div className="text-xs font-light tracking-widest text-gray-500 mb-3">
                      {product.category}
                    </div>

                    {/* Product Name */}
                    <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-light text-gray-600 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Capacity */}
                    <div className="flex items-center space-x-2 mb-6">
                      <span className="text-xs font-light tracking-wide text-gray-500">Kapasitas:</span>
                      <span className="text-sm font-normal text-gray-900">{product.capacity}</span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className={`px-3 py-1 text-xs font-light tracking-wide border ${
                            isActive
                              ? 'text-gray-900 border-gray-400 bg-gray-50'
                              : 'text-gray-700 border-gray-200 bg-gray-50'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative line */}
                  <div
                    className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-red-300 to-blue-500 via-purple-500 transition-all duration-700 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Highlights */}
        <div className={`mt-20 lg:mt-24 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gray-900">
                <ShieldCheck className="text-white" size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-light text-gray-900 mb-2">Kualitas Terjamin</h4>
              <p className="text-sm font-light text-gray-600">Standar internasional</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gray-900">
                <Layers className="text-white" size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-light text-gray-900 mb-2">Material Premium</h4>
              <p className="text-sm font-light text-gray-600">Tahan lama & aman</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gray-900">
                <Truck className="text-white" size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-light text-gray-900 mb-2">Pengiriman Cepat</h4>
              <p className="text-sm font-light text-gray-600">Ke seluruh Indonesia</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gray-900">
                <Droplet className="text-white" size={24} strokeWidth={1.5} />
              </div>
              <h4 className="text-base font-light text-gray-900 mb-2">Garansi Resmi</h4>
              <p className="text-sm font-light text-gray-600">Perlindungan maksimal</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 lg:mt-20 text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex flex-col items-center space-y-4">
            <p className="text-sm font-light tracking-wide text-gray-600">
              Tertarik dengan produk kami?
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-all duration-300"
            >
              Dapatkan Penawaran
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-br from-red-300 to-purple-500 opacity-5 blur-3xl pointer-events-none"></div>
    </section>
  );
}