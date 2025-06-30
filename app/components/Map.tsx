'use client';

import Script from 'next/script';
import { useEffect, useState, useMemo } from 'react';
import fetchMap from '../utils/fetchMap';

export default function MapClient() {
  const [mapReady, setMapReady] = useState(false);

  const loc = useMemo(
    () => ({
      lat: 34.077960,
      lon: -118.261710,
    }),
    []
  );

  useEffect(() => {
    const check = setInterval(() => {
      if (window.mappls && typeof window.mappls.Map === 'function') {
        setMapReady(true);
        clearInterval(check);
      }
    }, 300);

    return () => clearInterval(check);
  }, []);

  useEffect(() => {
    if (mapReady) {
      fetchMap(loc);
    }
  }, [mapReady, loc]);

  return (
    <>
      <section className="relative">
        <div id="map" className="w-full h-[500px] rounded shadow border relative" />

        <div className="absolute top-4 left-4 bg-white shadow-lg rounded-md p-4 text-sm text-gray-800 max-w-xs z-10">
          <p className="font-semibold text-base mb-1">Dr. Serena Blake, PsyD</p>
          <p>📍 1287 Maplewood Drive</p>
          <p>Los Angeles, CA 90026</p>
        </div>
      </section>

      <Script
        src="https://apis.mappls.com/advancedmaps/api/d68917d0fae02011d16188de6d3867cb/map_sdk?layer=vector&v=3.0"
        strategy="afterInteractive"
      />
    </>
  );
}
