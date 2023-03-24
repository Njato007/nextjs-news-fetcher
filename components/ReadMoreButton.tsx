'use client';
import { ArticleType, NewsDataType } from '@/typings'
import { useRouter } from 'next/navigation';
import React from 'react'

const ReadMoreButton = ({newsdata}: {newsdata: ArticleType}) => {
    const router = useRouter();

    const handleClick = () => {
        const query = Object.entries(newsdata).map(([key, value]) => {
            if (value && typeof value === 'object') {
                return Object.entries(value).map(([k, v]) => `${k}=${v}`).join('&')
            }
            return `${key}=${value}`
        }).join('&');
        const url = `/article?${query}`;
        router.push(url);
    }

    return (
        <button onClick={handleClick}
        className="w-full px-4 py-3 rounded-sm transition-colors ease-in duration-100 text-center text-md border
        bg-gray-100 border-gray-300 hover:bg-orange-400 hover:border-orange-400 font-semibold text-gray-500 hover:text-white
        dark:bg-slate-700 dark:border-slate-600 dark:hover:bg-slate-600 dark:text-white">
            Read more
        </button>
    )
}

export default ReadMoreButton