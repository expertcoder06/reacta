
import { Hero } from '@/components/landing/hero';
import { TrustBadges } from '@/components/landing/trust-badges';
import { QuickAccess } from '@/components/landing/quick-access';
import { MsmeSection } from '@/components/landing/msme-section';
import { InnovationAwardSection } from '@/components/landing/innovation-award-section';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Testimonials } from '@/components/landing/testimonials';
import { NewsletterSignUp } from '@/components/landing/newsletter-signup';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-foreground">
        <Header />
        <main className="flex-1">
            <Hero />
            <div className="bg-white py-12">
                <TrustBadges />
            </div>
            <div className="my-12" />
            <QuickAccess />
            <MsmeSection />
            <InnovationAwardSection />
            <Features />
            <HowItWorks />
            <Testimonials />
            <NewsletterSignUp />
        </main>
        <Footer />
    </div>
  );
}
