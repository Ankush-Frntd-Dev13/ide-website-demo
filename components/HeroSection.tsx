'use client';

import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Perspectivas impactantes</span>
                <br />
                <span className="text-gray-900">para su industria</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Aprovechamos el poder de la IA para impulsar la innovación, transformar industrias, 
                y Aprovechamos el poder de la IA para impulsar la innovación, transformar 
                industrias, y Aprovechamos el poder de la IA para impulsar la innovación
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
                <span className="font-semibold">Connexión</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Large Image */}
              <div className="col-span-1 row-span-2 relative h-[400px] rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 animate-pulse" />
                    <div className="w-12 h-12 bg-yellow-300 rounded-full mx-auto animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </div>

              {/* Top Right */}
              <div className="relative h-[192px] bg-black rounded-2xl overflow-hidden" />

              {/* Middle Right */}
              <div className="relative h-[192px] bg-gradient-to-br from-purple-600 to-purple-900 rounded-2xl overflow-hidden" />

              {/* Bottom Left */}
              <div className="relative h-[192px] bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 rounded-2xl overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-1 bg-purple-400 rounded-full transform rotate-45 animate-pulse" />
                </div>
              </div>

              {/* Bottom Right */}
              <div className="relative h-[192px] bg-black rounded-2xl overflow-hidden" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-sm text-gray-600">Clients Worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
