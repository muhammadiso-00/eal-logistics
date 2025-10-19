"use client"
import CustomInput from '@/components/atoms/input';
import Line from '@/components/atoms/line';
import { useState } from 'react';
import { z } from 'zod';

const formSchema = z.object({
    clientCode: z.string().min(1, 'Код клиента обязателен'),
    packaging: z.string().min(1, 'Выберите упаковку'),
    deliveryDate: z.string().min(1, 'Выберите срок доставки'),
    insureCargo: z.boolean(),
    cargoValue: z.string().optional(),
    trackNumber: z.string().min(1, 'Трек номер заказа обязателен'),
    cargoCharacteristics: z.string().min(1, 'Характеристики груза обязательны'),
    orderNote: z.string().optional(),
    phone: z.string().min(1, 'Номер телефона обязателен'),
    telegram: z.string().optional(),
    acceptTerms: z.boolean().refine(val => val === true, 'Необходимо принять условия'),
    acceptDataProcessing: z.boolean().refine(val => val === true, 'Необходимо дать согласие на обработку данных')
});

type FormData = z.infer<typeof formSchema>;

export default function ConsolidationPage() {
    const [formData, setFormData] = useState<FormData>({
        clientCode: '',
        packaging: '',
        deliveryDate: '',
        insureCargo: false,
        cargoValue: '',
        trackNumber: '',
        cargoCharacteristics: '',
        orderNote: '',
        phone: '',
        telegram: '',
        acceptTerms: false,
        acceptDataProcessing: false
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = () => {
        try {
            formSchema.parse(formData);
            console.log('Form submitted:', formData);
            alert('Заказ успешно сформирован!');
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors: Partial<Record<keyof FormData, string>> = {};
                error.issues.forEach(err => {
                    if (err.path[0]) {
                        newErrors[err.path[0] as keyof FormData] = err.message;
                    }
                });
                setErrors(newErrors);
            }
        }
    };

    const handleSaveDraft = () => {
        console.log('Draft saved:', formData);
        alert('Черновик сохранен!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br 0 py-8 px-4">
                <h1 className='text-5xl pb-5'>Консолидация <Line/></h1>
            <div className="max-w-2xl mx-auto">
                <div className="space-y-4">
                    <div>
                        <CustomInput
                            type="text"
                            placeholder="Код клиента"
                            value={formData.clientCode}
                            onChange={handleInputChange('clientCode')}
                            className="w-full"
                        />
                        {errors.clientCode && <p className="text-red-500 text-sm mt-1 ml-2">{errors.clientCode}</p>}
                    </div>

                    <div>
                        <select
                            value={formData.packaging}
                            onChange={handleInputChange('packaging')}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base"
                        >
                            <option value="">Упаковка</option>
                            <option value="standard">Стандартная</option>
                            <option value="reinforced">Усиленная</option>
                            <option value="fragile">Хрупкий груз</option>
                        </select>
                        {errors.packaging && <p className="text-red-500 text-sm mt-1 ml-2">{errors.packaging}</p>}
                    </div>

                    <div>
                        <select
                            value={formData.deliveryDate}
                            onChange={handleInputChange('deliveryDate')}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base"
                        >
                            <option value="">Срок доставки</option>
                            <option value="3-5">3-5 дней</option>
                            <option value="5-7">5-7 дней</option>
                            <option value="7-10">7-10 дней</option>
                            <option value="10-14">10-14 дней</option>
                        </select>
                        {errors.deliveryDate && <p className="text-red-500 text-sm mt-1 ml-2">{errors.deliveryDate}</p>}
                    </div>

                    <div className="flex items-center space-x-3 px-2">
                        <input
                            type="checkbox"
                            id="insureCargo"
                            checked={formData.insureCargo}
                            onChange={handleInputChange('insureCargo')}
                            className="w-5 h-5 rounded border-gray-400 text-[#00FCF2] focus:ring-[#00FCF2]"
                        />
                        <label htmlFor="insureCargo" className="text-gray-700 text-sm sm:text-base">
                            Я хочу застраховать свой груз
                        </label>
                    </div>

                    {formData.insureCargo && (
                        <div>
                            <CustomInput
                                type="text"
                                placeholder="Себестоимость всего груза в долларах"
                                value={formData.cargoValue}
                                onChange={handleInputChange('cargoValue')}
                                className="w-full"
                            />
                        </div>
                    )}

                    <div>
                        <textarea
                            placeholder="Трек номер заказа"
                            value={formData.trackNumber}
                            onChange={handleInputChange('trackNumber')}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base min-h-[100px] resize-y"
                        />
                        {errors.trackNumber && <p className="text-red-500 text-sm mt-1 ml-2">{errors.trackNumber}</p>}
                    </div>

                    <div>
                        <textarea
                            placeholder="Характеристики груза&#10;(пример:одежда,обувь,хоз.товары)"
                            value={formData.cargoCharacteristics}
                            onChange={handleInputChange('cargoCharacteristics')}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base min-h-[120px] resize-y"
                        />
                        {errors.cargoCharacteristics && <p className="text-red-500 text-sm mt-1 ml-2">{errors.cargoCharacteristics}</p>}
                    </div>

                    <div>
                        <textarea
                            placeholder="Примечание к заказу"
                            value={formData.orderNote}
                            onChange={handleInputChange('orderNote')}
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-gray-400 bg-white/80 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FCF2] transition text-sm sm:text-base min-h-[100px] resize-y"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <CustomInput
                                type="tel"
                                placeholder="Номер телефона"
                                value={formData.phone}
                                onChange={handleInputChange('phone')}
                                className="w-full"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1 ml-2">{errors.phone}</p>}
                        </div>
                        <div>
                            <CustomInput
                                type="text"
                                placeholder="Ник в телеграмм @"
                                value={formData.telegram}
                                onChange={handleInputChange('telegram')}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="space-y-3 px-2">
                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                id="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleInputChange('acceptTerms')}
                                className="w-5 h-5 mt-0.5 rounded border-gray-400 text-[#00FCF2] focus:ring-[#00FCF2]"
                            />
                            <label htmlFor="acceptTerms" className="text-gray-700 text-sm sm:text-base">
                                Я принимаю все условия Пользовательского соглашения
                            </label>
                        </div>
                        {errors.acceptTerms && <p className="text-red-500 text-sm ml-8">{errors.acceptTerms}</p>}

                        <div className="flex items-start space-x-3">
                            <input
                                type="checkbox"
                                id="acceptDataProcessing"
                                checked={formData.acceptDataProcessing}
                                onChange={handleInputChange('acceptDataProcessing')}
                                className="w-5 h-5 mt-0.5 rounded border-gray-400 text-[#00FCF2] focus:ring-[#00FCF2]"
                            />
                            <label htmlFor="acceptDataProcessing" className="text-gray-700 text-sm sm:text-base">
                                Вы даете согласие на обработку персональных данных
                            </label>
                        </div>
                        {errors.acceptDataProcessing && <p className="text-red-500 text-sm ml-8">{errors.acceptDataProcessing}</p>}
                    </div>

                    <div className="space-y-3 pt-4">
                        <button
                            onClick={handleSubmit}
                            className="w-full py-4 rounded-2xl bg-[#00FCF2] text-gray-900 font-semibold text-base sm:text-lg hover:bg-[#00E5DD] transition-colors shadow-lg"
                        >
                            Сформировать заказ
                        </button>

                        <button
                            onClick={handleSaveDraft}
                            className="w-full py-4 rounded-2xl bg-gray-300 text-gray-700 font-semibold text-base sm:text-lg hover:bg-gray-400 transition-colors"
                        >
                            Сохранить черновик
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}