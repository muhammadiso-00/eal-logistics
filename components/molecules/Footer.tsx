import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
    return (
        <footer className="py-6 sm:py-8 lg:py-10">
            <div className="flex flex-col lg:flex-row items-start justify-between pb-6 sm:pb-8 lg:pb-10 gap-8">
                <div className="w-full lg:w-auto">
                    <Image src={"/logo/main-logo.png"} alt="logo" width={270} height={60.64170837402344} className="w-48 sm:w-56 lg:w-[270px] h-auto" />
                </div>
                <div className="text-white flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 w-full lg:w-auto">
                    <div className="flex flex-col space-y-3">
                        <h2 className="font-medium font-sans text-lg sm:text-xl">О компании</h2>
                        <ul className="text-sm font-light text-white/90 space-y-2">
                            <Link href={"/"} className="hover:text-[#00FCF2] block">
                                <li>Главная</li>
                            </Link>
                            <Link href={"#feedbacks"} className="hover:text-[#00FCF2] block">
                                <li>Отзывы</li>
                            </Link>
                            <Link href={"#partnership"} className="hover:text-[#00FCF2] block">
                                <li>Партнерская программа</li>
                            </Link>
                            <Link href={"#projects"} className="hover:text-[#00FCF2] block">
                                <li>Наши проекты</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h2 className="font-medium font-sans text-lg sm:text-xl">Услуги</h2>
                        <ul className="text-sm font-light text-white/90 space-y-2">
                            <Link href={"/tarifs#tariffs"} className="hover:text-[#00FCF2] block">
                                <li>Тарифы</li>
                            </Link>
                            <Link href={"/tarifs#air-delivery"} className="hover:text-[#00FCF2] block">
                                <li>Авиа доставка</li>
                            </Link>
                            <Link href={"/tarifs#calculator"} className="hover:text-[#00FCF2] block">
                                <li className="max-w-50">Калькулятор просчета плотности</li>
                            </Link>
                            <Link href={"/tarifs#consolidation"} className="hover:text-[#00FCF2] block">
                                <li>Консолидация</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h2 className="font-medium font-sans text-lg sm:text-xl">Контакты</h2>
                        <ul className="text-sm font-light text-white/90 space-y-2.5">
                            <li className="flex items-start space-x-3">
                                <div className="mt-1">
                                    <Phone className="fill-[#00FCF2] text-[#00FCF2]" size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <Link href={"tel:+7 (123) 123-45-67"}>+7 (123) 123-45-67</Link>
                                    <Link href={"tel:+7 (123) 123-45-67"}>+7 (123) 123-45-67</Link>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="mt-1">
                                    <Mail className="text-[#00FCF2]" width={20} height={20} />
                                </div>
                                <Link href={"mailto:test@yandex.ru"}>
                                    test@yandex.ru</Link>
                            </li>

                            <li className="flex items-start space-x-3">
                                <div className="mt-1">
                                    <MapPin className="text-[#00FCF2]" size={20} />
                                </div>
                                <span>г.Санкт-Петербург</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-6 sm:pt-8 lg:pt-10 border-t border-[#00FCF2] flex justify-center">
                <p className="font-sans font-bold text-white max-w-3xl text-center text-sm sm:text-base lg:text-lg px-4">Продолжая использовать наш сайт, вы даете согласие на обработку <Link href={"#"} className="text-[#00FCF2] font-medium">файлов Cookies </Link>
                    и других пользовательских данных, в соответствии с <Link href={"#"} className="text-[#00FCF2] font-medium">Политикой конфиденциальности</Link></p>
            </div>
        </footer>
    )
}
