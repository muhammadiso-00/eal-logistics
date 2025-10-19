import Line from "@/components/atoms/line";
import Image from "next/image";

export default function DocumentSection() {
    return (
        <section className="space-y-5 sm:space-y-7 pb-10 sm:pb-16 lg:pb-20">
            <div className="flex flex-col space-y-4 sm:space-y-5 lg:space-y-7">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-3xl">Документы и порядок оплаты: что важно знать <Line /></h1>
                <p className="text-sm sm:text-base lg:text-lg font-sans text-[#240502] max-w-4xl">После отправки груза вы получаете накладную — это подтверждение того, что ваш товар уже в пути. В ней указаны основные параметры отправления (вес, объём, наименование), но она не отражает логистические этапы, такие как прохождение таможни, перемещения по Китаю или прибытие на склад.
                    <br /><br />
                    Оплата производится в день прибытия груза на склад в России. Это даёт вам уверенность в том, что вы оплачиваете только по факту — без предоплат и рисков.
                    <br /><br />
                    Мы делаем процесс доставки прозрачным и удобным на каждом этапе.</p>
            </div>
             <div className="space-y-4">
                <h2 className="text-lg sm:text-xl uppercase font-semibold">Способы оплаты:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex items-end justify-between bg-[#CAE2E6] rounded-2xl sm:rounded-3xl p-4 sm:p-6 overflow-hidden relative min-h-[140px] sm:min-h-[160px]">
                        <div className="flex flex-col justify-end pb-2 sm:pb-4 z-10">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-1">Перевод на карту</h3>
                            <span className="text-xs sm:text-sm">Быстро, просто, удобно</span>
                        </div>
                        <img src={"/images/documents/money.png"} alt="money" className="absolute right-0 bottom-0 object-cover w-48 sm:w-60 lg:w-74 h-auto translate-y-8 sm:translate-y-16" />
                    </div>
                    <div className="flex items-end justify-between bg-[#CAE2E6] rounded-2xl sm:rounded-3xl p-4 sm:p-6 overflow-hidden relative min-h-[140px] sm:min-h-[160px]">
                        <div className="flex flex-col justify-end pb-2 sm:pb-4 z-10">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-1">Оплата<br/>наличными</h3>
                            <span className="text-xs sm:text-sm">$ на рынке по курсу ЦБ</span>
                        </div>
                        <img src={"/images/documents/wallet.png"} alt="wallet" className="absolute right-0 bottom-0 w-44 sm:w-56 lg:w-70 h-auto object-cover translate-y-4 sm:translate-y-8" />
                    </div>
                </div>
                <div className="bg-[#CAE2E6] rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
                    <p className="text-sm sm:text-base text-center max-w-5xl mx-auto">Мы принимаем 2 варианта консолидации, но во втором варианте ва��но чтобы клиент точно знал какой товар и к какой категории относится</p>
                </div>
            </div>
        </section>
    )
}
