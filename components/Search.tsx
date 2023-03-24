'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
type params = {
    onSearch: Function,
    query: string,
    className?: string
}
const Search = ({onSearch, query, className}: params) => {
  return (
    <div className='flex items-center justify-items-start w-full'>
      <MagnifyingGlassIcon className='h-10 w-10 p-2 mx-1 text-slate-500' />
      <input type="search" onChange={(e) => onSearch(e.target.value?.toLocaleLowerCase())}
      className='p-3 dark:text-slate-100 outline-none bg-gray-50 dark:bg-slate-800 w-full rounded-sm'
      placeholder='Search articles...' />
    </div>
  )
}

export default Search