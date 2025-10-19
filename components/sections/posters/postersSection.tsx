import Line from "@/components/atoms/line";
import Image from "next/image";

export default function PostersSection() {
    return (
        <section className="pb-30">
            <div className="bg-[#CAE2E6] p-16 rounded-4xl relative ">
                <div className="space-y-7 z-10">
                    <h1 className="text-5xl max-w-3xl">Получайте грузы сразу, оплачивайте потом <Line/></h1>
                    <ul className="list-disc ">
                        <li className="ml-9 max-w-[28rem] font-sans text-[#240502] text-lg leading-6">Вы можете оплатить все прибывшие ранее грузы при получениее крайнего</li>
                        <li className="ml-9 max-w-[28rem] font-sans text-[#240502] text-lg leading-6">При условии, что его стоимость не меньше стоимости всех предыдущих грузов</li>
                    </ul>
                    <span className="text-[#77878F] font-light text-sm">*Данная услуга действительна, после согласования с нами</span>
                </div>
                <Image src={"/images/feedback/boxes.png"} alt="boxes" width={415} height={586} className="absolute right-10 -top-44 "/>
            </div>
        </section>
    )
}