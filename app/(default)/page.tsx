export const metadata = {
  title: 'Home - Moco Kids',
  description: 'Turning Pages Into Games',
};

import Hero from '@/components/hero';
import Features from '@/components/features';
import Newsletter from '@/components/newsletter';
import Zigzag from '@/components/zigzag';
import Crews from '@/components/crews';
import Introduction from '@/components/introduction';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Introduction />
      <Crews />
      {/* <Newsletter /> */}
    </>
  );
}
