'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Search, LocateFixed, CalendarPlus, Facebook, Twitter, Youtube, Linkedin, Github } from 'lucide-react';
import { SanjiwaniLogo } from '@/components/icons';
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const { toast } = useToast()

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          toast({
            title: "Location Accessed",
            description: `Your coordinates are: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
          })
        },
        (error) => {
           toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: `Error getting location: ${error.message}`,
          })
        }
      );
    } else {
       toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Geolocation is not supported by this browser.",
      })
    }
  };


  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-primary text-primary-foreground shrink-0">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <SanjiwaniLogo className="h-6 w-6" />
          <span className="font-semibold text-lg">Sanjiwani Health</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Link href="/doctors" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Find Doctors
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Video Consult
          </Link>
           <Link href="/hospitals" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Surgeries
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Blogs
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            For Doctors
          </Link>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Login / Signup</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="w-full max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2">
                <div className="relative flex-1">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Location" className="pl-8 pr-10" />
                   <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8" onClick={handleLocationClick}>
                      <LocateFixed className="h-4 w-4" />
                      <span className="sr-only">Use my location</span>
                   </Button>
                </div>
                <div className="relative flex-[2]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search doctors, clinics, hospitals, etc." className="pl-8" />
                </div>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <ServiceCard
                  imageUrl="https://picsum.photos/200/200"
                  imageHint="calendar appointment"
                  title="Book an Instant Appointment"
                  description="Quick and easy scheduling"
                  href="/doctors"
                />
               <ServiceCard
                  imageUrl="https://picsum.photos/200/200"
                  imageHint="doctor video"
                  title="Instant Video Consultation"
                  description="Connect within 60 secs"
                  href="/dashboard"
                />
                <ServiceCard
                  imageUrl="https://picsum.photos/200/200"
                  imageHint="female doctor"
                  title="Find Doctors Near You"
                  description="Confirmed appointments"
                  href="/doctors"
                />
                <ServiceCard
                  imageUrl="https://picsum.photos/200/200"
                  imageHint="operating room"
                  title="Surgeries"
                  description="Safe and trusted surgery centers"
                  href="/hospitals"
                />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 flex flex-col items-center text-center">
                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Consult top doctors online for any health concern
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl mt-2">
                    Private online consultations with verified doctors in all specialists.
                  </p>
                  <Button asChild variant="outline" className="mt-6">
                      <Link href="/doctors">View All Specialities</Link>
                  </Button>
            </div>
        </section>

      </main>
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="space-y-4">
            <h4 className="font-semibold">Sanjiwani</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">About</Link></li>
              <li><Link href="#" className="hover:underline">Blog</Link></li>
              <li><Link href="#" className="hover:underline">Careers</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">For patients</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/doctors" className="hover:underline">Search for doctors</Link></li>
              <li><Link href="#" className="hover:underline">Search for clinics</Link></li>
              <li><Link href="/hospitals" className="hover:underline">Search for hospitals</Link></li>
              <li><Link href="#" className="hover:underline">Book a test</Link></li>
              <li><Link href="#" className="hover:underline">Order medicines</Link></li>
              <li><Link href="/records" className="hover:underline">Read health articles</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">For doctors</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Sanjiwani Profile</Link></li>
            </ul>
             <h4 className="font-semibold pt-4">For clinics</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Ray by Sanjiwani</Link></li>
              <li><Link href="#" className="hover:underline">Sanjiwani Reach</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">For hospitals</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Insta by Sanjiwani</Link></li>
              <li><Link href="#" className="hover:underline">Qikwell by Sanjiwani</Link></li>
              <li><Link href="#" className="hover:underline">Sanjiwani Profile</Link></li>
              <li><Link href="#" className="hover:underline">Sanjiwani Reach</Link></li>
            </ul>
             <h4 className="font-semibold pt-4">For Corporates</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Wellness Plans</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">More</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Help</Link></li>
              <li><Link href="#" className="hover:underline">Developers</Link></li>
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:underline">Healthcare Directory</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold">Social</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="flex items-center gap-2 hover:underline"><Facebook className="w-4 h-4" /> Facebook</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:underline"><Twitter className="w-4 h-4" /> Twitter</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:underline"><Youtube className="w-4 h-4" /> Youtube</Link></li>
              <li><Link href="#" className="flex items-center gap-2 hover:underline"><Linkedin className="w-4 h-4" /> LinkedIn</Link></li>
               <li><Link href="#" className="flex items-center gap-2 hover:underline"><Github className="w-4 h-4" /> Github</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-8 text-center text-sm">
            <p>&copy; 2024 Sanjiwani Health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ imageUrl, imageHint, title, description, href }: { imageUrl: string; imageHint: string; title: string; description: string, href: string }) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <CardContent className="p-0">
           <Image
              src={imageUrl}
              width="200"
              height="200"
              alt={title}
              data-ai-hint={imageHint}
              className="w-full aspect-square object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </CardContent>
      </Card>
    </Link>
  )
}
