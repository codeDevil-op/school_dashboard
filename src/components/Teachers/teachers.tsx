'use client'
import React, { useState } from 'react'
import { LuPhone } from 'react-icons/lu'
import { TfiEmail } from 'react-icons/tfi'
import {teacherData} from '../Teachers/teacherData'
import Pagination from '../Pagination/pagination'
const Teachers = () => {

    // pagination states 
    const [currentPage,setCurrentPage] = useState(1)
    // const [studentsPerPage,setStudentsPerPage] = useState(5);
    const studentsPerPage = 12
    // get students data perpage 
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
    const allTeacher = teacherData.slice(indexOfFirstStudent,indexOfLastStudent)
    // const totalPages = Math.ceil(studentData.length / studentsPerPage)
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(teacherData.length / studentsPerPage); i++) {
        pageNumbers.push(i);
      }
  return (
    <>
    <div className="flex justify-center sm:justify-between flex-wrap gap-x-4 gap-y-8">
{allTeacher.map((tData)=>(
    <div key={tData.id} className="w-60 bg-white px-4 py-8 rounded-lg flex flex-col items-center space-y-3 relative shadow-md">
    <div className="absolute top-0 right-2 text-xl text-[#A098AE] font-bold cursor-pointer">
              ...
          </div>
      <div className="w-16 h-16 rounded-full bg-[#C1BBEB]"></div>
      <div className="text-center">
        <h1 className="text-[#303972] text-xl font-semibold">{tData.tName}</h1>
        <p className="text-[#A098AE]">{tData.subject}</p>
      </div>
      <div className="text-white flex space-x-2">
        <div className="w-8 h-8 bg-[#303972] rounded-full flex justify-center items-center">
          <LuPhone color="white" size={18} />
        </div>
        <div className="w-8 h-8 bg-[#303972] rounded-full flex justify-center items-center">
          <TfiEmail color="white" size={18} />
        </div>
      </div>
    </div>
))}
</div>
<div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center text-[#363B64] text-sm font-normal p-4 max-md:w-[800px] max-md:items-start'>
    <h1>Showing {indexOfFirstStudent+1}-{indexOfLastStudent} from {teacherData.length} data</h1>
    <div>
        <Pagination 
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        pageNumbers = {pageNumbers}
        />
    </div>
</div>
    </>
  )
}

export default Teachers