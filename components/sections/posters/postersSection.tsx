import Line from "@/components/atoms/line";
import Image from "next/image";

export default function PostersSection() {
    return (
        <section className="pb-16 sm:pb-20 lg:pb-30">
            <div className="bg-[#CAE2E6] p-6 sm:p-10 lg:p-16 rounded-2xl sm:rounded-3xl lg:rounded-4xl relative overflow-hidden">
                <div className="space-y-4 sm:space-y-5 lg:space-y-7 z-10 relative max-w-2xl">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl">Получайте грузы сразу, оплачивайте потом <Line/></h1>
                    <ul className="list-disc space-y-2 sm:space-y-3">
                        <li className="ml-6 sm:ml-9 max-w-[28rem] font-sans text-[#240502] text-sm sm:text-base lg:text-lg leading-5 sm:leading-6">Вы можете оплатить все прибывшие ранее грузы при получениее крайнего</li>
                        <li className="ml-6 sm:ml-9 max-w-[28rem] font-sans text-[#240502] text-sm sm:text-base lg:text-lg leading-5 sm:leading-6">При условии, что его стоимость не меньше стоимости всех предыдущих грузов</li>
                    </ul>
                    <span className="text-[#77878F] font-light text-xs sm:text-sm block">*Данная услуга действительна, после согласования с нами</span>
                </div>
                <Image 
                    src={"/images/feedback/boxes.png"} 
                    alt="boxes" 
                    width={415} 
                    height={586} 
                    className="absolute right-0 sm:right-10 -top-20 sm:-top-32 lg:-top-44 w-48 sm:w-72 lg:w-[415px] h-auto opacity-30 sm:opacity-100"
                />
            </div>
        </section>
    )
}
