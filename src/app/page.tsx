"use client";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import student from "../../public/icons/Student.png";
import teacher from "../../public/icons/Teacher.png";
import calendar from "../../public/icons/Calendar.png";
import food from "../../public/icons/food.png";
import CardBarChart from "@/components/Dashboard/homeChart/chartBar";
import CardLineChart from "@/components/Dashboard/homeChart/chart";
import Calendar from "@/components/Dashboard/homeChart/calendar";
import UnpaidStudents from "@/components/Dashboard/upaidStudents";
import UserProfile from "@/components/Dashboard/userProfile/userProfile";
import RightBar from "@/components/Dashboard/rightBar";

export default function Home() {
  return (
    <>
      <section className="w-full ">
        <div className="flex md:flex-row flex-col max-md:items-center space-x-2">
          {/* left content  */}
          <div className=" w-[100%] md:w-[70%] p-10">
            <div className="space-y-4 flex flex-col">
              <div className="flex flex-col lg:flex-row justify-between lg:items-center space-y-3 lg:space-y-0">
                <div>
                  <h1 className="text-[#303972] text-4xl font-bold">
                    Dashboard
                  </h1>
                </div>
                <div className="bg-white p-3 rounded-3xl md:hidden">
                  <UserProfile/>
                </div>
                <div className="relative max-w-[90%] lg:w-60 bg-white rounded-3xl shadow-sm">
                  <input
                    type="text"
                    placeholder="search here..."
                    className=" p-2 max-md:p-4 outline-none ml-8 rounded-3xl text-[#A098AE] w-full lg:w-52"
                  />
                  <IoSearchOutline
                    className="absolute top-3 max-md:top-4 max-md:left-4 left-3"
                    size={18}
                    color="#4D44B5"
                  />
                </div>
              </div>

              {/* main content  */}

              <div className="bg-white rounded-3xl shadow-sm p-6 flex flex-col space-y-4 justify-between lg:flex-row lg:flex-wrap lg:space-y-0 ">
                {/* icons  */}
                <div className="flex space-x-4 items-center">
                  <div className="bg-[#4d44b5] w-12 h-12 rounded-full flex justify-center items-center">
                    <Image
                      src={student}
                      alt=""
                      width={30}
                      height={30}
                      className="filter invert brightness-0 sepia saturate-200 hue-rotate-180"
                    />
                  </div>
                  <div>
                    <h1 className="text-[#A098AE] text-lg font-normal">
                      Students
                    </h1>
                    <p className="text-[#303972] font-bold text-3xl">932</p>
                  </div>
                </div>

                <div className="flex space-x-4 items-center">
                  <div className="bg-[#fb7d5b] w-12 h-12 rounded-full flex justify-center items-center">
                    <Image
                      src={teacher}
                      alt=""
                      width={30}
                      height={30}
                      className="filter invert brightness-0 sepia saturate-200 hue-rotate-180"
                    />
                  </div>
                  <div>
                    <h1 className="text-[#A098AE] text-lg font-normal">
                      Teachers
                    </h1>
                    <p className="text-[#303972] font-bold text-3xl">754</p>
                  </div>
                </div>
                <div className="flex space-x-4 items-center">
                  <div className="bg-[#fcc43e] w-12 h-12 rounded-full flex justify-center items-center">
                    <Image
                      src={calendar}
                      alt=""
                      width={30}
                      height={30}
                      className="filter invert brightness-0 sepia saturate-200 hue-rotate-180"
                    />
                  </div>
                  <div>
                    <h1 className="text-[#A098AE] text-lg font-normal">
                      Events
                    </h1>
                    <p className="text-[#303972] font-bold text-3xl">40</p>
                  </div>
                </div>
                <div className="flex space-x-4 items-center">
                  <div className="bg-[#303972] w-12 h-12 rounded-full flex justify-center items-center">
                    <Image
                      src={food}
                      alt=""
                      width={30}
                      height={30}
                      className="filter invert brightness-0 sepia saturate-200 hue-rotate-180"
                    />
                  </div>
                  <div>
                    <h1 className="text-[#A098AE] text-lg font-normal">Food</h1>
                    <p className="text-[#303972] font-bold text-3xl">32k</p>
                  </div>
                </div>
              </div>
              {/* line chart  */}
              <div className="">
                <CardLineChart />
              </div>
              {/* calendar and barchart  */}

              <div className="flex flex-col flex-wrap space-y-3 xl:space-y-0 lg:flex-row xl:flex-nowrap xl:space-x-2 max-w-[800px]">
                <div className="">
                  <Calendar />
                </div>
                {/* chartBar  */}
                <div className="w-full">
                  <CardBarChart />
                </div>
              </div>

              {/* student institution pagination  */}

              <div className="bg-white rounded-3xl p-6 space-y-4 shadow-xl ">
                <h1 className="text-2xl text-[#303972] font-bold">Unpaid Student Intuition</h1>
                <div>
                  <UnpaidStudents/>
                </div>

              </div>
            </div>
          </div>

          {/* right bar  */}
          <div className="bg-white lg:w-[30%] shadow-xl lg:shadow-none px-4 py-8 rounded-3xl md:rounded-none space-y-6 flex flex-col w-[80%]">
          <div className="p-2 hidden md:block">
            <UserProfile/>
          </div>
          <div>
          <RightBar/>
          </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
