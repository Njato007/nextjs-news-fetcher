'use client'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

type ButtonsPropsType = {
    onNext: Function,
    onPrev: Function,
    onPoint: Function,
    disabledNext: boolean,
    disabledPrev: boolean,
    pageSize: number,
    activePage: number,
}

const PaginationButton = ({onPrev, onNext, disabledNext, disabledPrev, pageSize, onPoint, activePage} : ButtonsPropsType) => {

  const paginations = Array.from({length: pageSize}, (_, i) => i + 1);

  return (
    <div className="w-full m-4">
      <div className="flex items-center content-center space-x-3 p-3 mx-auto w-fit">
        <button onClick={(e) => onPrev(e)} disabled={disabledPrev} className={`text-left p-2 bg-orange-500 rounded-sm text-white hover:cursor-pointer hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-400 disabled:opacity-70`}>
          <ArrowLeftCircleIcon className="h-6 w-6 dark:text-slate-100 mr-2 float-left" /> Previous
        </button>
        <div className="p-0 text-center">
          {
            paginations.map(value => (
              <button key={value} className={`py-1 px-2 rounded-sm border-[1px] dark:border-slate-500 m-[2px] md:m-1 lg:m-1 hover:bg-orange-500 ${activePage === value ? 'bg-orange-500 border-orange-500 text-white dark:border-orange-500': ''}`}
              onClick={() => onPoint(value)}>{value}</button>
            ))
          }
        </div>
        <button onClick={(e) => onNext(e)} disabled={disabledNext} className={`text-right p-2 bg-orange-500 rounded-sm text-white hover:cursor-pointer hover:bg-orange-600 disabled:cursor-not-allowed  disabled:bg-orange-400 disabled:opacity-70`}>
          <ArrowRightCircleIcon className="h-6 w-6 dark:text-slate-100 ml-2 float-right" /> Next
        </button>
      </div>
    </div>
  )
}

export default PaginationButton;