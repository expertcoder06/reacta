import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { doctors } from '@/lib/data';
import { MapPin, Search } from 'lucide-react';

export default function DoctorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Find a Doctor</h1>
        <p className="text-muted-foreground">Search for specialists and book appointments with ease.</p>
      </div>
      
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <Label htmlFor="doctor-name">Name or Specialty</Label>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input id="doctor-name" placeholder="e.g., Dr. Sharma or Cardiologist" className="pl-8" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Select>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="pune">Pune</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="availability" />
              <Label htmlFor="availability">Available Today</Label>
            </div>
            <Button className="w-full">Search</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.id} className="flex flex-col">
            <CardHeader className="items-center text-center">
              <Image src={doctor.avatar} alt={doctor.name} width={80} height={80} className="rounded-full mb-2" data-ai-hint={doctor.dataAiHint} />
              <CardTitle className="text-lg">{doctor.name}</CardTitle>
              <CardDescription>{doctor.specialty}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>{doctor.location}</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Badge variant={doctor.availability === 'Available Today' ? 'default' : 'secondary'} className="w-fit">
                {doctor.availability}
              </Badge>
              <Button className="w-full mt-2">Book Appointment</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
