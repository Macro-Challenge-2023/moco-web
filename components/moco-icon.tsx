import mocoIcon from '../public/images/moco.svg';
import Image from 'next/image';

export default function MocoIcon({ width = 48, height = 48 }) {
  return (
    <Image
      width={width}
      height={height}
      priority
      src={mocoIcon}
      alt="Follow us on Twitter"
    />
  );
}
