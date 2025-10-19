import { ArrowRight, Search } from "lucide-react";

export default function HomeSection() {
    return (
        <>
            <section className="flex items-center justify-start h-[calc(100vh-137px)] max-w-[1170px] mx-auto px-5">
                <div className="space-y-3.5 flex items-start justify-start flex-col">
                    <h1 className="text-6xl max-w-3xl uppercase text-white leading-17">Ваша прямая линия
                        с Китаем — без рисков
                        и задержек</h1>
                    <p className="text-white text-2xl font-sans max-w-xl">Мы помогаем бизнесу экономить время и деньги: доставка от двери до двери, растаможка, контроль качества и сопровождение на каждом этапе.</p>
                    <div className="">
                        <div className="flex items-center justify-start space-x-7 py-3.5 px-5 bg-white rounded-full ">
                            <div className="flex items-center space-x-2">
                                <Search width={24} height={24} color="#A2A5B0"/>
                                <input type="text" className="outline-none placeholder:text-[#A2A5B0]" placeholder="Отследить заказ по Китаю" />
                            </div>
                            <button className="text-black bg-[#00FCF2] p-3 rounded-full">
                                <ArrowRight width={24} height={24}/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}