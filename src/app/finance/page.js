'use client'
import React from "react";
import Image from "next/image";
import HeaderPrim from "../../components/Header/headerPrim";
import CardLineChart from '../../components/Dashboard/homeChart/chart'
import UnpaidStudents from '../../components/Dashboard/upaidStudents'
import Finance from '../../components/Finance/finance'
import studentImg from '../../../public/student.png'
import teacherImg from '../../../public/teacher.png'
import financeImg from '../../../public/finance.png'
import graphImg from '../../../public/graph.png'


const Page = ()=>{
    return (
        <>
        <section className="w-full">
      <div className="flex flex-col space-y-4 p-10">
       <div>
       <HeaderPrim 
        heading="Finance" 
        />
       </div>

       <div className="space-y-6">
        {/* upper  */}
        <div className="flex flex-col space-y-4 md:space-y-0  md:flex-row md:justify-betwee md:space-x-3">
          <div className="bg-white rounded-xl p-4 flex justify-center items-center">
            <div className="h-12 w-12 bg-[#4d44b5] rounded-full flex justify-center items-center">
            <Image src={studentImg} alt="" className="p-1 filter invert brightness-0 sepia saturate-200 hue-rotate-180"/>
            </div>
            <div className="ps-2 space-y-1">
              <p className="text-lg text-[#A098AE] font-normal">Total Students</p>
              <h1 className="text-3xl text-[#303972] font-bold">932</h1>
              <p className="text-[#A098AE] text-lg"><span className="text-[#4cbc9a]">+10%</span> than last month</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 flex justify-center items-center">
            <div className="h-12 w-12 bg-[#fb7d5b] rounded-full flex justify-center items-center">
            <Image src={teacherImg} alt="" className="p-1 filter invert brightness-0 sepia saturate-200 hue-rotate-180"/>
            </div>
            <div className="ps-2 space-y-1">
              <p className="text-lg text-[#A098AE] font-normal">Total Teachers</p>
              <h1 className="text-3xl text-[#303972] font-bold">754</h1>
              <p className="text-[#A098AE] text-lg"><span className="text-red-600">-0.5%</span> than last month</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 flex justify-center items-center">
            <div className="h-12 w-12 bg-[#fcc43e] rounded-full flex justify-center items-center">
            <Image src={financeImg} alt="" className="p-1 filter invert brightness-0 sepia saturate-200 hue-rotate-180"/>
            </div>
            <div className="ps-2 space-y-1">
              <p className="text-lg text-[#A098AE] font-normal">Total Teachers</p>
              <h1 className="text-3xl text-[#303972] font-bold">$123,456</h1>
              <p className="text-[#A098AE] text-lg"><span className="text-[#4cbc9a]">23%</span> than last month</p>
            </div>
            <div>
              <Image src={graphImg} width={200}/>
            </div>
          </div>
        </div>
        {/* upper  */}

        {/* middle  */}
        <div>
          <CardLineChart
          heading = 'Balance Analytics'
          />
        </div>
        {/* middle  */}

        {/* end  */}
        <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 justify-between">
        <div className="bg-white rounded-3xl p-6 space-y-4 shadow-xl">
                <h1 className="text-2xl text-[#303972] font-bold">Unpaid Student Intuition</h1>
                <div>
                  <UnpaidStudents
                  heading = 'finance'
                  />
                </div>

              </div>
              <div className="border bg-white rounded-2xl shadow-xl">
             <Finance/>
             </div>

        </div>
        
        {/* end  */}
       </div>
        
      </div>
    </section>
        </>
    )    
}

export default Page;