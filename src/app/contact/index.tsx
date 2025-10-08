"use client"

import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Building } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: ['+62 31 5150 3500', '+62 31 5150 3390'],
      subtitle: 'Sen - Jum, 08:00 - 17:00'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['admin@poloasis.id', 'layanan@poloasis.id'],
      subtitle: 'Response dalam 24 jam'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      details: ['Jl. Kyai Tambak Deres 287-291, Bulak, Surabaya 60124, Indonesia'],
      subtitle: 'Kunjungan dengan perjanjian'
    }
  ];

  const operatingHours = [
    { day: 'Senin - Jumat', hours: '08:00 - 16:30' },
    { day: 'Sabtu', hours: '08:00 - 14:30' },
    { day: 'Minggu', hours: 'Tutup' }
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className={`inline-flex items-center space-x-2 text-sm font-light tracking-widest text-gray-600 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-8 h-px bg-gray-400"></div>
            <span>GET IN TOUCH</span>
            <div className="w-8 h-px bg-gray-400"></div>
          </div>
          
          <h2 className={`text-4xl lg:text-6xl font-light leading-tight text-gray-900 mb-6 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Mari kita
            <span className={`block mt-2 font-normal transition-all duration-1500 delay-500 ${isVisible ? 'bg-gradient-to-br from-red-300 to-blue-500 via-purple-500 bg-clip-text text-transparent' : 'text-gray-900'}`}>
              berdiskusi
            </span>
          </h2>
          
          <p className={`text-lg font-light text-gray-600 leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Hubungi kami untuk konsultasi proyek, permintaan penawaran, atau kunjungan fasilitas. Tim ahli kami siap membantu mewujudkan visi manufaktur Anda.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="border border-gray-200 bg-white p-8 lg:p-10">
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                Kirim Pesan
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 text-sm font-light focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="Mohammad Iqbal"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 text-sm font-light focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="mohammad@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                      Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 text-sm font-light focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="PT. Adiperkasa Wijaya Makmur"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 text-sm font-light focus:border-gray-900 focus:outline-none transition-colors"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2 tracking-wide">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 text-sm font-light focus:border-gray-900 focus:outline-none transition-colors resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-all duration-300"
                >
                  Kirim Pesan
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className={`group border border-gray-200 bg-white p-6 lg:p-8 hover:border-gray-900 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-900 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-red-300 group-hover:to-blue-500 group-hover:via-purple-500 transition-all duration-500">
                      <Icon className="text-white" size={24} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-light text-gray-900 mb-2 tracking-wide">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-base font-light text-gray-600 leading-relaxed">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm font-light text-gray-500 mt-2">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 w-0 h-px bg-gradient-to-r from-red-300 to-blue-500 via-purple-500 group-hover:w-full transition-all duration-700"></div>
                </div>
              );
            })}

            {/* Operating Hours */}
            <div className={`border border-gray-200 bg-white p-6 lg:p-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-gray-900" size={24} strokeWidth={1.5} />
                <h3 className="text-lg font-light text-gray-900 tracking-wide">
                  Jam Operasional
                </h3>
              </div>
              <div className="space-y-3">
                {operatingHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center">
                    <span className="text-sm font-light text-gray-600">
                      {schedule.day}
                    </span>
                    <span className="text-sm font-light text-gray-900">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="relative p-10 lg:p-12 border border-gray-200 bg-white">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-900 mb-4">
                <Building className="text-white" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl lg:text-3xl font-light text-gray-900 mb-4">
                Kunjungi Fasilitas Kami
              </h3>
              <p className="text-base font-light text-gray-600 leading-relaxed mb-6">
                Lihat langsung proses manufaktur kami dan diskusikan kebutuhan proyek Anda dengan tim ahli. Kami menyambut kunjungan klien dengan perjanjian terlebih dahulu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+622112345678"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-sm font-light tracking-wide hover:bg-gray-800 transition-all duration-300"
                >
                  <Phone size={18} className="mr-2" />
                  Hubungi Sekarang
                </a>
                <a
                  href="mailto:info@imextama.com"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-gray-900 text-sm font-light tracking-wide hover:border-gray-900 transition-all duration-300"
                >
                  <Mail size={18} className="mr-2" />
                  Email Kami
                </a>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gray-900"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gray-900"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gray-900"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gray-900"></div>
          </div>
        </div> */}
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-600 to-blue-600 opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-red-300 to-purple-500 opacity-5 blur-3xl pointer-events-none"></div>
    </section>
  );
}