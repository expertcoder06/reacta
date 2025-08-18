import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Stethoscope, FlaskConical, Hospital, FileText, ArrowRight } from 'lucide-react';
import { SanjiwaniLogo } from '@/components/icons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b shrink-0">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <SanjiwaniLogo className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">Sanjiwani Health</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Your Trusted Partner in Health and Wellness
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Easily find doctors, book appointments, manage your health records, and more. Sanjiwani Health is here to simplify your healthcare journey.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild variant="default">
                    <Link href="/dashboard" className="inline-flex items-center gap-2">
                      Book an Appointment <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                   <Button size="lg" asChild variant="outline">
                    <Link href="/dashboard">
                      Access Dashboard
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="doctor patient consultation"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Comprehensive Healthcare at Your Fingertips</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide a complete suite of tools to manage your health needs efficiently and securely.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 pt-12">
              <FeatureCard icon={<Stethoscope className="w-8 h-8 text-primary" />} title="Doctor Discovery" description="Find top-rated doctors and specialists near you." />
              <FeatureCard icon={<FlaskConical className="w-8 h-8 text-primary" />} title="Diagnostic Booking" description="Schedule lab tests and checkups with ease." />
              <FeatureCard icon={<Hospital className="w-8 h-8 text-primary" />} title="Hospital Search" description="Locate hospitals and clinics with detailed information." />
              <FeatureCard icon={<FileText className="w-8 h-8 text-primary" />} title="Health Records" description="Securely store and access your medical records anytime." />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Sanjiwani Health. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="grid gap-2">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
