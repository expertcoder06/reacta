'use client';

import { useEffect } from 'react';
import { clarity } from '@microsoft/clarity';

export function Clarity() {
  useEffect(() => {
    clarity.init('YOUR_CLARITY_PROJECT_ID');
  }, []);

  return null;
}
