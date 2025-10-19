import Button from "@/components/atoms/button";
import Line from "@/components/atoms/line";
import { PartnerCards } from "@/lib/data";
import Image from "next/image";

export default function SponsorshipSection() {
    return (
        <section id="partnership" className="py-16 sm:py-20 lg:py-30">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                <div className="w-full lg:w-auto">
                    <Image src={"/images/sponsorship/man.png"} alt="partnership" width={570} height={628} className="rounded-2xl sm:rounded-3xl w-full max-w-md lg:max-w-none h-auto mx-auto" />
                </div>
                <div className="space-y-6 sm:space-y-8 lg:space-y-10 flex flex-col justify-center flex-1">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-xl">Партнерская программа <Line /></h1>
                    <p className="font-sans text-sm sm:text-base lg:text-lg text-[#393535] max-w-115">Если вы работаете с клиентами, связанными
                        с импортом и логистикой, или просто хотите получить дополнительный источник дохода — наша партнёрская программа создана для вас.
                        Мы предлагаем прозрачные и выгодные условия сотрудничества без скрытых комиссий и сложных договорённостей.
                        <br /><br />
                        Мы берём на себя всю работу: от оформления
                        и логистики до сопровождения и поддержки клиентов.
                        <br /><br />
                        Присоединяйтесь к команде профессионалов и расширяйте свои возможности. Вместе мы сделаем импорт лёгким и выгодным для всех.</p>
                    <Button title="Стать партнером" className="px-8 sm:px-12 lg:px-16 w-full sm:w-auto" />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 pt-12 sm:pt-16 lg:pt-20">
                {
                    PartnerCards.map((card) => {
                        return (
                            <div className="bg-[#CAE2E6] flex flex-col sm:flex-row p-5 sm:p-6 sm:pt-0 justify-between sm:pr-0 relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl min-h-[200px] sm:min-h-[220px]" key={card.id}>
                                <div className="flex flex-col justify-between pt-0 sm:pt-6 space-y-4 sm:space-y-5 z-10 flex-1">
                                    <div className="flex flex-col items-start">
                                        <h1 className="text-xl sm:text-2xl mb-2">{card.title}</h1>
                                        <span className="max-w-60 text-[#240502] font-sans text-sm sm:text-base lg:text-lg">{card.description}</span>
                                    </div>
                                    <div className="">
                                        <Button title="Подробнее" className="w-full sm:w-auto" />
                                    </div>
                                </div>
                                <div className="absolute right-0 bottom-0 opacity-30 sm:opacity-100">
                                    <Image src={card.image} alt={card.title} width={200} height={200} className="w-32 sm:w-40 lg:w-[200px] h-auto"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}
