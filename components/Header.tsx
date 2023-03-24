'use client'
import React, { useState } from 'react'
import ThemeSwitcherButton from './ThemeSwitcherButton'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Menu from "../components/Menu";

const Header = () => {

  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <nav className="sticky z-50 top-0 grid grid-cols-3 p-8 border-b-[1px] dark:bg-slate-800 bg-gray-50 dark:border-slate-700 shadow-sm lg:px-40 sm:px-10">
        <div className="flex justify-start items-center">
          <div className='text-2xl text-gray-100 hover:cursor-pointer hover:text-pink-400'>
            <Bars3Icon className='text-slate-800 dark:text-slate-100 h-8 w-8 hover:text-orange-500' onClick={() => setShowMenu(!showMenu)}/>
          </div>
        </div>
        <div className="text-4xl font-bold text-center">
            <span>The</span>{' '}
            <span>Actual</span>{' '}
            <span className='text-orange-500'>News</span>
        </div>
        <div className="text-2xl flex justify-end content-center items-center">
            <ThemeSwitcherButton />
        </div>
      </nav>
      <div className="container mx-auto">
        {<Menu customClass={`menu ${showMenu ? 'show' : 'hide'}`} /> }
      </div>
    </>
  )
}

export default Header