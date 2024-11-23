'use client'
import React, { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js";
import { MdArrowDropDown } from "react-icons/md";

interface chartData {
  heading:string,
  values:string,
}

const CardLineChart: React.FC<chartData> =({heading,values})=> {
  useEffect(() => {
    const config: ChartConfiguration = {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: new Date().getFullYear().toString(),
            backgroundColor: "#FCC43E",
            borderColor: "#FCC43E",
            // linear-gradient(180deg, #FCC43E 0%, #FCC43E 100%)
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: (new Date().getFullYear() - 1).toString(),
            fill: false,
            backgroundColor: "#FB7D5B",
            borderColor: "#FB7D5B",
            // background: linear-gradient(180deg, #FB7D5B 0%, #FB7D5B 100%)
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "#303972",
        },
        legend: {
          labels: {
            fontColor: "#303972",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#303972",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: 2, // Changed from [2] to 2 (number)
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2, // Changed from [2] to 2 (number)
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#303972",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: 3, // Changed from [3] to 3 (number)
                drawBorder: false,
                color: "#303972",
                zeroLineColor: "#303972",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: 2, // Changed from [2] to 2 (number)
              },
            },
          ],
        },
      },
    };

    const chartElement = document.getElementById("line-chart") as HTMLCanvasElement | null;
    if (chartElement) {
      const ctx = chartElement.getContext("2d");
      if (ctx) {
        new Chart(ctx, config);
      }
    }
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-white rounded-3xl">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1 flex items-center justify-between">
            <h6 className="text-[#303972] text-sm md:text-2xl font-bold">
              {heading}
            </h6>
            {values?
            <h2 className="text-[#303972] text-xl font-semibold">{values}</h2>:
            <div className="flex space-x-0 md:space-x-5">

              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center">
                <div className="h-2 w-2 rounded-full border-2 border-yellow-500"></div>
                <h1 className="text-xs text-[#A098AE] ps-2">Expenses</h1>
                </div>
                <p className="text-[#303972] font-semibold">1,245</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center">
                <div className="h-2 w-2 rounded-full border-2 border-orange-500"></div>
                <h1 className="text-xs text-[#A098AE] ps-2">Income</h1>
                </div>
                <p className="text-[#303972] font-semibold">1,356</p>
              </div>
              <div className="relative space-x-2">
                <select className="px-10 py-2 text-lg text-[#4D44B5] rounded-full appearance-none outline-[#4d44b5] border border-[#4d44b5]">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                <span>
                <MdArrowDropDown className="text-[#4D44B5] absolute top-[10px] right-4" size={24}/>
                </span>
                </div>

            </div>
            }
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative h-[250px]">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>
  );
}

export default CardLineChart;