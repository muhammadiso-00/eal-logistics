import Line from "@/components/atoms/line";
import { DeliverBenefits } from "@/lib/data";
import Image from "next/image";

export default function DeliverSection() {
    return (
        <section className="">
            <div className=" flex  ">
                <div className="">
                    <h1 className="text-5xl flex flex-col"><span>Получите</span> <span>максимальную выгоду</span> <Line /></h1>
                    <p className="flex flex-col max-w-xl">
                        <span className="font-bold font-sans uppercase text-lg">Бонусное предложение:</span>
                        <span className="leading-5">Вы всегда можете прислать нам фото накладной с интересующей отгрузкой и мы постараемся дать наиболее выгодный тариф.</span>
                    </p>
                    <div className="">
                        <h2>Если вы:</h2>
                        <div className="grid grid-cols-2 grid-rows-2 ">
                            {
                                DeliverBenefits.map((benefit) => {
                                    return (
                                        <div className="flex flex-col items-start" key={benefit.id}>
                                            <div className="p-2 py-3 bg-[#00FCF2] rounded-full">
                                                <Image src={"/icons/deliver/car.png"} alt="car" width={37.44000244140625} height={24} />
                                            </div>
                                            <h2 className="font-semibold text-2xl max-w-xs">{benefit.title}</h2>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
              
            </div>
        </section>
    )
}