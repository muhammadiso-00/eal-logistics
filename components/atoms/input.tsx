interface CustomInputProps {
    type: string;
    placeholder: string;
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string
}

export default function CustomInput({ type, placeholder, value, onChange, className }: CustomInputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`${className} px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base`}
        />
    )
} 