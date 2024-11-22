'use client'
import React, { useState } from 'react'
import { LuPhone } from 'react-icons/lu'
import { TfiEmail } from 'react-icons/tfi'
import { studentData } from '../../components/Students/studentData'
import Image from 'next/image'
import Pagination from '../Pagination/pagination'
const StudentTable = () => {
    const [checkedIds,setCheckedIds] = useState<number[]>([])

    const handleCheck =(id:number)=>{
        setCheckedIds((prev)=>prev.includes(id)?prev.filter((checkedId)=>checkedId!==id):[...prev,id]
    )
    }
    // pagination states 
    const [currentPage,setCurrentPage] = useState(1)
    // const [studentsPerPage,setStudentsPerPage] = useState(5);
    const studentsPerPage = 6
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
    <>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-[#303972] uppercase bg-white">
            <tr>
            <span className={`absolute`}></span>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        
                    </div>
                </th>
                <th scope="col" className="px-4 py-3">
                    Name
                </th>
                <th scope="col" className="px-4 py-3">
                    ID
                </th>
                <th scope="col" className="px-4 py-3">
                    Date
                </th>
                <th scope="col" className="px-4 py-3">
                    Parent Name
                </th>
                <th scope="col" className="px-4 py-3">
                    City
                </th>
                <th scope="col" className="px-4 py-3">
                    Contact
                </th>
                <th scope="col" className="px-4 py-3">
                    Grade
                </th>
                <th scope="col" className="px-4 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {allStudents.map((stu)=>{
                // const {id,img,name,fname} = stu
                // <span className={`${checkedIds.includes(stu.id)?' w-1 h-20 bg-[#4D44B5] rounded-md':''}`}></span>
                return(
                    <tr className={`bg-white border-t hover:bg-gray-50 p-4 relative ${checkedIds.includes(stu.id) ?'bg-gray-50':''}`} key={stu.id}>
                    <span className={`absolute ${checkedIds.includes(stu.id)?' w-1 h-[70px] bg-[#4D44B5] rounded-md':''}`}></span>
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" 
                        type="checkbox" 
                        onChange={()=>handleCheck(stu.id)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        
                    </div>
                </td>
                
                <td className="px-4 py-4 text-[#303972] font-semibold flex items-center">
                <Image src={stu.img} alt="" className='w-10 h-10 rounded-full'/>
                    <div className="ps-3">
                        <div className="text-base font-semibold">{stu.name}</div>
                    </div>  
                </td>
                <td className="px-4 py-4 text-[#303972] font-semibold">
                #{stu.ide}
                </td>
                <td className="px-4 py-4 text-[#A098AE]">
                {stu.mdy}
                </td>
                <td className="px-4 py-4 text-sm text-[#303972]">
                {stu.fName}
                </td>
                <td className="px-4 py-4 text-sm text-[#303972]">
                {stu.city}
                </td>
                <td className="px-4 py-4 text-sm text-[#303972] flex justify-between">
                <div className='w-8 h-8 bg-[#edecf8] rounded-full flex justify-center items-center'>
                <LuPhone color='#303972'size={18}/>
                </div>
                <div className='w-8 h-8 bg-[#edecf8] rounded-full flex justify-center items-center'>
                <TfiEmail color='#303972'size={18}/>
                </div>
                </td>
                <td className="px-4 py-4 text-sm text-[#303972]">
                    <div className={`w-12 h-8 rounded-full flex justify-center items-center text-white
                         ${stu.grade==='VII A'&& 'bg-[#FB7D5B]'}
                         ${stu.grade==='VII B'&& 'bg-[#FCC43E]'}
                         ${stu.grade==='VII C'&& 'bg-[#4D44B5]'}
                         `}>
                        <h1>{stu.grade}</h1>
                    </div>
                </td>
                <td className="px-4 py-4 text-xl text-[#A098AE] font-bold ">
                    ...
                </td>
            </tr>
                )
            })}
        </tbody>
    </table>
    <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center text-[#363B64] text-sm font-normal bg-white p-4 max-md:w-[800px] max-md:items-start'>
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
    </>
  )
}

export default StudentTable