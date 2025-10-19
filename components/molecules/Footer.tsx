import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
    return (
        <footer className="py-10">
            <div className="flex items-start justify-between pb-10">
                <div className="">
                    <Image src={"/logo/main-logo.png"} alt="logo" width={270} height={60.64170837402344} />
                </div>
                <div className="text-white flex gap-10">
                    <div className="flex flex-col space-y-3">
                        <h2 className="font-medium font-sans text-xl">О компании</h2>
                        <ul className="text-sm font-light text-white/90 ">
                            <Link href={"/"} className="hover:text-[#00FCF2] mb-2">
                                <li>Главная</li>
                            </Link>
                            <Link href={"#feedbacks"} className="hover:text-[#00FCF2] mb-2">
                                <li>Отзывы</li>
                            </Link>
                            <Link href={"#partnership"} className="hover:text-[#00FCF2] mb-2">
                                <li>Партнерская программа</li>
                            </Link>
                            <Link href={"#projects"} className="hover:text-[#00FCF2] mb-2">
                                <li>Наши проекты</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h2 className="font-medium font-sans text-xl">Услуги</h2>
                        <ul className="text-sm font-light text-white/90 space-y-4">
                            <Link href={"/tarifs#tariffs"} className="hover:text-[#00FCF2] mb-2">
                                <li>Тарифы</li>
                            </Link>
                            <Link href={"/tarifs#air-delivery"} className="hover:text-[#00FCF2] mb-2">
                                <li>Авиа доставка</li>
                            </Link>
                            <Link href={"/tarifs#calculator"} className="hover:text-[#00FCF2] mb-2">
                                <li className="max-w-50">Калькулятор просчета плотности</li>
                            </Link>
                            <Link href={"/tarifs#consolidation"} className="hover:text-[#00FCF2] mb-2">
                                <li>Консолидация</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h2 className="font-medium font-sans text-xl">Контакты</h2>
                        <ul className="text-sm font-light text-white/90 space-y-2.5">
                            <li className="flex items-center space-x-3">
                                <div className="">
                                    <Phone className="fill-[#00FCF2] text-[#00FCF2]" />
                                </div>
                                <div className="flex flex-col">
                                    <Link href={"tel:+7 (123) 123-45-67"}>+7 (123) 123-45-67</Link>
                                    <Link href={"tel:+7 (123) 123-45-67"}>+7 (123) 123-45-67</Link>
                                </div>
                            </li>
                            <li className="flex items-center space-x-3">
                                <div className="">
                                    <Mail className=" text-[#00FCF2]" width={28} height={28} />
                                </div>
                                <Link href={"mailto:test@yandex.ru"}>
                                    test@yandex.ru</Link>
                            </li>

                            <li className="flex items-center space-x-3"><div className="">
                                <MapPin className="text-[#00FCF2]" />
                            </div><span>г.Санкт-Петербург</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pt-10 border-t border-[#00FCF2] flex justify-center">
                <p className="font-sans font-bold text-white max-w-3xl text-center text-lg">Продолжая использовать наш сайт, вы даете согласие на обработку <Link href={"#"} className="text-[#00FCF2] font-medium">файлов Cookies </Link>
                    и других пользовательских данных, в соответствии с <Link href={"#"} className="text-[#00FCF2] font-medium">Политикой конфиденциальности</Link></p>
            </div>
        </footer>
    )
}