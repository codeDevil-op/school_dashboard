import React, { useState } from "react";
import Pagination from "../Pagination/pagination";
import { financeData } from "../Finance/financeData";
import trendingup from "../../../public/icons/trendingup.png";
import Image from "next/image";
const Finance = () => {
  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  // const [studentsPerPage,setStudentsPerPage] = useState(5);
  const studentsPerPage = 5;
  // get students data perpage
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const allStudents = financeData.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  // const totalPages = Math.ceil(studentData.length / studentsPerPage)
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(financeData.length / studentsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className="relative overflow-x-auto rounded-2xl">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            {allStudents.map(({ id, ide, dmy, fee, status }) => (
              <tr
                key={id}
                className="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 xl:space-x-2 -space-x-4"
              >
                <th
                  scope="row"
                  className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="h-12 w-12 bg-[#4d44b5] rounded-full flex justify-center items-center">
                    <Image
                      src={trendingup}
                      alt=""
                      className="p-1 filter invert brightness-0 sepia saturate-200 hue-rotate-180"
                    />
                  </div>
                  <div className="ps-3">
                    <div className=" text-[#363B64] text-sm font-semibold">#{ide}</div>
                    <div className="text-xs font-normal text-[#A098AE]">
                      {dmy}
                    </div>
                  </div>
                </th>
                <td className="px-4 py-4">
                  <div className="flex items-center text-[#303972] font-semibold">
                    {fee}$
                  </div>
                </td>
                <td className={`px-4 py-4 text-lg
                ${status==='Completed'&& 'text-[#4CBC9A]'}
                ${status==='Cancelled'&& 'text-[#FF4550]'}
                `}
                >{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination  */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center bg-white p-8 text-[#363B64] text-sm font-normal">
        <h1>
          Showing {indexOfFirstStudent + 1}-{indexOfLastStudent} from{" "}
          {financeData.length} data
        </h1>
        <div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageNumbers={pageNumbers}
          />
        </div>
      </div>
      </>
  );
};

export default Finance;
