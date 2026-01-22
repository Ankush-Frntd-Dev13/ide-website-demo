'use client';

import { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Globe, Award } from 'lucide-react';

const LeadershipSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const stats = [
    {
      number: '15+',
      label: 'Countries Detailed Analysis Available',
      icon: Globe,
      color: 'from-blue-600 to-blue-800',
    },
    {
      number: '100+',
      label: 'Pages per Coverage',
      icon: TrendingUp,
      color: 'from-purple-600 to-purple-800',
    },
    {
      number: '80+',
      label: 'Companies in the sample',
      icon: Users,
      color: 'from-pink-600 to-pink-800',
    },
    {
      number: '3000+',
      label: 'Happy Clients',
      icon: Award,
      color: 'from-indigo-600 to-indigo-800',
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Commitment <span className="text-purple-600">to Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering Sustainable and Inclusive Progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                  activeCard === index
                    ? 'bg-gradient-to-br ' + stat.color + ' scale-105 shadow-2xl'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {/* Background Blur Effect */}
                <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                  activeCard === index ? 'opacity-20' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 bg-white blur-2xl" />
                </div>

                <div className="relative space-y-4">
                  <div className={`inline-flex p-3 rounded-2xl transition-colors duration-300 ${
                    activeCard === index ? 'bg-white/20' : 'bg-white'
                  }`}>
                    <Icon className={`w-8 h-8 transition-colors duration-300 ${
                      activeCard === index ? 'text-white' : 'text-purple-600'
                    }`} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className={`text-4xl font-bold transition-colors duration-300 ${
                      activeCard === index ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.number}
                    </h3>
                    <p className={`text-sm font-medium leading-relaxed transition-colors duration-300 ${
                      activeCard === index ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </p>
                  </div>

                  <button className={`flex items-center space-x-2 text-sm font-semibold transition-all duration-300 ${
                    activeCard === index ? 'text-white' : 'text-purple-600'
                  }`}>
                    <span>See What We Do</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCard === index ? 'bg-white scale-150' : 'bg-purple-600'
                }`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <span className="font-semibold text-lg">Explore Our Impact</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
