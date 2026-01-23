'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 pt-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 italic font-serif">
                Perspectivas impactantes
                <br />
                para su industria
              </h1>

              <p className="text-base text-gray-600 max-w-lg leading-relaxed">
                Aprovechamos el poder de la IA para impulsar la innovación, transformar industrias
                y Aprovechamos el poder de la IA para impulsar la innovación, transformar
                industrias y Aprovechamos el poder de la IA para impulsar la
              </p>
            </div>

            <div>
              <button className="group inline-flex items-center px-8 py-4 border-2 border-blue-200 text-blue-600 rounded-full hover:bg-blue-50 transition-all duration-300">
                <span className="font-medium">Connexion</span>
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - 3D Box Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80"
                  alt="3D Abstract"
                  fill
                  className="object-cover"
                />
                {/* Yellow decorative dots */}
                <div className="absolute top-6 right-6 w-4 h-4 bg-yellow-400 rounded-full" />
                <div className="absolute bottom-16 left-1/2 w-3 h-3 bg-yellow-400 rounded-full" />
              </div>

              {/* Top Right - Purple gradient */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80"
                  alt="Purple Abstract"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Left - Dark abstract */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-900">
                <Image
                  src="https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&q=80"
                  alt="Dark Abstract"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom Right - Pink particles */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80"
                  alt="Pink Abstract"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
