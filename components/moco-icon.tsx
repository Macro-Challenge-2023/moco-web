import mocoIcon from '../public/images/moco.svg';
import mocoName from '../public/images/moco_name_white.png';
import Image from 'next/image';

export default function MocoIcon({ width = 48, height = 48 }) {
  return (
      <>
        <div className="flex gap-1 items-center">
          <Image
              width={width}
              height={height}
              priority
              src={mocoIcon}
              alt="Follow us on Twitter"
          />
          <Image src={mocoName} alt="" className="w-auto h-1/3 mt-2"/>
        </div>

      </>
  );
}

export function MocoIcon2({ width = 48, height = 48 }) {
  return (
    <>
      <div className="flex gap-1 items-center">
        <Image src={mocoName} alt="" className="w-auto h-1/3 mt-2" />
      </div>
    </>
  );
}
