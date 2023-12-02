import ExperienceContent from '@/components/experience/content';

export const metadata = {
  title: 'Experience - MOCO',
  description: 'Our Story Cards Learning Media',
};

export default function Experience() {
  return (
    <section className="flex grow h-full items-center justify-center">
      <ExperienceContent />
    </section>
  );
}
