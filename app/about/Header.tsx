'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import clsx from 'clsx';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos < lastScrollPos || currentScrollPos < 10);
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPos]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-transform duration-300',
        isVisible ? 'translate-y-0 bg-orange-500 backdrop-blur-md shadow-md' : '-translate-y-full'
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-lg font-bold text-white">SuitMedia</h1>
        
        {/* Navigation */}
        <nav className="space-x-4">
          <NavItem href="/work" currentPath={pathname}>
            Work
          </NavItem>
          <NavItem href="/about" currentPath={pathname}>
            About
          </NavItem>
          <NavItem href="/services" currentPath={pathname}>
            Services
          </NavItem>
          <NavItem href="/" currentPath={pathname}>
            Ideas
          </NavItem>
          <NavItem href="/careers" currentPath={pathname}>
            Careers
          </NavItem>
          <NavItem href="/contact" currentPath={pathname}>
            Contact
          </NavItem>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ href, currentPath, children }: { href: string; currentPath: string; children: React.ReactNode }) => {
  const isActive = href === currentPath; 
  return (
    <Link
      href={href}
      className={clsx(
        'text-sm font-medium px-2 py-1 transition-colors',
        isActive
          ? 'text-white border-b-2 border-white'
          : 'text-white opacity-75 hover:opacity-100' 
      )}
    >
      {children}
    </Link>
  );
};

export default Header;
