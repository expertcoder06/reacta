'use client';
import { motion } from 'framer-motion';
import { motionVariants } from '@/lib/animations';
import Image from 'next/image';

const stats = [
    { value: '25+', label: 'Verified Doctors' },
    { value: '14+', label: 'Partner Hospitals' },
];

const partnerLogos = [
    { src: 'https://placehold.co/150x50.png', alt: 'HLG Hospital', dataAiHint: 'hospital logo' },
    { src: 'https://placehold.co/150x50.png', alt: 'Healthworld Hospitals', dataAiHint: 'healthcare logo' },
    { src: 'https://placehold.co/150x50.png', alt: 'Sharanya', dataAiHint: 'medical logo' },
    { src: 'https://placehold.co/150x50.png', alt: 'Mission Hospital', dataAiHint: 'clinic logo' },
    { src: 'https://placehold.co/150x50.png', alt: 'Teresa', dataAiHint: 'diagnostics logo' },
    { src: 'https://placehold.co/150x50.png', alt: 'Apollo Clinic', dataAiHint: 'apollo logo' },
];

const diagnosticStats = [
    { value: '18+', label: 'Partner Diagnostic Centers' },
    { value: '10+', label: 'Partner Medical Clinics' },
];

export const TrustBadges = () => {
  return (
    <motion.div
      className="container mx-auto"
      variants={motionVariants.fadeIn}
      initial="hidden"
      animate="show"
    >
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center items-center">
            {stats.map(stat => (
                <div key={stat.label} className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-2xl font-bold text-teal-600">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
            ))}
            <div className="bg-white p-4 rounded-lg shadow-md col-span-2 md:col-span-1 flex flex-col items-center justify-center">
                 <p className="text-lg font-bold text-gray-700 mb-2">About Us</p>
                 <Image src="/msme.png" alt="MSME Logo" width={80} height={40} />
            </div>
            {diagnosticStats.map(stat => (
                <div key={stat.label} className="bg-white p-4 rounded-lg shadow-md">
                    <p className="text-2xl font-bold text-teal-600">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
            ))}
        </div>
        <div className="mt-12">
             <div className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-4">
                {partnerLogos.map((logo, index) => (
                    <Image key={index} src={logo.src} alt={logo.alt} width={120} height={40} className="object-contain" data-ai-hint={logo.dataAiHint} />
                ))}
             </div>
        </div>
    </motion.div>
  );
};
