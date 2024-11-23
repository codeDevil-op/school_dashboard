'use client'
import Image from "next/image";
import React, { useState } from "react";
import star from "../../../public/star.png";
import chart from "../../../public/chart.png";
import arrow from '../../../public/arrow.png'
import circle from '../../../public/circlebar.png'
import {menuData} from '../../components/Food/menuData'
import Pagination from "../Pagination/pagination";
const FoodMenu = () => {

    const [selectedCategory, setSelectedCategory] = useState("All Menues");
    const [filteredFood,setFilteredFood] = useState(menuData)
    
    // pagination states 
    const [currentPage,setCurrentPage] = useState(1)
    // const [studentsPerPage,setStudentsPerPage] = useState(5);
    const studentsPerPage = 5
    // get students data perpage 
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
    const allMenues = filteredFood.slice(indexOfFirstStudent,indexOfLastStudent)
    // const totalPages = Math.ceil(studentData.length / studentsPerPage)
    const pageNumbers =[];
    for (let i = 1; i <= Math.ceil(filteredFood.length / studentsPerPage); i++) {
        pageNumbers.push(i);
      }
    const handleFilterClick =(cat:string)=>{
        setSelectedCategory(cat)
        if(cat==='All Menues'){
            setFilteredFood(menuData)
        }else{
            setFilteredFood(menuData.filter((data)=>data.foodType===cat))
        }
    }
    
    
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="bg-white max-sm:w-[820px] p-6 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between relative">
            <h1 className="text-xl text-[#303972] font-semibold">Food Menu</h1>
            <ul className="flex space-x-6 mr-6">
                {['All Menues','Breakfast','Lunch','Snack'].map((category)=>{
                    return (
                        <li key={category}
                        className={`text-[#A098AE] text-sm z-50 relative 
                            ${category===selectedCategory?'after:absolute after:h-[3px] after:-bottom-[2px] after:-left-[5px] after:w-20 after:bg-[#4D44B5] after:rounded-md':''}
                            `}
                        >
                            <button
                            onClick={()=>handleFilterClick(category)}
                            className={category===selectedCategory?'text-[#4D44B5]':''}
                            >
                                {category}
                            </button>
                        </li>
                    )
                })
                }  
            </ul>
            <span className="absolute h-[2px] rounded-md w-[340px] bg-[#C1BBEB] right-1 top-[50] max-sm:hidden"></span>
            <span className="absolute h-[2px] rounded-md w-[340px] bg-[#C1BBEB] left-2 bottom-[22px] sm:hidden"></span>
        </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            {allMenues.map(({id,foodType,description,rating,interest,order})=>{
                return(
                    <tr key={id} className="bg-white  hover:bg-gray-50">
            <th
              scope="row"
              className="flex px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              
            >
              <div className="w-28 h-28 bg-[#C1BBEB] rounded-xl"></div>
              <div className="ps-6 space-y-2">
                <div className="text-white text-sm font-normal w-20 h-8 rounded-full bg-[#252472] flex justify-center items-center">
                  {foodType}
                </div>
                <div className="text-[#303972] text-lg">
                  {description}
                </div>
              </div>
            </th>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-3 ">
                <Image src={star} className="w-5" alt="" />
                <p className="text-[#303972] font-bold text-[17px]">{rating}</p>
              </div>
            </td>
            <td className="px-6 py-4 ">
                <div className="flex justify-center items-center">
                    <Image src={chart} alt="" className="w-8 h-10"/>
                
                <div className="ps-2 space-y-1">
                    <h1 className="text-[#303972] text-lg font-semibold">{order}</h1>
                    <p className="text-[#A098AE] text-xs">Total Order</p>
                </div>
                </div>
            </td>

            <td className="px-6 py-4 ">
                <div className="flex justify-center items-center">
                    <Image src={arrow} alt="" className="w-7"/>
                
                <div className="ps-2 space-y-1">
                    <h1 className="text-[#303972] text-lg font-semibold">{interest}</h1>
                    <p className="text-[#A098AE] text-xs">Interest</p>
                </div>
                </div>
            </td>
            

            <td className="px-6 py-4">
              <div>
                <Image src={circle} alt="" className="w-10"/>
              </div>
            </td>
            <td className="px-6 py-4 text-lg text-[#A098AE] font-bold">
              ...
            </td>
          </tr>
                )
            })}
        </tbody>
      </table>
      <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center bg-white p-4 text-[#363B64] text-sm font-normal'>
    <h1>Showing {indexOfFirstStudent+1}-{indexOfLastStudent} from {menuData.length} data</h1>
    <div>
        <Pagination 
        currentPage = {currentPage}
        setCurrentPage = {setCurrentPage}
        pageNumbers = {pageNumbers}
        />
    </div>
</div>
    </div>
  );
};

export default FoodMenu;
