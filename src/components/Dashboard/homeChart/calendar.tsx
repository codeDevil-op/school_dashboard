import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../../../utils/calendar";
import cn from "../../../utils/cn";

export default function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  const [selectMonth, setSelectMonth] = useState<number>(today.month());

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonthIndex = months.indexOf(e.target.value);
    setSelectMonth(selectedMonthIndex);

    if (selectedMonthIndex === currentDate.month()) {
      setToday(currentDate); // Reset to current date if selecting current month
    } else {
      // Update `today` to reflect the selected month while preserving the date
      setToday(today.set("month", selectedMonthIndex));
    }
  };
  return (
    <div className="xl:w-[370px] shadow-xl rounded-3xl bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-[#303972]">School Calendar</h1>
        <div>
          <select
            className="outline-none p-1 text-[#303972] text-xs"
            value={months[selectMonth]}
            onChange={handleMonthChange}

          >
            {months.map((month, index) => (
              <option key={index} value={month} >
                {month} {selectMonth?today.year():''}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-7 ">
        {days.map((day, index) => {
          return (
            <h1
              key={index}
              className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
            >
              {day}
            </h1>
          );
        })}
      </div>

      <div className=" grid grid-cols-7 ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="p-2 text-center h-14 grid place-content-center text-sm border border-gray-100"
              >
                <h1
                  className={cn(
                    currentMonth ? "" : "text-gray-400",
                    today ? "bg-[#fb7d5b] text-white" : "",
                    selectDate.toDate().toDateString() ===
                      date.toDate().toDateString()
                      ? "bg-black text-white"
                      : "",
                    "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                  )}
                  onClick={() => {
                    setSelectDate(date);
                  }}
                >
                  {date.date()}
                </h1>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
