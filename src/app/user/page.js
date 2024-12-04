import Image from "next/image";
import UserProfile from "../../components/Dashboard/userProfile/userProfile";
import HeaderPrim from "../../components/Header/headerPrim";
import UserCard from '../../components/User/userCard'
import RightCard from '../../components/User/rightCard'
import yellowRec from "../../../public/yellowRec.png";
import redRec from "../../../public/redRec.png";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from 'react-icons/lu'
import { TfiEmail } from 'react-icons/tfi'
const Page = () => {
  return (
    <>
      <section className="w-full ">
        <div className="flex md:flex-row flex-col max-md:items-center space-x-2">
          {/* left content  */}
          <div className=" w-[100%] md:w-[70%] p-10">
            <div className="space-y-4 flex flex-col">
              <HeaderPrim heading="User Dashboard" />
              {/* main content  */}

              <div className="bg-white rounded-3xl shadow-sm flex flex-col space-y-4 justify-between lg:flex-row lg:flex-wrap lg:space-y-0 -z-[999]">
                {/* profile  */}
                <div className="profile-bg rounded-tr-3xl rounded-tl-3xl w-full min-h-28 flex justify-between items-center px-8 -z-30 relative">
                  <div className="relative z-50">
                    <div className="h-32 w-32 rounded-full bg-[#C1BBEB] border-4 border-white absolute -bottom-24"></div>
                  </div>
                  <div className="flex">
                    <Image
                      src={redRec}
                      alt=""
                      className="w-64 -z-20 absolute right-20 bottom-0"
                    />
                    <div className="">
                      <Image
                        src={yellowRec}
                        alt=""
                        className="w-52 h-24 mt-4 -z-20"
                      />
                    </div>
                  </div>
                </div>
                <div className="-z-40 w-full bg-white py-12 px-10 rounded-br-3xl rounded-bl-3xl relative">
                  <span className="px-3 py-4 text-lg text-[#A098AE] absolute font-bold -top-4 right-3">...</span>
                  <div className="flex flex-col md:flex-row justify-between md:items-center items-start space-y-4 md:space-y-0">
                    <div className="space-y-2">
                        <h1 className="text-[#303972] text-xl md:text-3xl font-bold">Abdur Rahman</h1>
                        <p className="text-[#303972] font-semibold">Admin</p>
                        <div className="flex items-center space-x-2">
                        <CiLocationOn color="#A098AE"/>    
                        <p className="text-[#A098AE]">Jahanian, Pakistan</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center space-x-0 md:space-x-4">

                        <div className="space-y-2">
                            <h1 className="text-[#A098AE]">Phone</h1>
                            <div className="flex justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-[#fb7d5b] flex justify-center items-center">
                                    <LuPhone color="white"/>
                                </div>
                                <p className="ps-3 text-xs text-[#303972] font-semibold">+92 311 137 0146</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-[#A098AE]">Email</h1>
                            <div className="flex justify-center items-center">
                                <div className="w-10 h-10 rounded-full bg-[#fb7d5b] flex justify-center items-center">
                                    <TfiEmail color="white"/>
                                </div>
                                <p className="ps-3 text-xs text-[#303972] font-semibold">rahman146@gmail.com</p>
                            </div>
                        </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="flex lg:space-x-4 space-y-6 lg:space-y-0  flex-col lg:flex-row">
              <div className="bg-white rounded-3xl p-6 shadow-xl ">
                <UserCard
                heading ='Contacts'
                />
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-xl ">
                <UserCard
                heading ='Messages'
                />
              </div>
              
              
              </div>
              
            </div>
          </div>

          {/* right bar  */}
          <div className="bg-white lg:w-[30%] shadow-xl lg:shadow-none px-4 py-8 rounded-3xl md:rounded-none space-y-6 flex flex-col w-[80%]">
            <div className="px-6 hidden md:block">
              <UserProfile />
            </div>
            <div>
              {/* <RightCard/> */}
              <RightCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
