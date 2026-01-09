'use client';

import { useEffect } from 'react';

export function Clarity() {
  useEffect(() => {
    // Dynamically import clarity to ensure it only runs on the client-side
    import('@microsoft/clarity')
      .then((clarity) => {
        clarity.clarity.init('uyko6rz814');
      })
      .catch((e) => {
        console.error('Could not initialize Microsoft Clarity', e);
      });
  }, []);

  return null;
}
