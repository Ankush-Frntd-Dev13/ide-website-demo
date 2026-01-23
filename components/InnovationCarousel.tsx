'use client';

import { useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';

const InnovationCarousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      title: 'Favoriser l\'innovation et la technologie',
      description: 'Débloquez le potentiel de votre entreprise grâce aux insights du marché et aux stratégies d\'approvisionnement',
      cardText: 'De la génération de contenu pilotée par l\'IA aux expériences immersives en réalité virtuelle et à la gestion des droits numériques alimentée par la blockchain, De la génération de contenu pilotée par l\'IA aux expériences immersives en réalité virtuelle et à la gestion des droits numériques alimentée par la blockchain,',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80',
    },
    {
      title: 'Croissance Durable',
      description: 'Construisez une valeur durable grâce à l\'innovation stratégique et aux pratiques commerciales durables.',
      cardText: 'En comprenant et en exploitant les besoins des clients, les entreprises peuvent créer une valeur tangible et de la satisfaction, conduisant à des relations mutuellement bénéfiques qui se traduisent par une croissance durable.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
    },
    {
      title: 'Transformation Digitale',
      description: 'Transformez votre entreprise avec une technologie de pointe et des stratégies innovantes.',
      cardText: 'Nous aidons les organisations à naviguer dans le paysage numérique avec confiance et expertise, en créant des solutions personnalisées qui répondent à vos besoins uniques.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    },
  ];

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setCurrentIndex(swiper.realIndex);
    setProgress(0);
  }, []);

  const handleAutoplayTimeLeft = useCallback((_swiper: SwiperType, _timeLeft: number, percentage: number) => {
    setProgress((1 - percentage) * 100);
  }, []);

  const nextSlide = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const prevSlide = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Left Content - Title and Description */}
          <div className="lg:w-[32%] flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6 transition-all duration-500">
              {slides[currentIndex].title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed transition-all duration-500">
              {slides[currentIndex].description}
            </p>
          </div>

          {/* Right Content - Carousel */}
          <div className="lg:w-[68%] flex-grow -mr-4 sm:-mr-6 lg:-mr-8">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              onSlideChange={handleSlideChange}
              onAutoplayTimeLeft={handleAutoplayTimeLeft}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              slidesPerView={1.2}
              spaceBetween={12}
              centeredSlides={false}
              loop
              breakpoints={{
                480: {
                  slidesPerView: 1.3,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.4,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
              }}
              className="overflow-visible"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  {({ isActive }) => (
                    <div
                      className={`relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-500 ${
                        isActive
                          ? 'shadow-2xl scale-100 opacity-100'
                          : 'shadow-lg scale-[0.85] opacity-60'
                      }`}
                      style={{
                        aspectRatio: '4/3',
                        transformOrigin: 'left center'
                      }}
                    >
                      {/* Background Image */}
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 80vw, 50vw"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                      {/* Card Text Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5">
                        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-5 shadow-lg">
                          <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-4 sm:line-clamp-5 lg:line-clamp-6">
                            {slide.cardText}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Bottom Section - Progress Bar and Navigation */}
        <div className="mt-8 lg:mt-12">
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            {/* Progress Bar */}
            <div className="flex-1">
              <div className="flex gap-1.5 sm:gap-2">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden"
                  >
                    <div
                      className="h-full bg-blue-600 rounded-full transition-all duration-100"
                      style={{
                        width: index === currentIndex
                          ? `${progress}%`
                          : index < currentIndex
                            ? '100%'
                            : '0%',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={prevSlide}
                className="p-2 border border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>

              <span className="text-sm text-gray-600 font-medium min-w-[36px] text-center">
                {currentIndex + 1}/{slides.length}
              </span>

              <button
                onClick={nextSlide}
                className="p-2 border border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationCarousel;
