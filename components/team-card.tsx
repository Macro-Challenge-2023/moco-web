import Image, { StaticImageData } from 'next/image';


export type TeamCardProps = {
  name: string;
  image: StaticImageData;
  role: string;
  link: string;
};

export default function TeamCard({ name, image, role, link }: TeamCardProps) {
  return (
    <div className="rounded-lg bg-gray-600">
      <div className="p-4">
        <Image src={image} alt="Features split 01" width={528} height={396} />
      </div>
      <div className="testimonial-item-footer text-lg font-bold mt-32 mb-0 has-top-divider">
        <span className="testimonial-item-name text-color-high">{name}</span>
        <span className="text-color-low"> / </span>
        <span className="text-blue-400">
          <a target="_blank" href={link}>
            {role}
          </a>
        </span>
      </div>
    </div>
  );
}
