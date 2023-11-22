import Image from 'next/image'

interface CardProps {
    imageKey: number
    imageSrc: string;
    imageAlt: string;
}

export default function Card(card: CardProps) {
    const image = require(`@/public/images/cards/${card.imageSrc}`);

    return (
        <div className="lg:flex flex justify-between items-start w-1/3 p-2">
                <div className="bg-white font-bold rounded-xl p-2">
                    <h2 className="text-blue-900 text-2xl">{card.imageKey}</h2>
                    <Image src={image} className="rounded-3xl object-cover w-full h-full" alt={card.imageAlt}/>
                </div>
        </div>
    )
}