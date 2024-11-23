import React, { useState } from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

interface paginationType  {
    currentPage:number,
    setCurrentPage: (page: number) => void;
    pageNumbers:Array<number>,
}

const Pagination: React.FC<paginationType> = ({currentPage,setCurrentPage,pageNumbers}) => {

    const [pageNumberLimit, setPageNumberLimit] = useState(3);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(3);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

    // set current page 
    const paginate = (number:number)=>{
        setCurrentPage(number)
        

    }

    const nextPage =()=>{
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
          }
        // Shown next set of pageNumbers
          if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
          }
        
      
    }
    const prevPage =()=>{
        // Shown prev set of pageNumbers 
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
          }
          if (currentPage - 1 < minPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
          }
   
    }
  return (
    <div>
        <ul className='flex items-center space-x-3'>
            <li>
                <button 
                onClick={prevPage}
                className='flex items-center'>
                <IoMdArrowDropleft size={24} color='#A098AE'/>
                </button>
            </li>
            {pageNumbers.map((number,index)=>{
                if (number < maxPageNumberLimit+1 && number > minPageNumberLimit-1){
                    return (
                        <li key={index}
                      onClick={() => paginate(number)}
                       className={
                        currentPage===number?'cursor-pointer border border-[#A098AE] px-3 py-2 rounded-full text-xs text-white bg-[#4D44B5] shadow-lg transition-all duration-300':'cursor-pointer border border-[#A098AE] px-3 py-2 rounded-full text-xs text-[#363B64]'
                    }
                        >
                        {number}
                      </li> 
                    )
                }
                        
                })}
            <li>
                <button 
                onClick={nextPage}
                className='flex items-center'>
                <IoMdArrowDropright size={24} color='#A098AE'/>
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Pagination