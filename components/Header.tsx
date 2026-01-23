'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const megaMenus = {
    'Sobre Nosotros': {
      columns: [
        {
          title: 'Nuestra Empresa',
          links: [
            { name: 'Quiénes Somos', href: '/about' },
            { name: 'Nuestra Historia', href: '/about#history' },
            { name: 'Misión y Visión', href: '/about#mission' },
            { name: 'Valores', href: '/about#values' },
          ],
        },
        {
          title: 'Equipo',
          links: [
            { name: 'Liderazgo', href: '/about#leadership' },
            { name: 'Expertos', href: '/about#experts' },
            { name: 'Carreras', href: '/careers' },
          ],
        },
        {
          title: 'Recursos',
          links: [
            { name: 'Blog', href: '/blog' },
            { name: 'Casos de Éxito', href: '/success-stories' },
            { name: 'FAQ', href: '/faq' },
          ],
        },
      ],
    },
    'Categorías': {
      columns: [
        {
          title: 'Tecnología',
          links: [
            { name: 'Inteligencia Artificial', href: '/categories/ai' },
            { name: 'Cloud Computing', href: '/categories/cloud' },
            { name: 'Ciberseguridad', href: '/categories/security' },
            { name: 'IoT', href: '/categories/iot' },
          ],
        },
        {
          title: 'Negocios',
          links: [
            { name: 'Estrategia Digital', href: '/categories/digital-strategy' },
            { name: 'Marketing', href: '/categories/marketing' },
            { name: 'Finanzas', href: '/categories/finance' },
          ],
        },
        {
          title: 'Industrias',
          links: [
            { name: 'Salud', href: '/categories/health' },
            { name: 'Retail', href: '/categories/retail' },
            { name: 'Manufactura', href: '/categories/manufacturing' },
            { name: 'Educación', href: '/categories/education' },
          ],
        },
      ],
    },
  };

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/about', hasDropdown: true },
    { name: 'Categorías', href: '/categories', hasDropdown: true },
    { name: 'Nota de Prensa', href: '/press' },
    { name: 'Contáctenos', href: '/contact' },
  ];

  return (
    <header
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
              informes
            </span>
            <span className="text-lg lg:text-xl text-gray-900 tracking-tight">
              de <span className="text-purple-600">expertos</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.hasDropdown ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      activeDropdown === link.name
                        ? 'text-purple-600 bg-purple-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center">
            <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-px h-5 bg-gray-200 mx-1" />
            <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <Phone className="w-5 h-5 text-gray-600" />
            </button>
            <div className="w-px h-5 bg-gray-200 mx-1" />
            <button className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mega Dropdown Menu */}
      {activeDropdown && megaMenus[activeDropdown as keyof typeof megaMenus] && (
        <div
          className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-3 gap-8">
              {megaMenus[activeDropdown as keyof typeof megaMenus].columns.map(
                (column, colIndex) => (
                  <div key={colIndex}>
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                      {column.title}
                    </h3>
                    <ul className="space-y-3">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-sm"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === link.name ? null : link.name
                          )
                        }
                        className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 py-3 px-4 hover:bg-gray-50 rounded-lg"
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === link.name && (
                        <div className="pl-4 pb-2">
                          {megaMenus[link.name as keyof typeof megaMenus].columns.map(
                            (column, colIndex) => (
                              <div key={colIndex} className="py-2">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-2">
                                  {column.title}
                                </h4>
                                {column.links.map((subLink, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subLink.href}
                                    className="block py-2 px-4 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    {subLink.name}
                                  </Link>
                                ))}
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 py-3 px-4 hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-2 pt-4 mt-4 border-t border-gray-100">
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <User className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Phone className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
