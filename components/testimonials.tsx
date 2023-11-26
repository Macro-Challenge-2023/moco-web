import Team1Image from '@/public/images/crew/aaron.jpeg';
import Team2Image from '@/public/images/crew/rissa.jpeg';
import Team3Image from '@/public/images/crew/ziza.jpeg';
import Team4Image from '@/public/images/crew/daniel.jpeg';
import Team5Image from '@/public/images/crew/vania.jpeg';
import Team6Image from '@/public/images/crew/natfeb.jpeg';
import TeamCard, { TeamCardProps } from './team-card';

const crews: TeamCardProps[] = [
  {
    name: 'Carissa Farry Hilmi Az Zahra',
    image: Team2Image,
    role: 'Project Manager',
    link: 'https://www.linkedin.com/in/carissafarry/',
  },
  {
    name: 'Nur Azizah',
    image: Team3Image,
    role: 'Coder',
    link: 'https://www.linkedin.com/in/nurazizah01/',
  },
  {
    name: 'Daniel Aprilio',
    image: Team4Image,
    role: 'Coder',
    link: 'https://www.linkedin.com/in/daniel-aprillio/',
  },
  {
    name: 'Vania Sugiarto',
    image: Team5Image,
    role: 'UI/UX',
    link: 'https://www.linkedin.com/in/vania-sugiarto-9304a424a',
  },
  {
    name: 'Natasya Febriani',
    image: Team6Image,
    role: 'UI/UX',
    link: 'https://www.linkedin.com/in/vania-sugiarto-9304a424a',
  },
  {
    name: 'Aaron Christopher',
    image: Team1Image,
    role: 'Coder',
    link: 'https://go.aaronct.dev/linkedin',
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet the Squad</h2>
            <p className="text-xl text-gray-400">
              The masterminds crafting the Moco Kids App
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none grid-rows-1">
            {crews.map(({ name, link, image, role }, id) => (
              <TeamCard
                name={name}
                link={link}
                image={image}
                role={role}
                key={`${name}-${id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
