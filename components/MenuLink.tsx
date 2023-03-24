import Link from 'next/link'
import React from 'react'

const MenuLink = ({categorie, isActive} : {categorie: string, isActive: boolean}) => {
  return (
    <Link href={categorie} className={`text-slate-700 dark:text-slate-100  menu-item uppercase ${isActive && 'active'}`}>{categorie}</Link>
  )
}

export default MenuLink