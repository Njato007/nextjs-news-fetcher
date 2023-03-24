import { ArticleType, NewsDataType } from '@/typings'
import moment from 'moment'
import React from 'react'
import ReadMoreButton from './ReadMoreButton'
import Image from 'next/image'
const NewItem = ({newsdata} : {newsdata: ArticleType}) => {

  return (
    <article className="border-[1px] p-1 rounded-md transition-all duration-100 hover:scale-105
     border-gray-200 bg-white hover:bg-gray-50 hover:shadow-md
     dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-800
      ">
      <div className="relative w-full h-40">
      {newsdata.urlToImage &&  <img src={newsdata.urlToImage} className="w-full h-40"/>}
        {/* {newsdata.urlToImage && <Image src={newsdata.urlToImage} fill alt='image...' placeholder='blur' blurDataURL='/image-placeholder.svg' />} */}
      </div>
      <div className="mt-2 grid grid-rows-3 px-2 gap-2 min-h-[200px] max-h-[250px] w-full">
        <div className="text-md">
          <span className="font-bold font-serif  line-clamp-3">
          {newsdata.title}
          </span>
        </div>
        <div className="text-md min-h-[80px]">
          <p className="dark:text-slate-200 line-clamp-3 font-light">{newsdata.description}</p>
        </div>
        <div className="text-sm">
          <p className="dark:text-slate-100">{newsdata.author && `${newsdata.author},`}</p>
          <p className="dark:text-slate-100">Published on: <span className='font-thin'>{moment(new Date(newsdata.publishedAt), "DD MM YYYY hh:mm:ss", true).calendar()}</span></p>
          <p className="dark:text-slate-100">Source: <span className='font-thin text-orange-400'>{newsdata.source.name}</span></p>
        </div>
      </div>
      <div className="text-center">
        <ReadMoreButton newsdata={newsdata} />
      </div>
    </article>
  )
}

export default NewItem