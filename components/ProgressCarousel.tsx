'use client';

import { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';

const ProgressCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const cards = [
    {
      number: '15+',
      title: 'Countries Detailed',
      subtitle: 'Analysis Available',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
    {
      number: '100+',
      title: 'Countries Detailed',
      subtitle: 'Analysis Available',
      image: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80',
    },
    {
      number: '80+',
      title: 'Countries Detailed',
      subtitle: 'Analysis Available',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80',
    },
    {
      number: '3000+',
      title: 'Countries Detailed',
      subtitle: 'Analysis Available',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    },
  ];

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const nextSlide = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const prevSlide = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 max-w-2xl leading-tight">
            Pioneering Sustainable and Inclusive Progress
          </h2>

          {/* Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prevSlide}
              disabled={isBeginning}
              className={`p-3 border rounded-lg transition-all duration-200 ${
                isBeginning
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-white'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isEnd}
              className={`p-3 border rounded-lg transition-all duration-200 ${
                isEnd
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-white'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            slidesPerView={1.2}
            spaceBetween={16}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="overflow-visible"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                    currentIndex === index
                      ? 'transform -translate-y-4 shadow-2xl'
                      : 'transform translate-y-0 shadow-lg'
                  }`}
                  style={{ aspectRatio: '3/4' }}
                >
                  {/* Background Image */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-indigo-950/70 to-indigo-950/40" />

                  {/* Content */}
                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
                    {/* Top Content */}
                    <div>
                      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3">
                        {card.number}
                      </h3>
                      <p className="text-white font-medium text-base sm:text-lg">
                        {card.title}
                      </p>
                      <p className="text-white/90 text-base sm:text-lg">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Bottom Button */}
                    <div className="flex items-center justify-between bg-indigo-700 hover:bg-indigo-600 transition-colors duration-200 rounded-lg p-3 sm:p-4 cursor-pointer group">
                      <span className="text-white text-sm sm:text-base font-medium">
                        See What We Can Do
                      </span>
                      <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={prevSlide}
            disabled={isBeginning}
            className={`p-3 border rounded-lg transition-all duration-200 ${
              isBeginning
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-white'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {cards.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={isEnd}
            className={`p-3 border rounded-lg transition-all duration-200 ${
              isEnd
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-white'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgressCarousel;
