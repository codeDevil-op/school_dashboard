'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiPrinter } from 'react-icons/fi'
import {studentData} from './studentData'
import Pagination from '../Pagination/pagination'
interface headingType {
    heading:string,
}
const UnpaidStudents: React.FC<headingType> = ({heading}) => {

    // pagination states 
    const [currentPage,setCurrentPage] = useState(1)
    // const [studentsPerPage,setStudentsPerPage] = useState(5);
    const studentsPerPage = 5
    // get students data perpage 
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
    const allStudents = studentData.slice(indexOfFirstStudent,indexOfLastStudent)
    // const totalPages = Math.ceil(studentData.length / studentsPerPage)
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(studentData.length / studentsPerPage); i++) {
        pageNumbers.push(i);
      }
  return (
    <div>
        <div className="relative overflow-x-auto sm:rounded-lg">
    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        
        <tbody>
            {allStudents.map(({id,name,profile,ide,myclass,classlogo,fee})=>(

<tr key={id} className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 xl:space-x-2 -space-x-4">
<th scope="row" className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
    <Image className="w-10 h-10 rounded-full" src={profile} alt="Jese image"/>
    <div className="ps-3">
        <h1 className="text-sm font-normal text-[#303972]">{name}</h1>
    </div>  
</th>
<td className="xl:px-3 px-10 py-4 text-[#303972] font-medium">
   ID {ide}
</td>
<th scope="row" className="flex items-center px-3 py-4 text-gray-900 whitespace-nowrap dark:text-white">
    <Image className="w-10 h-10 rounded-full" src={classlogo} alt="Jese image"/>
    <div className="ps-3">
        <div className="text-xs font-normal text-[#A098AE]">Class</div>
        <div className=" text-[#303972] font-semibold">{myclass}</div>
    </div>  
</th>
<td className="px-3 py-4">
    <div className="flex items-center text-[#303972] font-semibold">
    {fee}$
    </div>
</td>
{!heading?
    <td className="px-3 py-4">
    <a href="#" className="font-medium cursor-pointer"><FiPrinter width={24} height={24}/>
    </a>
</td> :''
}

<td className="px-3 py-4 text-lg text-[#A098AE]">
    ...
</td>
</tr>

            ))}
            
        </tbody>
    </table>
</div>
{/* pagination  */}
<div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center bg-white p-4 text-[#363B64] text-sm font-normal'>
    <h1>Showing {indexOfFirstStudent+1}-{indexOfLastStudent} from {studentData.length} data</h1>
    <div>
        <Pagination 
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        pageNumbers = {pageNumbers}
        />
    </div>
</div>
    </div>
  )
}

export default UnpaidStudents