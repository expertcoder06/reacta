
'use client';

import { useState, useEffect, useRef } from 'react';
import * as googleMaps from '@vis.gl/react-google-maps';
import { allFacilities, type HealthcareFacility } from '@/lib/data';
import { Button } from './ui/button';
import { LocateFixed } from 'lucide-react';

const facilityIcons = {
  hospital: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 9.8c0 7.3-8 11.8-8 11.8Z" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="m10 12 h4" />
      </svg>
    ),
    bgColor: '#dc2626', // red-600
  },
  clinic: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 9.8c0 7.3-8 11.8-8 11.8Z" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
    bgColor: '#2563eb', // blue-600
  },
  medical: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 9.8c0 7.3-8 11.8-8 11.8Z" />
        <path d="M14 10h-4v4h4v-4Z" />
        <path d="M12 8v2" />
        <path d="M12 14v2" />
        <path d="m14 12 h2" />
        <path d="m8 12 h2" />
      </svg>
    ),
    bgColor: '#16a34a', // green-600
  },
};

const CustomMarker = ({
  facility,
  onClick,
}: {
  facility: HealthcareFacility;
  onClick: () => void;
}) => {
  const { icon, bgColor } = facilityIcons[facility.type];

  return (
    <googleMaps.AdvancedMarker position={{ lat: facility.lat, lng: facility.lng }} onClick={onClick}>
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center shadow-md"
        style={{ backgroundColor: bgColor }}
      >
        {icon}
      </div>
    </googleMaps.AdvancedMarker>
  );
};

const RecenterControl = ({onClick}: {onClick: () => void}) => {
    const controlDiv = useRef<HTMLDivElement>(null);
    const map = googleMaps.useMap();
    
    googleMaps.useMapControl({
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
      instance: controlDiv.current
    });
    
    return (
        <div ref={controlDiv} className="p-4">
            <Button variant="outline" size="icon" onClick={onClick} className="bg-card shadow-md">
                <LocateFixed className='w-5 h-5' />
            </Button>
        </div>
    );
}


export default function HealthcareMap() {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [activeFacility, setActiveFacility] = useState<HealthcareFacility | null>(null);
  const map = googleMaps.useMap();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
          // Fallback to default location if user denies permission
          setUserLocation({ lat: 28.6139, lng: 77.209 });
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setUserLocation({ lat: 28.6139, lng: 77.209 });
    }
  }, []);

  useEffect(() => {
    if (userLocation && map) {
        map.panTo(userLocation);
    }
  }, [userLocation, map]);


  const handleMarkerClick = (facility: HealthcareFacility) => {
    setActiveFacility(facility);
  };
  
  const handleRecenter = () => {
    if (userLocation && map) {
        map.panTo(userLocation);
        map.setZoom(14);
    }
  };


  return (
    <div className="w-full h-full">
      <googleMaps.Map
        defaultCenter={userLocation || { lat: 28.6139, lng: 77.209 }}
        defaultZoom={14}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId="sanjiwani_map"
      >
        {userLocation && (
            <googleMaps.AdvancedMarker position={userLocation} title="Your Location">
                <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/30" />
            </googleMaps.AdvancedMarker>
        )}
        {allFacilities.map((facility) => (
          <CustomMarker
            key={facility.id}
            facility={facility}
            onClick={() => handleMarkerClick(facility)}
          />
        ))}

        {activeFacility && (
          <googleMaps.InfoWindow
            position={{ lat: activeFacility.lat, lng: activeFacility.lng }}
            onCloseClick={() => setActiveFacility(null)}
          >
            <div className="p-2">
                <h3 className="font-bold text-base">{activeFacility.name}</h3>
                <p className="text-sm text-muted-foreground">{activeFacility.location}</p>
            </div>
          </googleMaps.InfoWindow>
        )}
        
        <RecenterControl onClick={handleRecenter} />
      </googleMaps.Map>
    </div>
  );
}
