
"use client";

import dynamic from "next/dynamic";

// Load map only on the client
const HealthcareMap = dynamic(() => import("@/components/HealthcareMap"), {
  ssr: false,
  loading: () => <div className="flex-1 bg-muted animate-pulse" />,
});

export default function EmergencyPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-200px)] w-full rounded-lg overflow-hidden border">
       <div className="p-4 bg-card border-b">
         <h1 className="text-2xl font-bold text-center text-destructive">Emergency Healthcare Map</h1>
         <p className="text-center text-muted-foreground">Showing nearest facilities. This is a placeholder map.</p>
       </div>
      <HealthcareMap />
    </div>
  );
}
