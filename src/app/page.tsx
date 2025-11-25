
// src/app/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Heart,
  FileText,
  ShieldCheck,
  Zap,
  Star,
  CheckCircle,
  Mail,
  Stethoscope,
  Hospital,
  FlaskConical,
} from 'lucide-react';
import { SanjiwaniLogo } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// --- ANIMATION VARIANTS --- //

const motionVariants: { [key: string]: Variants } = {
  staggerContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  },
  slideUp: (delay = 0) => ({
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      },
    },
  }),
  cardHover: {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
};

// --- SUBCOMPONENTS --- //

const Header = () => {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={motionVariants.fadeIn}
      className="sticky top-0 z-50 w-full border-b bg-background/80 text-foreground backdrop-blur"
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <SanjiwaniLogo className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">Sanjiwani Health</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#features" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#testimonials" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  Testimonials
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
               <Link href="/blogs" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  Blogs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/for-doctors" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                  For Doctors
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

const Hero = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <motion.div
        className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center"
        variants={motionVariants.staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl font-headline"
          variants={motionVariants.slideUp()}
        >
          Sanjiwani Health - A Unified Digital Healthcare Platform
        </motion.h1>
        <motion.p
          className="max-w-xl text-muted-foreground sm:text-xl"
          variants={motionVariants.slideUp(0.2)}
        >
          Your health, simplified. Access doctors, manage records, and take control of your well-being, all in one place.
        </motion.p>
        <motion.div
          className="flex gap-4"
          variants={motionVariants.slideUp(0.4)}
        >
          <Button size="lg" asChild>
            <Link href="/dashboard">Get Started Free</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#how-it-works">See Demo</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const TrustBadges = () => {
  const logos = ['HIPAA Compliant', '10,000+ Patients', '5-Star Rated'];
  return (
    <motion.div
      className="container mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-4"
      variants={motionVariants.fadeIn}
      initial="hidden"
      animate="show"
    >
      <p className="text-sm font-semibold text-muted-foreground">TRUSTED BY THOUSANDS</p>
      {logos.map((logo, index) => (
        <div key={index} className="flex items-center gap-2 text-muted-foreground">
          <CheckCircle className="h-4 w-4" />
          <span className="text-sm font-medium">{logo}</span>
        </div>
      ))}
    </motion.div>
  );
};

const QuickAccess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const quickAccessItems = [
    { icon: Stethoscope, title: 'Find Doctors', desc: 'Consult with verified specialists.', href: "/doctors" },
    { icon: Hospital, title: 'Hospitals', desc: 'Real-time bed availability', href: "/hospitals" },
    { icon: FlaskConical, title: 'Diagnostics', desc: 'Book lab tests & health checkups', href: "/diagnostics" },
    { icon: Heart, title: 'Emergency', desc: '24/7 emergency services', href: "#" },
  ];

  return (
    <section id="quick-access" ref={ref} className="container space-y-6 py-12 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Quick Access to Healthcare</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Everything you need for your health journey in one place.
        </p>
      </div>
      <motion.div
        className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-4"
        variants={motionVariants.staggerContainer}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {quickAccessItems.map((item, i) => (
          <motion.div key={i} variants={motionVariants.slideUp()}>
            <Link href={item.href}>
              <motion.div whileHover="scale" variants={motionVariants.cardHover} className="h-full">
                <Card className="h-full text-center p-6 flex flex-col items-center justify-center">
                  <div className="mb-4 text-primary">
                    <item.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const MsmeSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    
    return (
        <section ref={ref} className="w-full bg-background py-16 px-6 md:px-20">
            <motion.div
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={motionVariants.slideUp()}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-headline">
                    Government Recognised MSME
                </h2>

                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Sanjiwani Health is officially registered under the{" "}
                    <span className="font-semibold text-foreground">
                        MSME (Udyam) Scheme, Government of India
                    </span>.
                    This certification validates our commitment to building innovative
                    and impactful solutions in the Indian health-tech ecosystem.
                </p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-10 mx-auto w-fit bg-primary/10 text-primary px-6 py-3 rounded-2xl text-lg font-semibold shadow-sm border border-primary/20 flex items-center gap-2"
                >
                    <ShieldCheck className="h-6 w-6" />
                    <span>MSME Registered (Udyam) — Government of India</span>
                </motion.div>

                <p className="text-sm text-muted-foreground mt-4">
                    *For security reasons, your complete Udyam number is not displayed publicly.
                </p>
            </motion.div>
        </section>
    );
}

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    { icon: Zap, title: 'Instant Telehealth', desc: 'Connect with certified doctors within minutes, anytime, anywhere.' },
    { icon: FileText, title: 'Digital Health Records', desc: 'Securely store and access all your medical history in one place.' },
    { icon: ShieldCheck, title: 'Private & Secure', desc: 'Your data is encrypted and protected with industry-leading security.' },
  ];

  return (
    <section id="features" ref={ref} className="container space-y-6 bg-secondary/50 py-12 md:py-24 rounded-lg">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Everything You Need for Better Health</h2>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Sanjiwani provides powerful tools to make healthcare more accessible and convenient.
        </p>
      </div>
      <motion.div
        className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:grid-cols-3"
        variants={motionVariants.staggerContainer}
        initial="hidden"
        animate={isInView ? 'show' : 'hidden'}
      >
        {features.map((feature, i) => (
          <motion.div key={i} variants={motionVariants.slideUp()}>
            <motion.div whileHover="scale" variants={motionVariants.cardHover}>
              <Card className="h-full">
                <CardHeader>
                  <div className="bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const HowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const steps = [
        { num: 1, title: 'Create Your Account', desc: 'Sign up for free in just a few minutes.' },
        { num: 2, title: 'Find a Doctor', desc: 'Search for specialists and book an appointment.' },
        { num: 3, title: 'Start Your Consultation', desc: 'Connect via video call and get expert medical advice.' },
    ];

    return (
        <section id="how-it-works" ref={ref} className="container py-12 md:py-24">
            <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Get Started in 3 Easy Steps</h2>
                <p className="mt-2 max-w-xl text-muted-foreground">Healthcare that fits into your life, not the other way around.</p>
            </div>
            <motion.div
                className="mt-12 grid gap-8 md:grid-cols-3"
                variants={motionVariants.staggerContainer}
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
            >
                {steps.map((step) => (
                    <motion.div key={step.num} variants={motionVariants.slideUp()} className="flex items-start space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">{step.num}</div>
                        <div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="mt-1 text-muted-foreground">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah L.', quote: "Sanjiwani Health changed my life. I can talk to a doctor from home and all my records are finally organized!", avatar: 'SL' },
    { name: 'John D.', quote: "The platform is incredibly easy to use. I found a specialist and had a video call booked within 10 minutes. Amazing!", avatar: 'JD' },
    { name: 'Meghan P.', quote: "As a parent, having access to pediatricians 24/7 is a game-changer. I feel so much more at ease.", avatar: 'MP' },
    { name: 'Carlos R.', quote: "Finally, a healthcare app that just works. Secure, fast, and reliable. Highly recommended.", avatar: 'CR' },
  ];

  return (
    <section id="testimonials" className="container py-12 md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Loved by Patients Everywhere</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">Don't just take our word for it. Here's what our users are saying.</p>
        </div>
        <Carousel className="mt-12 w-full max-w-4xl mx-auto"
            opts={{
                align: "start",
                loop: true,
            }}
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1 h-full">
                            <Card className="h-full flex flex-col justify-between">
                                <CardContent className="pt-6">
                                    <p className="italic">"{testimonial.quote}"</p>
                                </CardContent>
                                <CardHeader className="flex-row items-center gap-4 pt-0">
                                    <Avatar>
                                        {/* TODO: Replace with real user avatars */}
                                        <AvatarImage src={`https://picsum.photos/seed/${index + 10}/40/40`} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <div className="flex items-center gap-0.5">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
    </section>
  );
};

const NewsletterSignUp = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        // TODO: Implement actual newsletter signup logic
        console.log('Newsletter signup for:', email);
        alert(`Thank you for signing up with ${email}!`);
        setEmail('');
    };

    return (
        <section id="signup" className="bg-secondary/50">
            <div className="container py-12 md:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Stay Updated on Your Health</h2>
                    <p className="mt-2 text-muted-foreground">
                        Subscribe to our newsletter for the latest health tips and platform updates.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-6 flex max-w-md mx-auto">
                        <div className="relative flex-1">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                          <Input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="pl-10"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email for newsletter"
                          />
                        </div>
                        <Button type="submit">Subscribe</Button>
                    </form>
                    {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
                </div>
            </div>
        </section>
    );
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerSections = {
    "For patients": [
      { title: "Search for doctors", href: "#" },
      { title: "Search for clinics", href: "#" },
      { title: "Search for hospitals", href: "#" },
      { title: "Book a diagnostic test", href: "#" },
      { title: "Book full body checkups", href: "#" },
      { title: "Read health articles", href: "#" },
    ],
    "For doctors": [
      { title: "Sanjiwani for doctors", href: "#" },
      { title: "Sanjiwani Profile", href: "#" },
    ],
    "For hospitals": [
      { title: "Sanjiwani Profile", href: "#" },
      { title: "Sanjiwani Reach", href: "#" },
    ],
    "For Corporates": [{ title: "Wellness program", href: "#" }],
    "More": [
      { title: "Help", href: "#" },
      { title: "Developers", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms and Conditions", href: "#" },
    ],
    "Social": [
      { title: "Facebook", href: "#" },
      { title: "Twitter", href: "#" },
      { title: "LinkedIn", href: "#" },
      { title: "YouTube", href: "#" },
    ],
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <SanjiwaniLogo className="h-8 w-8" />
            <span className="font-bold text-lg">Sanjiwani Health</span>
          </div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            &copy; {currentYear} Sanjiwani Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};


// --- MAIN PAGE COMPONENT --- //

export default function LandingPage() {
  // Respects user's motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
            <Hero />
            <TrustBadges />
            <div className="my-12" />
            <QuickAccess />
            <MsmeSection />
            <Features />
            <HowItWorks />
            <Testimonials />
            <NewsletterSignUp />
        </main>
        <Footer />
    </div>
  );
}
