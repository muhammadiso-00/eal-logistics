import Line from "@/components/atoms/line";
import Image from "next/image";

export default function DocumentSection() {
    return (
        <section className="space-y-7 pb-20">
            <div className="flex flex-col space-y-7">
                <h1 className="text-5xl max-w-3xl">Документы и порядок оплаты: что важно знать <Line /></h1>
                <p className="text-lg font-sans text-[#240502] max-w-4xl">После отправки груза вы получаете накладную — это подтверждение того, что ваш товар уже в пути. В ней указаны основные параметры отправления (вес, объём, наименование), но она не отражает логистические этапы, такие как прохождение таможни, перемещения по Китаю или прибытие на склад.
                    <br /><br />
                    Оплата производится в день прибытия груза на склад в России. Это даёт вам уверенность в том, что вы оплачиваете только по факту — без предоплат и рисков.
                    <br /><br />
                    Мы делаем процесс доставки прозрачным и удобным на каждом этапе.</p>
            </div>
             <div className="space-y-4">
                <h2 className="text-xl uppercase font-semibold">Способы оплаты:</h2>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="flex items-end justify-between bg-[#CAE2E6] rounded-3xl p-6  overflow-hidden relative">
                        <div className="flex flex-col justify-end pb-4">
                            <h3 className="text-2xl font-semibold mb-1">Перевод на карту</h3>
                            <span className="text-sm">Быстро, просто, удобно</span>
                        </div>
                        <img src={"/images/documents/money.png"} alt="money" className="  object-cover w-74 h-82 translate-y-16 " />
                    </div>
                    <div className="flex items-end justify-between bg-[#CAE2E6] rounded-3xl p-6 pt-6 overflow-hidden">
                        <div className="flex flex-col justify-end pb-4">
                            <h3 className="text-2xl font-semibold mb-1">Оплата<br/>наличными</h3>
                            <span className="text-sm">$ на рынке по курсу ЦБ</span>
                        </div>
                        <img src={"/images/documents/wallet.png"} alt="wallet" className="w-70 h-70 object-cover translate-y-8" />
                    </div>
                </div>
                <div className="bg-[#CAE2E6] rounded-3xl p-8 ">
                    <p className="text-base text-center max-w-5xl">Мы принимаем 2 варианта консолидации, но во втором варианте важно чтобы клиент точно знал какой товар и к какой категории относится</p>
                </div>
            </div>
        </section>
    )
}