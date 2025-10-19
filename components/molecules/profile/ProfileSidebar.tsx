"use client"

import Button from "@/components/atoms/button";
import { ProfileSidebarData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

export default function ProfileSidebar(){
    const pathname = usePathname()
    return(
        <div className="flex flex-col items-center gap-5 ">
            <h1 className="text-3xl">Код клиента</h1>
            <div className="flex flex-col rounded-4xl bg-[#F2F2F2]">
                {
                    ProfileSidebarData.map(item=>{
                        return(
                            <Link key={item.id} href={`/profile/${item.link}`} className={`font-sans text-[#393535]  font-semibold text-center py-3 px-16 rounded-full ${pathname?.split("/")[2] == item.link ? "bg-[#00FCF2]":"bg-[#F2F2F2]"}`}>{item.title}</Link>
                        )
                    })
                }
            </div>
            <div className="relative flex items-end justify-center rounded-4xl bg-[url('/images/importants/china.png')] w-[270px] h-[300px] bg-center bg-no-repeat bg-cover">
                    <Button title="Важные нюансы" className="mb-3 "/>
            </div>
        </div>
    )
}