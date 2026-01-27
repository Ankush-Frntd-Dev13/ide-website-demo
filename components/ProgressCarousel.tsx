'use client';

import { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';

const ProgressCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const updateNavState = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const nextSlide = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

  const prevSlide = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal text-gray-900 tracking-tight">
            Pioneering Sustainable and Inclusive Progress
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={prevSlide}
              disabled={isBeginning}
              className={`w-12 h-12 flex items-center justify-center border rounded-lg transition-all duration-200 ${
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
              className={`w-12 h-12 flex items-center justify-center border rounded-lg transition-all duration-200 ${
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
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateNavState(swiper);
            }}
            onSlideChange={updateNavState}
            onReachBeginning={(swiper) => {
              setIsBeginning(true);
              setActiveIndex(swiper.activeIndex);
            }}
            onReachEnd={(swiper) => {
              setIsEnd(true);
              setActiveIndex(swiper.activeIndex);
            }}
            slidesPerView={1.15}
            spaceBetween={16}
            speed={400}
            grabCursor={true}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.3,
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
            className="!overflow-visible !pt-10 !pb-4"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div
                  className={`relative rounded-2xl overflow-hidden transition-all duration-500 ease-out cursor-pointer ${
                    activeIndex === index
                      ? '-translate-y-10 shadow-2xl'
                      : 'translate-y-0 shadow-md'
                  }`}
                  style={{ aspectRatio: '3/4' }}
                  onClick={() => swiperRef.current?.slideTo(index)}
                >
                  {/* Background Image */}
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/95 via-indigo-950/60 to-indigo-950/40" />

                  {/* Content */}
                  <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-between">
                    {/* Top Content */}
                    <div>
                      <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-3">
                        {card.number}
                      </h3>
                      <p className="text-white font-medium text-base sm:text-lg">
                        {card.title}
                      </p>
                      <p className="text-white/80 text-base sm:text-lg">
                        {card.subtitle}
                      </p>
                    </div>

                    {/* Bottom Button */}
                    <button className="flex items-center justify-between bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors duration-200 rounded-lg p-3 sm:p-4 group w-full">
                      <span className="text-white text-sm sm:text-base font-medium">
                        See What We Can Do
                      </span>
                      <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProgressCarousel;
