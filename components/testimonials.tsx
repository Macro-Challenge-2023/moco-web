import Image from 'next/image'

import Team1Image from '@/public/images/crew/aaron.jpeg';
import TeamCard, { TeamCardProps } from './team-card'

const crews: TeamCardProps[] = [
  {
    name: 'Aaron Christopher Tanhar',
    image: Team1Image,
    role: 'Coder',
    link: 'https://go.aaronct.dev/linkedin'
  },
]

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Don't take our word for it</h2>
            <p className="text-xl text-gray-400">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis
              semper quis lectus nulla at volutpat diam ut venenatis tellus—in
              ornare.
            </p>
          </div>

          {/* Testimonials */}
          {crews.map(({ name, link, image, role }, id) => (
            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none" key={`${name}-${id}`}>
              {/* 1st testimonial */}
              <TeamCard name={name} link={link} image={image} role={role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
