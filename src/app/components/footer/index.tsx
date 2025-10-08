"use client"

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, ArrowUp, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Heritage', href: '#heritage' },
    { name: 'Products', href: '#products' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Polo Water Tank',
    'Oasis Water Tank',
    'Resin HDPE',
    'Instalasi Pengolahan Air Limbah',
  ];

  const socialLinks = [
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block text-2xl font-light tracking-wider mb-6 hover:opacity-80 transition-opacity">
              <span className="font-semibold">IMEX</span>
              <span className="font-extralight">TAMA</span>
            </a>
            <p className="text-sm font-light text-gray-400 leading-relaxed mb-6">
              Menghadirkan solusi manufaktur presisi berkualitas tinggi sejak 1993. Keahlian tradisional bertemu inovasi modern.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-gray-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm font-light text-gray-400">
                  Jl. Kyai Tambak Deres 287-291, Bulak,<br />
                  Surabaya 60124, Indonesia
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-normal tracking-widest text-white mb-6 uppercase">
              Navigasi
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-px bg-white group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-normal tracking-widest text-white mb-6 uppercase">
              Produk
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm font-light text-gray-400 flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-600 mt-1.5 mr-2 flex-shrink-0"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-sm font-normal tracking-widest text-white mb-6 uppercase">
              Hubungi Kami
            </h3>
            <div className="space-y-4 mb-6">
              <a
                href="tel:+623151503390"
                className="flex items-center space-x-3 text-sm font-light text-gray-400 hover:text-white transition-colors group"
              >
                <Phone size={18} strokeWidth={1.5} className="flex-shrink-0" />
                <span>+62 31 5150 3390</span>
              </a>
              <a
                href="mailto:admin@poloasis.id"
                className="flex items-center space-x-3 text-sm font-light text-gray-400 hover:text-white transition-colors group"
              >
                <Mail size={18} strokeWidth={1.5} className="flex-shrink-0" />
                <span>admin@poloasis.id</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-light tracking-wider text-gray-500 mb-3 uppercase">
                Ikuti Kami
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 group"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm font-light text-gray-500">
            <span>© 2025 IMEXTAMA. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 text-sm font-light text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 border border-gray-700 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
              <ArrowUp size={16} strokeWidth={1.5} />
            </div>
          </button>
        </div>
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-300 to-purple-500 opacity-5 blur-3xl pointer-events-none"></div>
    </footer>
  );
}