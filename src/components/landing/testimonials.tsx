
'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export const Testimonials = () => {
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
