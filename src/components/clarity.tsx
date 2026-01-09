'use client';

import { useEffect } from 'react';
import { clarity } from '@microsoft/clarity';

export function Clarity() {
  useEffect(() => {
    clarity.init('uyko6rz814');
  }, []);

  return null;
}
