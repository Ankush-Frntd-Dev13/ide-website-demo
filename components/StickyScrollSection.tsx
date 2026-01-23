'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StickyScrollSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      number: '01',
      title: 'Brand Strategy & Identity',
      description: 'We build a brand strategy and identity designed to elevate and grow your brand.',
      leftTitle: 'Brand Strategy & Identity',
      leftDescription: 'Every organization moves differently. That\'s why we develop solutions built on insight, expertise, and a sharp understanding of your brand.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80',
    },
    {
      number: '02',
      title: 'Digital Development',
      description: 'Custom-built websites and webshops that combine aesthetics, conversion, and scalability.',
      leftTitle: 'Digital Development',
      leftDescription: 'We create powerful digital experiences through custom development, ensuring your platform is fast, scalable, and conversion-focused.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80',
    },
    {
      number: '03',
      title: 'Digital Marketing',
      description: 'Marketing that expands your reach and delivers more conversions. From campaigns to automation: everything works together.',
      leftTitle: 'Digital Marketing',
      leftDescription: 'Strategic marketing solutions that drive growth, expand your reach, and convert visitors into loyal customers through data-driven campaigns.',
      image: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&q=80',
    },
    {
      number: '04',
      title: 'Photography & Visual Production',
      description: 'Professional photography and visual content that captures your brand essence and tells your story.',
      leftTitle: 'Photography & Visual Production',
      leftDescription: 'Stunning visual content that captures attention and tells your brand story through professional photography and creative production.',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339bbe3c35?w=600&q=80',
    },
    {
      number: '05',
      title: 'Content Strategy',
      description: 'Strategic content planning and creation that engages your audience and drives meaningful results.',
      leftTitle: 'Content Strategy',
      leftDescription: 'Comprehensive content strategies that engage your audience, build authority, and drive meaningful business results.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    },
    {
      number: '06',
      title: 'Data & Analytics',
      description: 'Data-driven insights and analytics that help you make smarter decisions and optimize performance.',
      leftTitle: 'Data & Analytics',
      leftDescription: 'Transform raw data into actionable insights that drive smarter decisions and optimize your business performance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animate left content when activeIndex changes (only on desktop)
  useEffect(() => {
    if (isMobile || !titleRef.current || !descRef.current) return;

    const tl = gsap.timeline();

    tl.to([titleRef.current, descRef.current], {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.in',
    })
      .call(() => {
        if (titleRef.current) {
          titleRef.current.textContent = services[activeIndex].leftTitle;
        }
        if (descRef.current) {
          descRef.current.textContent = services[activeIndex].leftDescription;
        }
      })
      .to([titleRef.current, descRef.current], {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.1,
      });
  }, [activeIndex, isMobile]);

  // Pin the section and handle scroll-based active index (only on desktop)
  useEffect(() => {
    if (isMobile || !triggerRef.current || !containerRef.current || !leftPanelRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the left panel while scrolling through the section
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: leftPanelRef.current,
        pinSpacing: false,
      });

      // Create scroll triggers for each item to update active index
      itemRefs.current.forEach((item, index) => {
        if (item) {
          ScrollTrigger.create({
            trigger: item,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => setActiveIndex(index),
            onEnterBack: () => setActiveIndex(index),
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (!isMobile) {
      itemRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <section className="relative bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <span className="text-sm tracking-widest text-gray-400 uppercase">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-light leading-tight mt-4">
              <span className="italic font-serif">Expertise that performs</span>
            </h2>
            <p className="text-base text-gray-400 mt-4 leading-relaxed">
              Every organization moves differently. That&apos;s why we develop solutions built on insight, expertise, and a sharp understanding of your brand.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`cursor-pointer transition-all duration-300 rounded-xl overflow-hidden ${
                  activeIndex === index
                    ? 'bg-gray-900'
                    : 'bg-gray-900/30'
                }`}
              >
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-xs text-gray-500 font-mono mt-1">
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-medium text-white">
                          {service.title}
                        </h3>
                        <ArrowRight
                          className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                            activeIndex === index
                              ? 'text-white rotate-90'
                              : 'text-gray-600'
                          }`}
                        />
                      </div>

                      {/* Expandable content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="relative h-40 sm:h-48 rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout with GSAP pinning
  return (
    <section ref={containerRef} className="relative bg-black text-white">
      <div ref={triggerRef} className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row gap-8">
            {/* Left Side - Gets pinned by GSAP */}
            <div
              ref={leftPanelRef}
              className="w-[45%] h-screen flex flex-col justify-center pr-12 bg-black"
            >
              <div className="space-y-8">
                <span className="text-sm tracking-widest text-gray-400 uppercase">
                  Services
                </span>

                <h2
                  ref={titleRef}
                  className="text-5xl xl:text-6xl font-light leading-tight"
                >
                  <span className="italic font-serif">
                    {services[0].leftTitle}
                  </span>
                </h2>

                <p
                  ref={descRef}
                  className="text-lg text-gray-400 max-w-md leading-relaxed"
                >
                  {services[0].leftDescription}
                </p>

                {/* Progress Indicators */}
                <div className="flex items-center gap-3 pt-6">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleClick(index)}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        activeIndex === index
                          ? 'bg-white w-10'
                          : 'bg-gray-700 w-3 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to service ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Scrollable content */}
            <div className="w-[55%] py-32 ml-auto">
              {/* Top spacer */}
              <div className="h-[30vh]" />

              {services.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onClick={() => handleClick(index)}
                  className={`cursor-pointer transition-all duration-500 mb-8 rounded-xl overflow-hidden ${
                    activeIndex === index
                      ? 'bg-gray-900/80'
                      : 'bg-transparent hover:bg-gray-900/40'
                  }`}
                >
                  <div className="p-8">
                    {/* Content and Image in horizontal layout */}
                    <div className="flex flex-row gap-6">
                      {/* Text Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-4">
                          <span className="text-sm text-gray-500 font-mono flex-shrink-0">
                            {service.number}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-xl xl:text-2xl font-medium text-white">
                                {service.title}
                              </h3>
                              <ArrowRight
                                className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                                  activeIndex === index
                                    ? 'text-white translate-x-1'
                                    : 'text-gray-600'
                                }`}
                              />
                            </div>
                            <p className="text-gray-400 text-base leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image on the Right */}
                      <div
                        className={`transition-all duration-500 ease-out overflow-hidden flex-shrink-0 ${
                          activeIndex === index
                            ? 'w-64 xl:w-72 opacity-100'
                            : 'w-0 opacity-0'
                        }`}
                      >
                        <div className="relative h-full min-h-[180px] rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Separator line */}
                  {index < services.length - 1 && activeIndex !== index && (
                    <div className="h-px bg-gray-800 mx-8" />
                  )}
                </div>
              ))}

              {/* Bottom spacer */}
              <div className="h-[30vh]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyScrollSection;
