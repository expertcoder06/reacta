'use client';

import { useState, useEffect } from 'react';
import SanjiwaniLoader from './firstloader';

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SanjiwaniLoader />;
  }

  return <>{children}</>;
}
