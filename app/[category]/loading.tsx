import { SunIcon } from '@heroicons/react/24/solid'
import React from 'react'

const loading = () => {
  return (
    <div className="loading h-200px flex content-center items-center w-full">
        <SunIcon className='h-10 w-10 dark:text-slate-200 animate-spin origin-center' />
    </div>
  )
}

export default loading