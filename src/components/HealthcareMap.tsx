
'use client';

import { Map } from '@vis.gl/react-google-maps';

export default function HealthcareMap() {
  return (
    <div className="w-full h-full">
      <Map
        defaultCenter={{ lat: 28.6139, lng: 77.2090 }} // Centered on Delhi
        defaultZoom={11}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId="sanjiwani_map"
      />
    </div>
  );
}
