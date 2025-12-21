
'use client';
import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Stethoscope, Hospital, FlaskConical, Heart } from 'lucide-react';
import { motionVariants } from '@/lib/animations';

export const QuickAccess = () => {
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
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-red-500">Quick Access to Healthcare</h2>
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
          <motion.div key={i} variants={motionVariants.slideUp(0)}>
            <Link href={item.href}>
              <motion.div whileHover="scale" variants={motionVariants.cardHover} className="h-full">
                <Card className="h-full text-center p-6 flex flex-col items-center justify-center">
                  <div className="mb-4 text-red-500">
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
