import Image from 'next/image';

import multipleCard from '../public/images/cards/multiple_card.png';
import mazePreview from '../public/images/maze-preview.png';
import arPreview from '../public/images/ar-preview.png';
import FeatureItem, { FeatureItemProps } from './feature-item';

const featureItems: FeatureItemProps[] = [
  {
    title: 'New Reading Experience',
    content:
      'Moco provides fresh approach to engage with the story, providing bite-sized narrative segments for an interactive and captivating learning adventure.',
    image: multipleCard,
  },
  {
    title: 'Embark on a Learning Quest',
    content:
      'Transforms reading into an interactive game, offering thrilling challenges and questions at every turn.',
    image: mazePreview,
    imageFirst: true,
  },
  {
    title: 'Merge with Real Life',
    content:
      'Real world blends seamlessly with virtual elements, creating an immersive and educational experience.',
    image: arPreview,
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-secondary to-[#E3B8B8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20 flex flex-col gap-y-24">
          {featureItems.map(({ title, image, content, imageFirst }) => (
            <FeatureItem
              title={title}
              image={image}
              content={content}
              imageFirst={imageFirst}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
