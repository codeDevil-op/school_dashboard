import Image from "next/image";
import React from "react";
import recR from '../../../public/recR.png'
import recY from '../../../public/recY.png'
import TimeLine from "./timeLine";

const RightCard = () => {
  return (
    <>
    <div className="bg-[#24238e] rounded-3xl p-6 text-white relative z-50">
      <div className="flex absolute bottom-0 right-0 -space-x-5">
        <div className="-z-10 relative">
          <Image src={recR} alt="" className="w-14 h-36 mt-[28px]"/>
        </div>
        <Image src={recY} alt="" className="w-14"/>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
            <p className="font-normal text-sm">Your Plan</p>
            <p className="font-bold text-lg">...</p>
        </div>
        <h1 className="text-2xl font-bold mb-3">Free</h1>
        <div className="space-y-3">
            <ul className="text-sm list-disc list-inside space-y-1">
                <li>50 GB Storage</li>
                <li>Limited Features</li>
            </ul>
            <p className="font-normal text-[11px] w-52">Upgrade to Premium Plan to get more Features & Storage memory </p>
        </div>
          <button className="text-[#303972] text-xs bg-white rounded-full px-6 py-2">Upgrade Plan</button>
      </div>
    </div>
    <div className="p-2 space-y-3 mt-5">
      <h1 className="font-bold text-2xl text-[#303972]">Latest Activity</h1>
        <div className="">
        <ol>
        <TimeLine/>  
        </ol>
        </div>
      </div>
    </>
  );
};

export default RightCard;
