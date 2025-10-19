"use client";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Button from "../atoms/button";
import { useState } from "react";
import { navData } from "@/lib/data";
import Link from "next/link";

export default function NavbarComponent() {
    const [selected, setSelected] = useState("EN");
    const [open, setOpen] = useState(false);

    const options = ["EN", "RU"];
    return (
        <nav className="py-5">
            <div className="flex items-center justify-between pb-2.5">
                <div className="logo">
                    <Image src={"/logo/main-logo.png"} alt="EAL logo" width={169} height={38} />
                </div>
                <div className="flex items-center space-x-6 ">
                    <div className="flex items-center bg-[#CAE2E633]/40 space-x-3 border-2 border-[#CAE2E6] px-2 pl-3 py-1 rounded-full ">
                        <div className="flex items-center space-x-2.5">
                            <Image src={"/icons/search.png"} alt="Search icon" width={16} height={16} />
                            <input type="text" placeholder="Поиск по сайту" className="outline-none text-[#A2A5B0] placeholder:text-[#A2A5B0]" />
                        </div>
                        <div className="flex items-center bg-[#00FCF2] px-[11px] py-2.5 rounded-full cursor-pointer">
                            <button className="text-[#393535] cursor-pointer"><ArrowRight width={16} height={16} /></button>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button title="Войти" outline={true} />
                        <Button title="Регистрация" />
                        <div className="relative inline-block">
                            <button
                                onClick={() => setOpen(!open)}
                                className="bg-white border rounded-full px-3 py-2 flex items-center justify-between "
                            >
                                {selected}
                            </button>

                            {open && (
                                <div className="absolute mt-2 w-full bg-white border rounded-2xl shadow-md ">
                                    {options.map((opt) => (
                                        <div
                                            key={opt}
                                            onClick={() => {
                                                setSelected(opt);
                                                setOpen(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer mx-auto rounded-2xl transition-all"
                                        >
                                            {opt}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-2.5 border-t border-[#00FCF2]">
                <ul className="flex items-center justify-between ">
                    {
                        navData.map((item) => {
                            return (
                            <Link key={item.id} href={item.link}>
                                <li  className="inline-block text-lg text-white hover:text-[#00FCF2] cursor-pointer duration-300 ">{item.title}</li>
                            </Link>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}