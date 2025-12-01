
'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { motionVariants } from '@/lib/animations';

export const TrustBadges = () => {
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
