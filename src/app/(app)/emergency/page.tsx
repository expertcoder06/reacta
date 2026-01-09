
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
      <div className="flex flex-col h-[calc(100vh-200px)] w-full rounded-lg overflow-hidden border">
         <div className="p-4 bg-card border-b">
           <h1 className="text-2xl font-bold text-center text-destructive">Emergency Healthcare Map</h1>
           <p className="text-center text-muted-foreground">
                The map below is showing an error because billing is not enabled for the associated Google Cloud project. 
                Please enable billing in the Google Cloud Console to use Google Maps.
            </p>
         </div>
        <HealthcareMap />
      </div>
    </APIProvider>
  );
}
