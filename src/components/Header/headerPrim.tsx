import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import UserProfile from '../Dashboard/userProfile/userProfile'

interface headingType {
    heading:string,
}

const HeaderPrim: React.FC<headingType> = ({heading}) => {

  return (
    <>
     <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-0">
                <div>
                  <h1 className="text-[#303972] text-4xl font-bold">
                    {heading}
                  </h1>
                </div>
                <div className="bg-white p-3 rounded-3xl md:hidden">
                  <UserProfile/>
                </div>
                <div className='flex space-x-0 md:space-x-10 items-center'>
                <div className="relative w-[95%] lg:w-64 bg-white rounded-3xl shadow-sm">
                  <input
                    type="text"
                    placeholder="search here..."
                    className=" p-2 max-md:p-4 outline-none ml-8 rounded-3xl text-[#A098AE] w-full lg:w-52"
                  />
                  <IoSearchOutline
                    className="absolute top-3 max-md:top-5 max-md:left-4 left-3"
                    size={18}
                    color="#4D44B5"
                  />
                </div>
                <div className={`bg-white md:bg-transparent p-3 rounded-3xl
                ${heading==='Dashboard'||'User Dashboard'?'hidden':'md:block hidden'}`
                }>
                  <UserProfile/>
                </div>
                </div>
              </div>
    </>
  )
}

export default HeaderPrim