'use client'

import Image, { StaticImageData } from 'next/image';


export type TeamCardProps = {
  name: string;
  image: StaticImageData;
  role: string;
  link: string;
};

export default function TeamCard({ name, image, role, link }: TeamCardProps) {
  return (
    <>
      <div className="card-container rounded-lg bg-blue-900 p-8 transition duration-200 hover:-translate-y-1 h-full">
        <div className="rounded-lg overflow-clip card">
          <Image src={image} alt="Features split 01" width={528} height={396} />
        </div>
        <div className="testimonial-item-footer text-lg font-bold mt-12 mb-0 has-top-divider">
          <span className="testimonial-item-name text-color-high">{name}</span>
          <span className="text-color-low"> / </span>
          <span className="text-blue-300">
            <a target="_blank" href={link}>
              {role}
            </a>
          </span>
        </div>
      </div>
      <style jsx>{`
        .card-container {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }

        .card::before {
          content: '';
          display: block;
          width: 24px;
          height: 18px;
          margin-bottom: 16px;
          background-image: url('data:image/svg+xml;utf8,<svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 13.481c0-2.34.611-4.761 1.833-7.263C3.056 3.716 4.733 1.643 6.865 0L11 2.689C9.726 4.382 8.777 6.093 8.152 7.824c-.624 1.73-.936 3.578-.936 5.545V18H0v-4.519zm13 0c0-2.34.611-4.761 1.833-7.263 1.223-2.502 2.9-4.575 5.032-6.218L24 2.689c-1.274 1.693-2.223 3.404-2.848 5.135-.624 1.73-.936 3.578-.936 5.545V18H13v-4.519z" fill="%23eee" fill-rule="nonzero"/></svg>');
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}
