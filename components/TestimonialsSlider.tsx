'use client';

import { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Quote } from 'lucide-react';

import 'swiper/css';

const TestimonialsSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: 'Untitled has saved us thousands of hours of work and has unlocked data insights we never thought possible.',
      author: 'Koray Okumus',
      role: 'UX Designer, Circooles',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    },
    {
      quote: 'The platform revolutionized how we approach data analysis. It\'s intuitive, powerful, and indispensable.',
      author: 'Sarah Johnson',
      role: 'Product Manager, Sisyphus',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    },
    {
      quote: 'Outstanding results and exceptional service. This tool has become central to our workflow.',
      author: 'Michael Chen',
      role: 'CEO, Catalog',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    },
  ];

  const clients = [
    { name: 'Layers', logo: '🔷' },
    { name: 'Sisyphus', logo: '⚡' },
    { name: 'Circooles', logo: '🔵' },
    { name: 'Catalog', logo: '📱' },
    { name: 'Quotient', logo: '⭕' },
  ];

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
  }, []);

  const goToSlide = useCallback((index: number) => {
    swiperRef.current?.slideToLoop(index);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonial Slider */}
        <div className="relative mb-16">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={handleSlideChange}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop
            className="min-h-[300px]"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center space-y-8">
                    {/* Quote Icon */}
                    <div className="flex justify-center">
                      <div className="p-4 bg-purple-100 rounded-full">
                        <Quote className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>

                    {/* Quote Text */}
                    <blockquote className="text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed max-w-3xl mx-auto">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-8 bg-purple-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center space-x-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </span>
                <span className="text-lg font-semibold text-gray-700">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default TestimonialsSlider;
