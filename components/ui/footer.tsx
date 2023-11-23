import React from 'react';
import Link from 'next/link';
import MocoIcon from '../moco-icon';

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <MocoIcon />
                </Link>
              </div>
              <div className="text-white">
                Sulit untuk mengajak anak berlatih pemahaman membaca? Tingkatkan keterampilan pemahaman teks anak dengan cara yang lebih menarik. Jelajahi cerita dengan aktivitas seru!
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
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-ou"
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
                      className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-ou"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-sm columns-sm items-start">
                <h6 className="text-white font-medium mb-4">
                  Stay Connected
                </h6>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
                  <li>
                    <Link
                      href="mailto:mocobarengyuk@gmail.com"
                      className="flex flex-wrap gap-2 pb-3"
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
                      <p className="animated-underline custom-link inline-flex items-center transition-all focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 border-b border-dotted border-dark hover:border-black/0">
                        mocobarengyuk@gmail.com
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex flex-wrap gap-2 pb-3">
                      <div
                        className="flex justify-center items-center text-purple-600 bg-white rounded-full transition duration-150 ease-in-out"
                        aria-label="Github"
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
                      <p className="animated-underline custom-link inline-flex items-center font-semibold transition-all focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary-500 border-b border-dotted border-dark hover:border-black/0">
                        Surabaya, Indonesia
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <Link
                  href="https://github.com/Macro-Challenge-2023/Moco"
                  className="flex justify-center items-center text-purple-600 bg-white hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-purple-600 bg-white hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
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
                </Link>
              </li>
            </ul>

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
