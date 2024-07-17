"use client";

import { useCallback, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "react-spring";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG = {
   width: 800,
   height: 800,
   onRender: () => {},
   devicePixelRatio: 2,
   phi: 0,
   theta: 0.3,
   dark: 0,
   diffuse: 0.4,
   mapSamples: 16000,
   mapBrightness: 1.2,
   baseColor: [1, 1, 1],
   markerColor: [251 / 255, 100 / 255, 21 / 255],
   glowColor: [1, 1, 1],
   markers: [
      { location: [14.5995, 120.9842], size: 0.03 }, // Manila, Philippines
      { location: [19.076, 72.8777], size: 0.1 }, // Mumbai, India
      { location: [23.8103, 90.4125], size: 0.05 }, // Dhaka, Bangladesh
      { location: [30.0444, 31.2357], size: 0.07 }, // Cairo, Egypt
      { location: [39.9042, 116.4074], size: 0.08 }, // Beijing, China
      { location: [-23.5505, -46.6333], size: 0.1 }, // São Paulo, Brazil
      { location: [19.4326, -99.1332], size: 0.1 }, // Mexico City, Mexico
      { location: [40.7128, -74.006], size: 0.1 }, // New York City, USA
      { location: [34.6937, 135.5022], size: 0.05 }, // Osaka, Japan
      { location: [41.0082, 28.9784], size: 0.06 }, // Istanbul, Turkey
      { location: [12.581, 77.354], size: 0.06 }, // Bangalore, India
      { location: [48.8566, 2.3522], size: 0.06 }, // Paris, France
      { location: [34.0522, -118.2437], size: 0.05 }, // Los Angeles, USA
      { location: [-33.8688, 151.2093], size: 0.06 }, // Sydney, Australia
      { location: [55.7558, 37.6173], size: 0.06 }, // Moscow, Russia
      { location: [35.6895, 139.6917], size: 0.06 }, // Tokyo, Japan
      { location: [40.7128, -74.006], size: 0.06 }, // New York City, USA
      { location: [-23.5505, -46.6333], size: 0.06 }, // São Paulo, Brazil
      { location: [51.5074, -0.1278], size: 0.06 }, // London, UK
      { location: [19.4326, -99.1332], size: 0.06 }, // Mexico City, Mexico
      { location: [39.9042, 116.4074], size: 0.06 }, // Beijing, China
      { location: [52.52, 13.405], size: 0.07 }, // Berlin, Germany
      { location: [-1.2921, 36.8219], size: 0.05 }, // Nairobi, Kenya
      { location: [6.5244, 3.3792], size: 0.08 }, // Lagos, Nigeria
      { location: [35.6762, 139.6503], size: 0.06 }, // Tokyo, Japan
      { location: [37.7749, -122.4194], size: 0.07 }, // San Francisco, USA
      { location: [43.6532, -79.3832], size: 0.06 }, // Toronto, Canada
      { location: [-34.6037, -58.3816], size: 0.06 }, // Buenos Aires, Argentina
      { location: [55.6761, 12.5683], size: 0.06 }, // Copenhagen, Denmark
      { location: [28.6139, 77.209], size: 0.03 }, // New Delhi, India
   ],
};

export default function Globe({ className, config = GLOBE_CONFIG }) {
   let phi = 0;
   let width = 0;
   const canvasRef = useRef(null);
   const pointerInteracting = useRef(null);
   const pointerInteractionMovement = useRef(0);
   const [{ r }, api] = useSpring(() => ({
      r: 0,
      config: {
         mass: 1,
         tension: 280,
         friction: 40,
         precision: 0.001,
      },
   }));

   const updatePointerInteraction = (value) => {
      pointerInteracting.current = value;
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
   };

   const updateMovement = (clientX) => {
      if (pointerInteracting.current !== null) {
         const delta = clientX - pointerInteracting.current;
         pointerInteractionMovement.current = delta;
         api.start({ r: delta / 200 });
      }
   };

   const onRender = useCallback(
      (state) => {
         if (!pointerInteracting.current) phi += 0.005;
         state.phi = phi + r.get();
         state.width = width * 2;
         state.height = width * 2;
      },
      [pointerInteracting, phi, r]
   );

   const onResize = () => {
      if (canvasRef.current) {
         width = canvasRef.current.offsetWidth;
      }
   };

   useEffect(() => {
      window.addEventListener("resize", onResize);
      onResize();

      const globe = createGlobe(canvasRef.current, {
         ...config,
         width: width * 2,
         height: width * 2,
         onRender,
      });

      setTimeout(() => (canvasRef.current.style.opacity = "1"));
      return () => globe.destroy();
   }, []);

   return (
      <div
         className={cn(
            "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
            className
         )}
      >
         <canvas
            className={cn(
               "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
            )}
            ref={canvasRef}
            onPointerDown={(e) =>
               updatePointerInteraction(
                  e.clientX - pointerInteractionMovement.current
               )
            }
            onPointerUp={() => updatePointerInteraction(null)}
            onPointerOut={() => updatePointerInteraction(null)}
            onMouseMove={(e) => updateMovement(e.clientX)}
            onTouchMove={(e) =>
               e.touches[0] && updateMovement(e.touches[0].clientX)
            }
         />
      </div>
   );
}
