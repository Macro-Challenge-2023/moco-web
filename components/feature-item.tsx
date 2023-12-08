import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { ReactNode } from 'react';

export type FeatureItemProps = {
  image: string | StaticImport;
  title: string | ReactNode;
  content: string | ReactNode;
  imageFirst?: boolean;
};

export default function FeatureItem({
  image,
  title,
  content,
  imageFirst = false,
}: FeatureItemProps) {
  return (
    <div
      className="grid grid-cols-3 md:grid-cols-2 gap-x-4 md:gap-x-16 items-center"
      data-aos="fade-up"
    >
      {imageFirst ? (
        <>
          <div>
            <Image src={image} alt="Multiple card" />
          </div>
          <div className="flex flex-col justify-center gap-y-2 col-span-2 md:col-span-1">
            <h2 className="h4 md:text-4xl font-extrabold">{title}</h2>
            <p className="font-bold text-xs md:text-base">{content}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center gap-y-2 col-span-2 md:col-span-1">
            <h2 className="h4 md:text-4xl">{title}</h2>
            <p className="font-bold text-xs md:text-base">{content}</p>
          </div>
          <div>
            <Image src={image} alt="Multiple card" />
          </div>
        </>
      )}
    </div>
  );
}
