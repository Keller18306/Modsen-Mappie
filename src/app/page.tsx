'use client';

import dynamic from "next/dynamic";

const DynamicMapComponent = dynamic(() => import('../ui/Map'), {
  ssr: false
})

export default function Home() {
  return <main className='map'>
    <DynamicMapComponent />
  </main>;
}
