import Line from "@/components/atoms/line";
import { MockImportantTopics } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ImportantTopics(){
    console.log()
    return(
        <div className="">
            <h1 className="text-5xl">Важные темы <Line/></h1>
            <div className="flex flex-col space-y-4 mt-4">
                {
                    MockImportantTopics.map((topic)=>{
                        return(
                            <div className="bg-[#CAE2E6] px-5 py-4 rounded-3xl flex items-end justify-between" key={topic.id}>
                                <div className="flex space-x-2">
                                    <Image src={"/images/box.png"} alt="box_image" width={200} height={120} className="rounded-3xl"/>
                                    <div className="flex flex-col space-y-2.5">
                                        <h2 className="font-sans font-bold text-2xl">{topic.title}</h2>
                                        <p className="font-sans text-sm font-normal max-w-[25rem]">{topic.description}</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="flex items-center justify-center p-3 bg-[#00FCF2] rounded-full cursor-pointer">
                                        <ArrowUpRight width={24} height={24}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}