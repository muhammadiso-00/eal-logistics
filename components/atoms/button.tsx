interface ButtonProps {
    title:string
    className?:string
    outline?:boolean
}


export default function Button({title, className, outline = false}:ButtonProps) {
    return (
        <button className={`${className} ${outline && "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black duration-300 hover:border-none"} px-6 py-[0.5rem] bg-[#00FCF2] border-2 border-[#00FCF2]  text-black rounded-full cursor-pointer   duration-300 `}>{title}</button>
    )
}