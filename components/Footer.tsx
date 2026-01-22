'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Industry': [
      { name: 'Reports', href: '#' },
      { name: 'Insights and Updates', href: '#' },
    ],
    'Who We Are': [
      { name: 'Get To Know Us', href: '#' },
      { name: 'Core Services', href: '#' },
      { name: 'Client Success', href: '#' },
      { name: 'News and Press', href: '#' },
    ],
    'Quick Links': [
      { name: 'Sitemap', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Return Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg transform group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <span className="text-2xl font-bold">IDE</span>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed max-w-sm">
              Transforming industries with innovative solutions and data-driven insights. Join us in shaping the future.
            </p>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Sign up for Our newsletter by entering your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-full focus:outline-none focus:border-purple-500 transition-colors duration-200 text-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 group">
                  <span className="font-semibold">Subscribe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-lg font-semibold">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-purple-500 group-hover:w-full transition-all duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Visit Us</h4>
                <p className="text-sm text-gray-400">123 Business Street, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Call Us</h4>
                <p className="text-sm text-gray-400">+1 (555) 123-4567<br />Mon-Fri 9am-6pm EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email Us</h4>
                <p className="text-sm text-gray-400">contact@ide.com<br />support@ide.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2024 Hablemos. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* FAQs Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                FAQs
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                How To Order
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Delivery Method
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600" />
    </footer>
  );
};

export default Footer;
