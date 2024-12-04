import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { userData } from "../User/userData";

interface cardType {
  heading: string;
}
const UserCard: React.FC<cardType> = ({ heading }) => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-xl font-semibold text-[#303972]">Contacts</h1>
            {heading === "Contacts" && (
              <p className="text-[#A098AE] font-normal">
                you have <span className="font-bold text-[#303972]">741</span>{" "}
                contacts
              </p>
            )}
          </div>
          {heading === "Contacts" && (
            <div className="h-10 w-10 rounded-full bg-[#4D44B5] flex justify-center items-center">
              <p className="text-2xl text-white font-bold">+</p>
            </div>
          )}
        </div>
        <div className="relative md:w-72 bg-white rounded-3xl shadow-sm border-[#A098AE] border-[1px]">
          <input
            type="text"
            placeholder="search here..."
            className=" p-2 max-md:p-4 outline-none ml-8 rounded-3xl text-[#A098AE] md:w-60"
          />
          <IoSearchOutline
            className="absolute top-3 max-md:top-5 max-md:left-4 left-3"
            size={18}
            color="#4D44B5"
          />
        </div>
        <div>
          <div className="space-y-6">
            {userData.map(({ id, uName, uClass }) => (
              <div key={id} className="flex items-center justify-between px-2">
                <div className="flex space-x-2 items-center">
                  <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
                  <div>
                    <h1 className="text-sm font-semibold text-[#303972]">
                      {uName}
                    </h1>
                    <p className="text-xs font-normal text-[#A098AE]">
                      {uClass}
                    </p>
                  </div>
                </div>
                {heading === "Contacts" ? (
                  <div>
                    <TfiEmail
                      color="#A098AE"
                      className="w-10 h-10 border rounded-full border-[#A098AE] p-2"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <p className="text-xs font-normal text-[#A098AE]">
                      12:45 AM
                    </p>
                    <div className="h-3 w-3 rounded-full bg-[#fb7d5b] flex justify-center items-center self-end">
                      <p className="text-[11px] text-white">1</p>
                    </div>
                  </div>
                )}
                
              </div>
            ))}
            <div className='bg-[#edecf8] p-3 rounded-full flex justify-center border items-center'>
                    <button className='text-[#303972] font-medium cursor-pointer'>View More</button>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
