interface ButtonProps {
    title: string
    className?: string
    outline?: boolean;
    onClick?: () => void
}


export default function Button({ title, className, outline = false, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className={`${className} ${outline && "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black duration-300 hover:border-none"} px-4 sm:px-6 py-2 sm:py-[0.5rem] bg-[#00FCF2] border-2 border-[#00FCF2] text-black rounded-full cursor-pointer duration-300 text-sm sm:text-base font-medium`}>{title}</button>
    )
}   