
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { HeartPulse, Search } from 'lucide-react';
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
  return (
    <header className="w-full">
      <div className="container mx-auto flex h-20 items-center justify-between rounded-full bg-white/80 backdrop-blur-sm px-6 shadow-md">
        {/* Left Section - Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-white">
            <HeartPulse className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl text-primary hidden sm:inline-block">
            Sanjiwani
          </span>
        </Link>

        {/* Center Section - Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-white/50 p-1">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-primary hover:bg-primary/10 rounded-full font-medium")}>
                            Home
                            </NavigationMenuLink>
                        </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                        <Link href="/dashboard" legacyBehavior passHref>
                             <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-primary hover:bg-primary/10 rounded-full font-medium")}>
                            My Appointments
                            </NavigationMenuLink>
                        </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                        <Link href="#features" legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-primary hover:bg-primary/10 rounded-full font-medium")}>
                            Our Services
                            </NavigationMenuLink>
                        </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <Button variant="ghost" size="icon" className="rounded-full text-primary hover:bg-primary/10 hover:text-primary">
                    <Search className="h-5 w-5" />
                </Button>
            </div>
        </div>

        {/* Right Section - Auth Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 hover:text-primary" asChild>
            <Link href="/dashboard">Sign In</Link>
          </Button>
          <Button className="rounded-full bg-primary hover:bg-primary/90" asChild>
            <Link href="/dashboard">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
