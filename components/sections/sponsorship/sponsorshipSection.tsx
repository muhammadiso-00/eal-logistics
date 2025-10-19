import Button from "@/components/atoms/button";
import Line from "@/components/atoms/line";
import { PartnerCards } from "@/lib/data";
import Image from "next/image";

export default function SponsorshipSection() {
    return (
        <section id="partnership" className="py-30">
            <div className="flex items-center justify-between">
                <div className="">
                    <Image src={"/images/sponsorship/man.png"} alt="partnership" width={570} height={628} className="rounded-3xl" />
                </div>
                <div className="space-y-10 flex flex-col justify-center">
                    <h1 className="text-5xl max-w-xl">Партнерская программа <Line /></h1>
                    <p className="font-sans text-lg text-[#393535] max-w-115">Если вы работаете с клиентами, связанными
                        с импортом и логистикой, или просто хотите получить дополнительный источник дохода — наша партнёрская программа создана для вас.
                        Мы предлагаем прозрачные и выгодные условия сотрудничества без скрытых комиссий и сложных договорённостей.
                        <br /><br />
                        Мы берём на себя всю работу: от оформления
                        и логистики до сопровождения и поддержки клиентов.
                        <br /><br />
                        Присоединяйтесь к команде профессионалов и расширяйте свои возможности. Вместе мы сделаем импорт лёгким и выгодным для всех.</p>
                    <Button title="Стать партнером" className="px-16" />
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-7 pt-20">
                {
                    PartnerCards.map((card) => {
                        return (
                            <div className={"bg-[#CAE2E6] flex p-6 pt-0 justify-between pr-0 relative overflow-hidden rounded-4xl"} key={card.id}>
                                <div className="flex flex-col justify-between pt-6 space-y-5">
                                    <div className="flex flex-col items-start">
                                        <h1 className="text-2xl">{card.title}</h1>
                                        <span className="max-w-60 text-[#240502] font-sans text-lg">{card.description}</span>
                                    </div>
                                    <div className="">
                                        <Button title="Подробнее" />
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0">
                                    <Image src={card.image} alt={card.title} width={200} height={200}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}