'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InnovationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      title: 'Favoriser l\'innovation et la technologie',
      description: 'Découvrez le potentiel de votre entreprise grâce à des insights pilotés par l\'IA qui permettent une meilleure prise de décision et ouvrent de nouvelles opportunités de croissance.',
      highlight: 'De la génération d\'image unique pilotée par l\'IA aux intégrations complexes, nous vous aidons à adopter la technologie qui compte en concevant un écosystème spécifiquement adapté à vos besoins.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Sustainable Growth',
      description: 'Build lasting value through strategic innovation and sustainable business practices.',
      highlight: 'Our approach focuses on long-term impact, creating solutions that grow with your business.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge technology and innovative strategies.',
      highlight: 'We help organizations navigate the digital landscape with confidence and expertise.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      color: 'from-indigo-600 to-purple-600',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {slides[currentIndex].title}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {slides[currentIndex].description}
              </p>

              <div className="p-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl">
                <p className="text-white leading-relaxed">
                  {slides[currentIndex].highlight}
                </p>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex items-center space-x-4">
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>0{currentIndex + 1}</span>
                  <span>/ 0{slides.length}</span>
                </div>
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
                    >
                      <div
                        className={`h-full bg-gradient-to-r ${slides[index].color} transition-all duration-300`}
                        style={{
                          width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%',
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
                  <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                    Slide {index + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-12 animate-float" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationCarousel;
