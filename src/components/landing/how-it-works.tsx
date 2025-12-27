
'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { motionVariants } from '@/lib/animations';

export const HowItWorks = () => {
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
                    <motion.div key={step.num} variants={motionVariants.slideUp(0)} className="flex items-start space-x-4">
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
