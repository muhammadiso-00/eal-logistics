"use client"
import Button from '@/components/atoms/button';
import CustomInput from '@/components/atoms/input';
import Line from '@/components/atoms/line';
import { useState } from 'react';
export default function PersonalData() {
    const [isEditing, setIsEditing] = useState(false);
    type PersonalForm = {
        fullName: string;
        phone: string;
        email: string;
        telegram: string;
    };

    const [formData, setFormData] = useState<PersonalForm>({
        fullName: 'Елена Константиновна',
        phone: '+7 (999) 999-99-99',
        email: 'fgfgfgfgf@mail.ru',
        telegram: '@dluslf.gfd'
    });

    const handleChange = <K extends keyof PersonalForm>(field: K, value: PersonalForm[K]) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically save to backend
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset to original values if needed
    };

    return (
        <div className="min-h-screen bg-gradient-to-br ">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
                    Личные данные <Line />
                </h1>

                <div className="">
                    {!isEditing ? (
                        // Display Mode
                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                                <h2 className="text-2xl font-semibold text-gray-800">Информация</h2>
                                <Button
                                    title="Изменить"
                                    onClick={() => setIsEditing(true)}
                                />
                            </div>

                            {/* Display Info */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#00FCF2] flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">ФИО</p>
                                        <p className="text-lg font-medium text-gray-800">{formData.fullName}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#00FCF2] flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Телефон</p>
                                        <p className="text-lg font-medium text-gray-800">{formData.phone}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#00FCF2] flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">E-mail</p>
                                        <p className="text-lg font-medium text-gray-800">{formData.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[#00FCF2] flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Telegram</p>
                                        <p className="text-lg font-medium text-gray-800">{formData.telegram}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#00FCF2] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">ФИО</p>
                                    <CustomInput
                                        type="text"
                                        placeholder="Введите ФИО"
                                        value={formData.fullName}
                                        onChange={(e) => handleChange('fullName', e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#00FCF2] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Телефон</p>
                                    <CustomInput
                                        type="text"
                                        placeholder="Введите телефон"
                                        value={formData.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#00FCF2] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">E-mail</p>
                                    <CustomInput
                                        type="text"
                                        placeholder="Введите емайл"
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#00FCF2] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Telegram</p>
                                    <CustomInput
                                        type="text"
                                        placeholder="Введите телеграм"
                                        value={formData.telegram}
                                        onChange={(e) => handleChange('telegram', e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4 pt-4">
                                <Button
                                    title="Сохранить"
                                    onClick={handleSave}
                                    className="flex-1"
                                />
                              <button onClick={handleCancel} className='outline-none px-4 sm:px-6 py-2 sm:py-[0.5rem] cursor-pointer border-2 border-black rounded-full hover:bg-black hover:text-white duration-300'>Отьменит</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}