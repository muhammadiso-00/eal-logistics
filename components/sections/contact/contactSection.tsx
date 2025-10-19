"use client";

import { useState } from "react";
import { z } from "zod";
import Button from "@/components/atoms/button";
import Line from "@/components/atoms/line";

const contactSchema = z.object({
    name: z.string().min(1, "Имя обязательно"),
    email: z.string().email("Некорректный email"),
    phone: z.string().min(1, "Номер телефона обязателен"),
    phoneFormat: z.enum(["uzbek", "russian"]),
    company: z.string().min(1, "Название компании обязательно"),
    message: z.string().min(1, "Сообщение обязательно"),
    gdprConsent: z.boolean().refine((val) => val === true, "Необходимо согласие"),
    marketingConsent: z.boolean(),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        email: "",
        phone: "",
        phoneFormat: "uzbek",
        company: "",
        message: "",
        gdprConsent: false,
        marketingConsent: false,
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

    const formatPhoneNumber = (value: string, format: "uzbek" | "russian"): string => {
        const numbers = value.replace(/\D/g, "");

        if (format === "uzbek") {
            // Uzbek format: +998 (XX) XXX-XX-XX
            if (numbers.length === 0) return "";
            if (numbers.length <= 3) return `+${numbers}`;
            if (numbers.length <= 5) return `+${numbers.slice(0, 3)} (${numbers.slice(3)}`;
            if (numbers.length <= 8) return `+${numbers.slice(0, 3)} (${numbers.slice(3, 5)}) ${numbers.slice(5)}`;
            if (numbers.length <= 10) return `+${numbers.slice(0, 3)} (${numbers.slice(3, 5)}) ${numbers.slice(5, 8)}-${numbers.slice(8)}`;
            return `+${numbers.slice(0, 3)} (${numbers.slice(3, 5)}) ${numbers.slice(5, 8)}-${numbers.slice(8, 10)}-${numbers.slice(10, 12)}`;
        } else {
            // Russian format: +7 (XXX) XXX-XX-XX
            if (numbers.length === 0) return "";
            if (numbers.length <= 1) return `+${numbers}`;
            if (numbers.length <= 4) return `+${numbers.slice(0, 1)} (${numbers.slice(1)}`;
            if (numbers.length <= 7) return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4)}`;
            if (numbers.length <= 9) return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7)}`;
            return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
        }
    };

    const handlePhoneChange = (value: string) => {
        const formatted = formatPhoneNumber(value, formData.phoneFormat);
        setFormData((prev) => ({ ...prev, phone: formatted }));
        if (errors.phone) {
            setErrors((prev) => ({ ...prev, phone: undefined }));
        }
    };

    const handlePhoneFormatChange = (format: "uzbek" | "russian") => {
        setFormData((prev) => ({
            ...prev,
            phoneFormat: format,
            phone: "" // Reset phone when format changes
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const result = contactSchema.safeParse(formData);

        if (!result.success) {
            const newErrors: Partial<Record<keyof ContactForm, string>> = {};
            result.error.issues.forEach((err) => {
                const key = err.path[0];
                if (typeof key === "string") {
                    newErrors[key as keyof ContactForm] = err.message;
                }
            });
            setErrors(newErrors);
        } else {
            setErrors({});
            console.log("Form submitted:", result.data);
            // Handle successful submission
        }
    };

    const handleChange = (field: keyof ContactForm, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <section className="py-10 sm:py-16 lg:py-20 flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-[34rem]">
                    Свяжитесь с нами — мы всегда на связи! <Line />
                </h1>
                <p className="font-sans text-sm sm:text-base lg:text-lg max-w-[25rem]">
                    Оставьте заявку, мы ответим на ваши вопросы и бесплатно проконсультируем
                </p>
            </div>
            <div className="flex-1 w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                            type="text"
                            placeholder="Имя"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <input
                            type="tel"
                            placeholder="Номер телефона"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base"
                        />
                        <input
                            type="text"
                            placeholder="��азвание компании"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base"
                        />
                    </div>

                    <textarea
                        placeholder="Введите сообщение"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={5}
                        className="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-3xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition resize-none text-sm sm:text-base"
                    />

                    <div className="space-y-3 mt-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.gdprConsent}
                                onChange={(e) => handleChange("gdprConsent", e.target.checked)}
                                className="w-5 h-5 mt-0.5 rounded border-2 border-gray-400 text-teal-500 focus:ring-2 focus:ring-[#00FCF2] cursor-pointer"
                            />
                            <span className="text-sm text-gray-600">
                                Вы даете согласие на обработку персональных данных
                            </span>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.marketingConsent}
                                onChange={(e) => handleChange("marketingConsent", e.target.checked)}
                                className="w-5 h-5 mt-0.5 rounded border-2 border-gray-400 text-teal-500 focus:ring-2 focus:ring-[#00FCF2] cursor-pointer"
                            />
                            <span className="text-sm text-gray-600">
                                Вы даете согласие на получение рекламы
                            </span>
                        </label>
                    </div>

                    {Object.keys(errors).length > 0 && (
                        <div className="text-red-500 text-sm">
                            {Object.values(errors).map((error, i) => (
                                <p key={i}>{error}</p>
                            ))}
                        </div>
                    )}

                    <div className="mt-4 w-full">
                        <Button title="Отправить" className="w-full" />
                    </div>
                </form>
            </div>
        </section>
    );
}