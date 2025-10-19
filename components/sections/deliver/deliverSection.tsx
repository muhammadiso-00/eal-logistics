import Line from "@/components/atoms/line";
import { DeliverBenefits } from "@/lib/data";
import Image from "next/image";

export default function DeliverSection() {
    return (
        <section className="relative z-10">
            <div className="flex flex-col space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-5">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex flex-col">
                        <span>Получите</span> 
                        <span>максимальную выгоду</span> 
                        <Line />
                    </h1>
                    <div className="flex flex-col max-w-xl space-y-2">
                        <span className="font-bold font-sans uppercase text-base sm:text-lg">Бонусное предложение:</span>
                        <span className="text-sm sm:text-base leading-5 sm:leading-6">Вы всегда можете прислать нам фото накладной с интересующей отгрузкой и мы постараемся дать наиболее выгодный тариф.</span>
                    </div>
                </div>
                <div className="space-y-4 sm:space-y-5">
                    <h2 className="text-lg sm:text-xl font-semibold">Если вы:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                        {
                            DeliverBenefits.map((benefit) => {
                                return (
                                    <div className="flex flex-col items-start space-y-3" key={benefit.id}>
                                        <div className="p-2 py-3 bg-[#00FCF2] rounded-full">
                                            <Image src={"/icons/deliver/car.png"} alt="car" width={37.44000244140625} height={24} className="w-8 sm:w-9 h-auto" />
                                        </div>
                                        <h2 className="font-semibold text-xl sm:text-2xl max-w-xs">{benefit.title}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
