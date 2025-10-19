import ProfileSidebar from "@/components/molecules/profile/ProfileSidebar";
import { ArrowRight, Search } from "lucide-react";

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex max-w-[1170px] mx-auto py-10 space-x-10">
            <div className="">
                <ProfileSidebar />
            </div>
            <div className="w-full ">
                <div className="justify-start items-start flex pb-5">
                    <div className="flex  items-center justify-between sm:justify-start sm:space-x-4 lg:space-x-7 py-2.5 sm:py-3 px-3 sm:px-5 bg-[#F6F7FC] rounded-full">
                        <div className="flex items-center space-x-2 flex-1 sm:flex-initial">
                            <Search width={20} height={20} className="sm:w-6 sm:h-6" color="#A2A5B0" />
                            <input type="text" className="outline-none placeholder:text-[#A2A5B0] text-sm sm:text-base w-full sm:w-auto" placeholder="Отследить заказ" />
                        </div>
                        <button className="text-black bg-[#00FCF2] p-2 sm:p-3 rounded-full flex-shrink-0">
                            <ArrowRight width={20} height={20} className="sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}