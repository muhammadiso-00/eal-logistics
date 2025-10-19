import Button from '@/components/atoms/button';
import Line from '@/components/atoms/line';
import { TransportServices } from '@/lib/data';
import Image from 'next/image';

export default function TransportSecton() {
    return (
                  <section id='services' className='pt-16 sm:pt-20 lg:pt-30 pb-10 sm:pb-16 lg:pb-20 flex flex-col gap-16 sm:gap-24 lg:gap-32'>
            <div className="flex flex-col">
                <div className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8 pb-5">
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>ТРАНСПОРТНАЯ КОМПАНИЯ <Line /></h1>
                    <p className='text-[#393535] font-sans text-lg sm:text-xl md:text-2xl lg:text-3xl text-center flex flex-col'>
                        <span>Китай - Россия - Беларусь</span>
                        <span>Свои склады в Китае: Фошань/ ИУ опт</span>
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-5 lg:gap-7">
                    <div className='flex items-center flex-col p-4 sm:p-5 border-3 border-[#CAE2E6] rounded-2xl sm:rounded-3xl flex-1 min-h-[200px] sm:min-h-[250px]'>
                        <Image src={"/icons/transport/1.png"} alt='icon' width={120} height={120} className='w-20 sm:w-24 lg:w-[120px] h-auto'></Image>
                        <ul className='list-disc text-sm sm:text-base'>
                            <li>Выкуп товара для ОПТ от 1%</li>
                            <li>Проверка товара</li>
                            <li>Доставка</li>
                            <li>Помощь в оплате поставщикам</li>
                        </ul>
                    </div>
                    <div className='flex items-center flex-col p-4 sm:p-5 border-3 border-[#CAE2E6] rounded-2xl sm:rounded-3xl flex-1 min-h-[200px] sm:min-h-[250px]'>
                        <Image src={"/icons/transport/2.png"} alt='icon' width={120} height={120} className='w-20 sm:w-24 lg:w-[120px] h-auto'></Image>
                        <ul className='list-disc text-sm sm:text-base'>
                            <li>Обратная связь 24/7</li>
                            <li>Отправка в этот же день</li>
                            <li>Работаем без выходных</li>
                        </ul>
                    </div>
                    <div className='flex items-center flex-col p-4 sm:p-5 border-3 border-[#CAE2E6] rounded-2xl sm:rounded-3xl flex-1 min-h-[200px] sm:min-h-[250px]'>
                        <Image src={"/icons/transport/3.png"} alt='icon' width={120} height={120} className='w-20 sm:w-24 lg:w-[120px] h-auto'></Image>
                        <ul className='list-disc text-sm sm:text-base'>
                            <li>Обучение по всем Китайским площадкам Taobao | 1688 | Pinduoduo | Poizon</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-7">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8 flex-1">
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Кто мы такие? <Line /></h1>
                    <p className='font-sans text-base sm:text-lg text-[#393535]'>Наша компания занимается логистикой и перевозкой товаров между Китаем и странами СНГ уж�� более 5 лет. Мы сотрудничаем с проверенными складами, знаем особенности таможенного оформления и обеспечиваем полный цикл доставки – от фабрики до вашей двери.
                        <br /><br />
                        Пусть логистика станет вашей сильной стороной –
                        мы всё сделаем за вас.</p>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                    <Image src={"/images/transportSection.png"} alt='transport' width={568} height={335} className='w-full max-w-md lg:max-w-none h-auto rounded-2xl'></Image>
                </div>
            </div>
            <div className="flex flex-col items-start space-y-8 sm:space-y-10 lg:space-y-14">
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Всё, что вам нужно — в одном месте <Line /></h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 w-full">
                    {
                        TransportServices.map((service) => {
                            return (
                                <div key={service.id} className='space-y-2 sm:space-y-3'>
                                    <Image src={service.image} alt='service_image' width={50} height={50} className='w-10 sm:w-12 lg:w-[50px] h-auto' />
                                    <h2 className='text-xl sm:text-2xl lg:text-3xl mt-2 sm:mt-4 mb-1 sm:mb-2'>{service.title}</h2>
                                    <p className='text-base sm:text-lg font-sans max-w-[28rem]'>{service.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Button title='Ознакомиться с примером' className='w-full sm:w-auto'/>
            </div>
        </section>
    )
}
