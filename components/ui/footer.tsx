import React from 'react';
import Link from 'next/link';
import MocoIcon, { MocoIcon2 } from '../moco-icon';
import mocoHead from '@/public/images/moco.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#F3E1BD] to-[#165391] to-15%">
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="flex flex-col md:grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="flex md:col-span-4 lg:col-span-5 items-center">
              <div>
                <Image
                  width={150}
                  height={150}
                  priority
                  src={mocoHead}
                  alt="Follow us on Twitter"
                />
              </div>
              <div className="">
                <div className="mb-2">
                  {/* Logo */}
                  <Link href="/" className="inline-block" aria-label="Cruip">
                    <MocoIcon2 />
                  </Link>
                </div>
                <div className="text-white mb-2">Turning pages into games.</div>
                <a
                  href="https://apps.apple.com/id/app/moco-kids/id6471516950?itsct=apps_box_badge&itscg=30200"
                  style={{
                    overflow: 'hidden',
                    borderRadius: 5,
                    width: 125,
                    height: 41,
                  }}
                  className="block"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1700784000"
                    alt="Download on the App Store"
                    style={{ borderRadius: 5, width: 125, height: 41 }}
                  />
                </a>
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="flex col-span-7 gap-8 self-center items-start text-sm">
              <div className="text-sm columns-3xs">
                <h6 className="text-gray-200 font-medium mb-4">Products</h6>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                    <a
                      href="/cards"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Story Cards Demo
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-sm columns-3xs">
                <h6 className="text-gray-200 font-medium mb-4">Policies</h6>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-sm columns-sm items-start">
                <h6 className="text-white font-medium mb-4">Stay Connected</h6>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                  <li>
                    <Link
                      href="mailto:mocobarengyuk@gmail.com"
                      className="flex md:flex-wrap gap-2 pb-3 flex-row"
                    >
                      <div
                        className="flex justify-center items-center text-purple-600 bg-white rounded-full transition duration-150 ease-in-out"
                        aria-label="Github"
                      >
                        <svg
                          className="w-8 h-8 fill-current pl-2"
                          viewBox="0 0 12 6"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            className="st0"
                            d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"
                          />
                        </svg>
                      </div>
                      <p className="md:text-base text-xs animated-underline custom-link inline-flex items-center transition-all focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 border-b border-dotted border-dark hover:border-black/0">
                        mocobarengyuk@gmail.com
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://maps.app.goo.gl/DJDyHduDUUzWE8m17"
                      className="flex flex-wrap gap-2 pb-3"
                      target="_blank"
                    >
                      <div
                        className="flex justify-center items-center text-purple-600 bg-white rounded-full transition duration-150 ease-in-out"
                        aria-label="Surabaya"
                      >
                        <svg
                          className="w-8 h-8 fill-current pl-1.5"
                          viewBox="0 0 60 50"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            xmlns="http://www.w3.org/2000/svg"
                            className="st0"
                            d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                          />
                        </svg>
                      </div>
                      <p className="md:text-base text-xs animated-underline custom-link inline-flex items-center font-semibold transition-all focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 border-b border-dotted border-dark hover:border-black/0">
                        Surabaya, Indonesia
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://instagram.com/moco.kids"
                      aria-label="Instagram"
                      className="flex flex-wrap gap-2 pb-3"
                      target="_blank"
                    >
                      <div
                        className="flex justify-center items-center text-purple-600 bg-white rounded-full transition duration-150 ease-in-out"
                        aria-label="Surabaya"
                      >
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="20.145" cy="11.892" r="1" />
                          <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                          <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                        </svg>
                      </div>
                      <p className="md:text-base text-xs animated-underline custom-link inline-flex items-center font-semibold transition-all focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 border-b border-dotted border-dark hover:border-black/0">
                        Moco Kids
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">
              &copy; {new Date().getFullYear()} Moco. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
