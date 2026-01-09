
"use client";

import dynamic from "next/dynamic";
import { APIProvider } from "@vis.gl/react-google-maps";

// Load map only on the client
const HealthcareMap = dynamic(() => import("@/components/HealthcareMap"), {
  ssr: false,
  loading: () => <div className="flex-1 bg-muted animate-pulse" />,
});

export default function EmergencyPage() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted">
        <p className="text-destructive-foreground bg-destructive p-4 rounded-md">
          Google Maps API key is missing.
        </p>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="flex flex-col h-[calc(100vh-200px)] w-full rounded-lg overflow-hidden border">
         <div className="p-4 bg-card border-b">
           <h1 className="text-2xl font-bold text-center text-destructive">Emergency Healthcare Map</h1>
           <p className="text-center text-muted-foreground">Showing nearest facilities. This is a placeholder map.</p>
         </div>
        <HealthcareMap />
      </div>
    </APIProvider>
  );
}
