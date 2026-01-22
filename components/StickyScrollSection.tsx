'use client';

import { useState, useEffect, useRef } from 'react';
import { Code, Database, Zap, Globe } from 'lucide-react';

const StickyScrollSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = [
    {
      title: 'Digital Development',
      description: 'Create three-step services and embrace new challenges that will bring lasting value to your team and project.',
      icon: Code,
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Digital Marketing',
      description: 'Meaning and measurement are central or the least your measuring long-term impact and the long-lasting public health.',
      icon: Globe,
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Photography & Visual Production',
      description: 'Present photos, ideas, and ﬁl parameter visuals that create value for everyone so long as they do make a positive.',
      icon: Zap,
      color: 'from-pink-500 to-pink-700',
    },
    {
      title: 'Photographe & Press Production',
      description: 'Focus of photo, video, and ﬁl parameter visuals that create value for everyone so long as they do make a positive.',
      icon: Database,
      color: 'from-indigo-500 to-indigo-700',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollProgress = Math.max(0, -rect.top) / (section.offsetHeight - window.innerHeight);
      const newIndex = Math.min(
        Math.floor(scrollProgress * content.length),
        content.length - 1
      );

      setActiveIndex(Math.max(0, newIndex));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [content.length]);

  return (
    <section ref={sectionRef} className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Sticky Content */}
          <div className="lg:sticky lg:top-32 h-fit space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Expertise that performs
              </h2>
              <p className="text-xl text-gray-600">
                Brand Strategy & Identity
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {content[activeIndex].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {content[activeIndex].description}
                </p>
              </div>

              <div className={`inline-block p-4 bg-gradient-to-br ${content[activeIndex].color} rounded-2xl`}>
                {(() => {
                  const Icon = content[activeIndex].icon;
                  return <Icon className="w-8 h-8 text-white" />;
                })()}
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Items */}
          <div className="space-y-8">
            {content.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`p-8 rounded-3xl border-2 transition-all duration-500 ${
                    activeIndex === index
                      ? 'bg-gray-900 border-gray-900 scale-105 shadow-2xl'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`flex-shrink-0 p-4 bg-gradient-to-br ${item.color} rounded-2xl transition-all duration-500 ${
                        activeIndex === index ? 'scale-110' : ''
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3
                        className={`text-xl font-bold transition-colors duration-500 ${
                          activeIndex === index ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-base leading-relaxed transition-colors duration-500 ${
                          activeIndex === index ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyScrollSection;
