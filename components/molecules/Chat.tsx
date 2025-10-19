import { MessageCircle } from "lucide-react";

export default function Chat(){
    return (
        <div className="chat-button flex items-center w-14 h-14 cursor-pointer justify-center rounded-full duration-300 fixed bottom-8 right-8 bg-[#00FCF2] ">
            <img src={"/icons/message.png"} className="text-black w-7 h-7" />
        </div>
    )
}