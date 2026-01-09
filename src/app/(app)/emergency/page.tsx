
"use client";

import dynamic from "next/dynamic";
import { useState } from 'react';
import { APIProvider } from "@vis.gl/react-google-maps";
import type { HealthcareFacility } from '@/lib/data';
import { Skeleton } from "@/components/ui/skeleton";
import NearestFacilitiesList from "@/components/NearestFacilitiesList";

// Load map only on the client
const HealthcareMap = dynamic(() => import("@/components/HealthcareMap"), {
  ssr: false,
  loading: () => <div className="flex-1 bg-muted animate-pulse" />,
});

export default function EmergencyPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [sortedFacilities, setSortedFacilities] = useState<HealthcareFacility[]>([]);
  const [selectedFacility, setSelectedFacility] = useState<HealthcareFacility | null>(null);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);

  if (!apiKey) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted rounded-lg">
        <div className="text-center p-8 bg-card border rounded-lg shadow-md max-w-md">
            <h2 className="text-xl font-bold text-destructive mb-2">Google Maps API Key is Missing</h2>
            <p className="text-muted-foreground">
                To display the map, you need to provide a valid Google Maps API key. Please add your key to a <code className="bg-muted px-1 py-0.5 rounded">.env.local</code> file in the root of your project:
            </p>
            <pre className="mt-4 p-2 bg-secondary rounded-md text-sm text-left">
                <code>NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY_HERE"</code>
            </pre>
            <p className="mt-4 text-xs text-muted-foreground">
                Make sure to restart your development server after creating or updating the <code className="bg-muted px-1 py-0.5 rounded">.env.local</code> file.
            </p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[calc(100vh-200px)]">
            <div className="md:col-span-1 lg:col-span-1 h-full overflow-y-auto">
                 <NearestFacilitiesList 
                    facilities={sortedFacilities}
                    onFacilitySelect={setSelectedFacility}
                    userLocation={userLocation}
                 />
            </div>
            <div className="md:col-span-2 lg:col-span-3 h-full w-full rounded-lg overflow-hidden border">
                <HealthcareMap 
                    onFacilitiesSorted={setSortedFacilities}
                    selectedFacility={selectedFacility}
                    onUserLocationChange={setUserLocation}
                />
            </div>
        </div>
    </APIProvider>
  );
}
