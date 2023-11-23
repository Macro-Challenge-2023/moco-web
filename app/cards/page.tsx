import Card from "@/components/card";

export const metadata = {
    title: 'Cards - MOCO',
    description: 'Our Story Cards Learning Media',
}

const cardsData: string[] = [
    'card-moco.png',
    'card-bebe.png',
    'card-tekateki.png',
    'card-kato.png',
    'card-main.png',
    'card-madu.png',
    'card-stoples.png',
    'card-lem.png',
    'card-culik.png',
    'card-terowongan.png',
    'card-luna.png',
    'card-bebe.png',
    'card-makan.png',
    'card-madu.png',
];

export default function Cards(cardData: string[]) {
    cardData = cardsData

    return (
        <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-5 md:pt-38 text-white">
                    <div className="mx-auto lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-2xl">
                            Click and scan the card for each prompt, based in the order below:
                        </h2>
                    </div>
                </div>

                <div className="md:pb-20 text-white flex flex-wrap -mx-2">
                    {cardData.map((src, index) => (
                        <Card key={index} imageKey={index + 1} imageSrc={src} imageAlt={`Card ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    )
}
