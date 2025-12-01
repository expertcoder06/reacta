
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { motionVariants } from '@/lib/animations';

export const Hero = () => {
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
          variants={motionVariants.slideUp(0)}
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
