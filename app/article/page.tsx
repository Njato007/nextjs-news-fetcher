'use client'
import { ArticleType } from '@/typings'
import { BackwardIcon } from '@heroicons/react/24/solid'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {
    searchParams: ArticleType
}
const ViewMore = ({ searchParams } : Props) => {

    const params = useSearchParams();
    const isImageNull = params.get('urlToImage') === 'null';
    const router = useRouter();
    const handleClick = () => {
        router.back();
    }
    return (
        <>
        <div className={`grid grid-cols-1 ${isImageNull ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}>
            { !isImageNull &&
            <div className="px-4 grow">
             <img src={params.get('urlToImage')?.toString()} alt="img" className='w-full rounded-sm' />
            </div>
            }
            <div className="px-4">
                <h3 className='text-xl font-bold font-serif py-3'>{params.get('title')}</h3>
                <p className='my-3 md:my-2 font-light'>{params.get('description')}</p>
                <p className='my-3 md:my-2'>{params.get('content')}</p>
                <div className="flex divide-x-2 space-x-4">
                    <h2 className=""><span className="font-bold">By: </span>{params.get('author') || 'unknown'}</h2>
                    <h2 className="pl-4"><span className="font-bold">Source: </span>{params.get('source')}</h2>
                    <h2 className="pl-4"><span className="font-bold">Published: </span>{params.get('published_at')}</h2>
                </div>
            </div>
        </div>
        <div className="py-5 px-4 w-full">
            <button type='button' onClick={handleClick} className='p-3 rounded-md flex items-center content-center bg-orange-500 hover:bg-orange-600 text-white space-x-1'>
                <BackwardIcon className='h-4 w-4 text-white dark:text-gray-200' />
                <span>Go back</span>
            </button>
        </div>
        </>
    )
}

export default ViewMore