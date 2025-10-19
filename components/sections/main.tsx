import { ArrowRight, Search } from "lucide-react";

export default function HomeSection() {
    return (
        <>
            <section className="flex items-center justify-start min-h-[calc(100vh-137px)] sm:h-[calc(100vh-137px)] max-w-[1170px] mx-auto py-10 sm:py-0">
                <div className="space-y-4 sm:space-y-3.5 flex items-start justify-start flex-col">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-3xl uppercase text-white leading-tight sm:leading-17">Ваша прямая линия
                        с Китаем — без рисков
                        и задержек</h1>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-sans max-w-xl">Мы помогаем бизнесу экономить время и деньги: доставка от двери до двери, растаможка, контроль качества и сопровождение на каждом этапе.</p>
                    <div className="w-full sm:w-auto">
                        <div className="flex items-center justify-between sm:justify-start sm:space-x-4 lg:space-x-7 py-2.5 sm:py-3.5 px-3 sm:px-5 bg-white rounded-full">
                            <div className="flex items-center space-x-2 flex-1 sm:flex-initial">
                                <Search width={20} height={20} className="sm:w-6 sm:h-6" color="#A2A5B0"/>
                                <input type="text" className="outline-none placeholder:text-[#A2A5B0] text-sm sm:text-base w-full sm:w-auto" placeholder="Отследить заказ" />
                            </div>
                            <button className="text-black bg-[#00FCF2] p-2 sm:p-3 rounded-full flex-shrink-0">
                                <ArrowRight width={20} height={20} className="sm:w-6 sm:h-6"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}