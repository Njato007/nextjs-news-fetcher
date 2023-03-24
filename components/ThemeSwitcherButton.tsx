'use client';
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon} from "@heroicons/react/24/solid";

const ThemeSwitcherButton = () => {

    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <label className="switch" htmlFor='theme-switcher'>
            <input type="checkbox" id='theme-switcher' checked={currentTheme === "dark"} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light') } />
            <span className="slider round flex items-center">
                <span className='shadow-md bg-slate-100 dark:bg-slate-700 rounded-full p-[1px]'>
                {
                    currentTheme === "dark" ? (
                        <SunIcon className='h-8 w-8 cursor-pointer text-yellow-500'/>
                    ) : (
                        <MoonIcon className='h-8 w-8 cursor-pointer text-gray-600'/>
                    ) 
                }
                </span>
            </span>
        </label>
    )
}

export default ThemeSwitcherButton