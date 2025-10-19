import Button from "@/components/atoms/button";
import Line from "@/components/atoms/line";
import Image from "next/image";

export default function TransportSectionSecond() {
    return (
        <section id="about" className="flex items-end justify-between z-10">
            <div className=" space-y-10">
                <h1 className="text-5xl text-white max-w-xl leading-16">Понимайте больше — рискуйте меньше <Line/></h1>
                <p className="font-sans text-lg max-w-2xl text-white">В международной логистике мелочей не бывает. Даже одна ошибка в документах или невыгодный способ доставки могут стоить вам времени, денег и репутации. Чтобы этого не случилось — мы делимся всем, что знаем.
                    <br /><br />
                    В нашем разделе вы найдёте практические советы, инструкции и разборы реальных кейсов. Всё — без воды и сложных терминов. Только конкретика, которой мы пользуемся каждый день.</p>
                <Button title="Отправить заявку" className="px-16" />
            </div>
            <div className="">
                <Image src={"/logo/main-logo.png"} alt="logo" width={300} height={83}  />
            </div>
        </section>
    )
}