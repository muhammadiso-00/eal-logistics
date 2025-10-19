"use client"
import Line from "@/components/atoms/line";

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Image from "next/image";

type TabType = 'video' | 'text' | 'screenshots';

interface VideoCard {
    id: number;
    date: string;
    title: string;
    description: string;
    thumbnail?:string
}
export default function FeedbackSection() {
    const [activeTab, setActiveTab] = useState<TabType>('video');

    const videoData: VideoCard[] = [
        { id: 1, date: '01.10.24', title: 'Короткое описание на видео', description: 'Короткое описание на видео', thumbnail: '/images/feedback/thumbnail/1.jpg' },
        { id: 2, date: '01.10.24', title: 'Короткое описание на видео', description: 'Короткое описание на видео', thumbnail: '/images/feedback/thumbnail/2.jpg' },
        { id: 3, date: '01.10.24', title: 'Короткое описание на видео', description: 'Короткое описание на видео', thumbnail: '/images/feedback/thumbnail/3.jpg' },
    ];

    const textData: VideoCard[] = [
        { id: 1, date: '02.10.24', title: 'Текстовая статья 1', description: 'Описание текстовой статьи с подробной информацией' },
        { id: 2, date: '02.10.24', title: 'Текстовая статья 2', description: 'Описание текстовой статьи с подробной информацией' },
        { id: 3, date: '02.10.24', title: 'Текстовая статья 3', description: 'Описание текстовой статьи с подробной информацией' },
    ];

    const screenshotData: VideoCard[] = [
        { id: 1, date: '03.10.24', title: 'Скриншот 1', description: 'Описание скриншота', thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600' },
        { id: 2, date: '03.10.24', title: 'Скриншот 2', description: 'Описание скриншота', thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600' },
        { id: 3, date: '03.10.24', title: 'Скриншот 3', description: 'Описание скриншота', thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600' },
    ]
        const tabs = [
        { id: 'video' as TabType, label: 'Видео' },
        { id: 'text' as TabType, label: 'Текст' },
        { id: 'screenshots' as TabType, label: 'Скриншоты' },
    ];

    const getCurrentData = () => {
        switch (activeTab) {
            case 'video':
                return videoData;
            case 'text':
                return textData;
            case 'screenshots':
                return screenshotData;
        }
    };
    return (
        <section id="feedbacks" className="space-y-7 pb-60">
            <h1 className="text-5xl">Отзывы <Line /></h1>
            <p className="text-lg text-[#240502] font-sans max-w-4xl">Каждый отзыв — это чей-то успешно доставленный товар, решённая задача и сохранённые нервы.
                Мы благодарны каждому, кто делится впечатлением — и стараемся становиться лучше с каждым днём.</p>
            <div className="">
                <div className="flex ">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-5 px-6 text-lg font-medium transition-all relative ${activeTab === tab.id
                                ? 'text-gray-900'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 w-[70%] mx-auto bg-[#00FCF2]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="pt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {getCurrentData().map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Thumbnail */}
                                {activeTab === 'video' || activeTab === 'screenshots' ? (
                                    <div className="relative pt-[66.67%] bg-gray-200 overflow-hidden">
                                        {item.thumbnail && (
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        )}
                                        {activeTab === 'video' && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-[#00FCF2] rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-500 hover:scale-110 transition-all">
                                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : null}

                                {/* Info */}
                                <div className="p-5">
                                    <div className="text-gray-400 text-sm mb-2">{item.date}</div>
                                    <div className="text-gray-900 font-medium mb-1">{item.title}</div>
                                    <div className="text-gray-600 text-sm">{item.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}