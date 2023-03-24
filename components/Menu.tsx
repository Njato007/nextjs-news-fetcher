'use client';
import { categories } from "@/utils/news";
import MenuLink from "./MenuLink";
import { usePathname } from "next/navigation";

export default function Menu({customClass}: {customClass: string}) {
    const path = usePathname();
    const activeLink = path.split('/')[1]
    return (
        <div className={`my-4 p-2 rounded-sm grid lg:grid-cols-7 md:grid-cols-4 grid-cols-2 gap-1 border-b-[0px] border-t-0 border-gray-300 dark:border-slate-700 ${customClass} `}>
            {categories.map(categorie => (
                <MenuLink key={categorie} categorie={categorie} isActive={activeLink === categorie} />
            ))}
        </div>
    );
}