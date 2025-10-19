import Button from "@/components/atoms/button";
import Line from "@/components/atoms/line";
import Image from "next/image";

export default function TransportSectionSecond() {
    return (
        <section id="about" className="flex flex-col lg:flex-row items-start lg:items-end justify-between z-10 gap-8 lg:gap-0">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-xl leading-tight sm:leading-16">Понимайте больше — рискуйте меньше <Line/></h1>
                <p className="font-sans text-sm sm:text-base lg:text-lg max-w-2xl text-white">В международной логистике мелочей не бывает. Даже одна ошибка в документах или невыгодный способ доставки могут стоить вам времени, денег и репутации. Чтобы этого не случилось — мы делимся всем, что знаем.
                    <br /><br />
                    В нашем разделе вы найдёте практические советы, инструкции и разборы реальных кейсов. Всё — без воды и сложных терминов. Только конкретика, которой мы пользуемся каждый день.</p>
                <Button title="Отправить заявку" className="px-8 sm:px-12 lg:px-16 w-full sm:w-auto" />
            </div>
            <div className="hidden lg:block">
                <Image src={"/logo/main-logo.png"} alt="logo" width={300} height={83} className="w-48 lg:w-[300px] h-auto" />
            </div>
        </section>
    )
}
