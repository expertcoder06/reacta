
'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const navLinks = [
    { href: '/', name: 'Home' },
    { href: '/dashboard', name: 'My Appointments' },
    { href: '#features', name: 'Our Services' },
  ];

  return (
    <header className="w-full">
      <div className="container mx-auto flex h-20 items-center justify-between rounded-full bg-white/80 backdrop-blur-sm px-6 shadow-md">
        {/* Left Section - Logo */}
        <Link href="#footer" className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/50 bg-white">
            <Image src="/logo.png" alt="Sanjiwani Health Logo" width={24} height={24} />
          </div>
          <span className="font-bold text-xl text-red-500 hidden sm:inline-block">
            Sanjiwani
          </span>
        </Link>

        {/* Center Section - Navigation (Desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
            <div className={cn(
              "flex items-center gap-2 rounded-full border border-red-500/30 bg-white/50 p-1 transition-all duration-300 ease-in-out",
              isSearchOpen ? 'w-full max-w-md' : 'w-auto'
            )}>
              <AnimatePresence initial={false}>
                {isSearchOpen ? (
                  <motion.div
                    key="search"
                    initial={{ opacity: 0, width: '0%' }}
                    animate={{ opacity: 1, width: '100%' }}
                    exit={{ opacity: 0, width: '0%' }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="relative flex w-full items-center"
                  >
                    <Search className="absolute left-3 h-5 w-5 text-red-500" />
                    <Input
                      ref={searchInputRef}
                      placeholder="Search doctors, hospitals, services…"
                      className="w-full rounded-full border-none bg-transparent pl-10 pr-10 text-red-500 placeholder:text-red-500/70 focus:ring-0"
                      onKeyDown={(e) => e.key === 'Escape' && setIsSearchOpen(false)}
                    />
                    <Button onClick={() => setIsSearchOpen(false)} variant="ghost" size="icon" className="absolute right-1 rounded-full text-red-500 hover:bg-red-500/10 hover:text-red-500">
                      <X className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="nav"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center"
                  >
                    <NavigationMenu>
                        <NavigationMenuList>
                          {navLinks.map(link => (
                            <NavigationMenuItem key={link.name}>
                              <NavigationMenuLink href={link.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-red-500 hover:bg-red-500/10 rounded-full font-medium")}>
                                {link.name}
                              </NavigationMenuLink>
                            </NavigationMenuItem>
                          ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button onClick={() => setIsSearchOpen(true)} variant="ghost" size="icon" className="rounded-full text-red-500 hover:bg-red-500/10 hover:text-red-500">
                        <Search className="h-5 w-5" />
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
        </div>

        {/* Right Section - Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" className="rounded-full border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-500" asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
          <Button className="rounded-full bg-red-500 hover:bg-red-600" asChild>
            <Link href="/dashboard">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="rounded-full text-red-500 hover:bg-red-500/10">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-4 bg-white rounded-lg shadow-lg"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className="text-red-500 font-medium" onClick={() => setIsMenuOpen(false)}>
                      {link.name}
                  </Link>
              ))}
              <div className="relative flex items-center">
                <Input placeholder="Search..." className="w-full rounded-full border-red-500/50 pl-10" />
                <Search className="absolute left-3 h-5 w-5 text-red-500/70" />
              </div>
              <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
                <Button variant="outline" className="w-full rounded-full border-red-500 text-red-500" asChild>
                  <Link href="/dashboard">Sign In</Link>
                </Button>
                <Button className="w-full rounded-full bg-red-500 hover:bg-red-600" asChild>
                  <Link href="/dashboard">Sign Up</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
