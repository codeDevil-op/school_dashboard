import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { MdArrowDropDown } from 'react-icons/md'
import UserProfile from '../Dashboard/userProfile/userProfile'

interface headingType  {
    heading:string
}

const Headersec: React.FC<headingType> = ({heading}) => {
  return (
    <>
     {/* upper */}
     <div className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 items-center justify-between">
            <div>
            <h1 className="text-[#303972] text-3xl font-bold">{heading}</h1>
            </div>
            <div className="bg-white p-3 rounded-lg md:bg-transparent md:p-0">
            <UserProfile/>
            </div>
        </div>
        {/* middle  */}
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-4 justify-between items-center">
            <div className="relative w-[80%] lg:w-60 bg-white rounded-3xl shadow-sm">
                  <input
                    type="text"
                    placeholder="search here..."
                    className="p-2 max-md:p-4 outline-none ml-8 rounded-3xl text-[#A098AE] w-full lg:w-52"
                  />
                  <IoSearchOutline
                    className="absolute top-4 max-md:top-4 max-md:left-4 left-3"
                    size={18}
                    color="#4D44B5"
                  />
                </div>
            <div className="space-x-4 flex">
                <div className="relative space-x-2">
                <select className="px-10 py-2 sm:text-lg text-[#4D44B5] rounded-full appearance-none outline-[#4d44b5] border border-[#4d44b5]">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                <span>
                <MdArrowDropDown className="text-[#4D44B5] absolute top-[14px] right-4" size={24}/>
                </span>
                </div>
                <button className="px-5 py-[10px] rounded-full bg-[#4D44B5] text-white sm:text-lg"><span className="mr-2 sm:text-xl font-bold">+</span>New Student</button>
            </div>
        </div>
    </>
  )
}

export default Headersec