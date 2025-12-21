'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeartPulse, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-white/50 p-1">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                          <Link href="/">
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-red-500 hover:bg-red-500/10 rounded-full font-medium")}>
                            Home
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <Link href="/dashboard">
                             <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-red-500 hover:bg-red-500/10 rounded-full font-medium")}>
                            My Appointments
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <Link href="#features">
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-red-500 hover:bg-red-500/10 rounded-full font-medium")}>
                            Our Services
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Button variant="ghost" size="icon" className="rounded-full text-red-500 hover:bg-red-500/10 hover:text-red-500">
                    <Search className="h-5 w-5" />
                </Button>
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
      {isMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white rounded-lg shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-red-500 font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/dashboard" className="text-red-500 font-medium" onClick={() => setIsMenuOpen(false)}>My Appointments</Link>
            <Link href="#features" className="text-red-500 font-medium" onClick={() => setIsMenuOpen(false)}>Our Services</Link>
            <Link href="#" className="flex items-center text-red-500 font-medium" onClick={() => setIsMenuOpen(false)}>
              <Search className="h-5 w-5 mr-2" />
              Search
            </Link>
            <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
              <Button variant="outline" className="w-full rounded-full border-red-500 text-red-500" asChild>
                <Link href="/dashboard">Sign In</Link>
              </Button>
              <Button className="w-full rounded-full bg-red-500 hover:bg-red-600" asChild>
                <Link href="/dashboard">Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
