import Image from 'next/image';

import FirstStory from '@/public/images/first_story.png'

export default function Introduction() {
  return (
    <section className="bg-gradient-to-b from-[#E3B8B8] to-[#F3E1BD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20 flex flex-col">
          <div className="grid grid-cols-2 gap-x-10 md:gap-x-24">
            <div className="flex items-center">
              <h3 className="h4 md:h3 text-primary">Introducing our first book</h3>
            </div>
            <div>
              <Image src={FirstStory} alt="First Story" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
