'use client'

import Link from 'next/link';
import clsxm from '@/lib/clsxm';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { TbCardsFilled } from 'react-icons/tb';
import Image from 'next/image';
import mocoLogo from '../public/images/moco_logo.png';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 flex items-center flex-col">
            <div className="mb-4 max-w-xs md:max-w-lg" data-aos="fade-up">
              <Image src={mocoLogo} alt="Moco Logo" />
            </div>
            <p
              className="text-xl text-white mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              An advanced reading comprehension app that enhances your
              children's reading experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-6 w-full">
              <div data-aos="fade-up" data-aos-delay="400" className="animate-bounce-2">
                <a
                  href="https://apps.apple.com/id/app/moco-kids/id6471516950?itsct=apps_box_badge&itscg=30200"
                  style={{
                    overflow: 'hidden',
                    borderRadius: 13,
                    width: 250,
                    height: 83,
                  }}
                  className="block"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1700784000"
                    alt="Download on the App Store"
                    style={{ borderRadius: 13, width: 250, height: 83 }}
                  />
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <Link
                  href="/cards"
                  style={{
                    overflow: 'hidden',
                    borderRadius: 13,
                    width: 250,
                    height: 83,
                  }}
                  className={clsxm(
                    'bg-black overflow-hidden flex items-center justify-center text-center px-2',
                    'text-white font-bold text-2xl tracking-wide leading-tight',
                    'border-2 border-neutral-400',
                    'transition-all duration-200',
                  )}
                >
                  <TbCardsFilled className="text-5xl" />
                  <span>Story Cards Demo</span>
                </Link>
              </div>
            </div>
          </div>

          <LiteYouTubeEmbed id="FhEoSvs5ulc" title="Moco Development Journey" />
        </div>
      </div>
    </section>
  );
}
