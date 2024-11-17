'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {sideBarData} from '../sideBar/sideBarData'
import { GoSidebarCollapse, GoSidebarExpand } from 'react-icons/go'


const SideBar: React.FC = () => {
    const pathName = usePathname()
    const [isDrawerOpen,setIsDrawerOpen] = useState(false)
  return (
    <section className={`sidebar-bg w-64 lg:block max-w-[240px]: min-h-screen p-4 absolute ${isDrawerOpen?'left-0':'-left-64'} lg:left-0 lg:relative transition-all duration-500 ease-in z-50`}>
        <div className='flex items-center pt-4 pl-9 relative'>
            <div className='absolute block lg:hidden -right-8 cursor-pointer sidebar-bg p-2 rounded-tr-full rounded-br-full'
            onClick={()=>setIsDrawerOpen(!isDrawerOpen)}
            >
                {isDrawerOpen?<GoSidebarExpand size={22} color='#ffffff' 
            style={{ strokeWidth: 1 }}
            />:<GoSidebarCollapse size={22} color='#ffffff' 
            style={{ strokeWidth: 1 }}
            />}
           
            </div>
            <div>
                <Image src = {logo} alt = 'jodna logo' height={38} width={38}/>
            </div>
            <div className='ml-2'>
                <h1 className='font-bold text-white text-xl'>JODNA TECH</h1>
            </div>
        </div>
        {/* SideBar link  */}
        <div className='mt-4 ml-4 p-4'>
            <ul className='space-y-[2px]'>
               {
                sideBarData.map((item)=>(
                    <li key={item.id} className={pathName===item.href?'active':'p-3'}>
                    <Link href={item.href} className='flex items-center'>
                    <Image src={item.img} alt='' height={20} width={20} 
                    className={pathName===item.href?'icon':'filter: brightness(0) saturate(100%) invert(74%) sepia(35%) saturate(265%) hue-rotate(207deg) brightness(101%) contrast(84%);'}
                    />
                    <span className='ml-3 text-lg text-[#C1BBEB]'>{item.barData}</span>
                    </Link>
                </li>
                ))
               }
                
                
            </ul>
        </div>
    </section>
  )
}

export default SideBar
