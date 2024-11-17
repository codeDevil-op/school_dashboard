import React, { useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js";

const CardBarChart: React.FC = () => {
  useEffect(() => {
    // Check if the document is defined to avoid SSR issues
    const canvas = document?.getElementById("bar-chart") as HTMLCanvasElement | null;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const config: ChartConfiguration = {
          type: "bar",
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
              {
                label: new Date().getFullYear().toString(),
                backgroundColor: "#FCC43E",
                borderColor: "#FCC43E",
                data: [30, 78, 56, 34, 100, 45, 13],
                fill: false,
                barThickness: 8,
              },
              {
                label: (new Date().getFullYear() - 1).toString(),
                backgroundColor: "#FB7D5B",
                borderColor: "#FB7D5B",
                data: [27, 68, 86, 74, 10, 4, 87],
                fill: false,
                barThickness: 8,
              },
            ],
          },
          options: {
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
              text: "Orders Chart",
            },
            tooltips: {
              mode: "index",
              intersect: false,
            },
            hover: {
              mode: "nearest",
              intersect: true,
            },
            legend: {
              labels: {
                fontColor: "rgba(0,0,0,.4)",
              },
              align: "end",
              position: "bottom",
            },
            scales: {
              xAxes: [
                {
                  display: false,
                  scaleLabel: {
                    display: true,
                    labelString: "Month",
                  },
                  gridLines: {
                    borderDash: [2],
                    borderDashOffset: 2,
                    color: "rgba(33, 37, 41, 0.3)",
                    zeroLineColor: "rgba(33, 37, 41, 0.3)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: 2,
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  scaleLabel: {
                    display: false,
                    labelString: "Value",
                  },
                  gridLines: {
                    borderDash: [2],
                    drawBorder: false,
                    borderDashOffset: 2,
                    color: "rgba(33, 37, 41, 0.2)",
                    zeroLineColor: "rgba(33, 37, 41, 0.15)",
                    zeroLineBorderDash: [2],
                    zeroLineBorderDashOffset: 2,
                  },
                },
              ],
            },
          },
        };
        new Chart(ctx, config); // Initialize the chart
      }
    }
  }, []);

  return (
    <div className="relative h-[450px] flex flex-col break-words bg-white shadow-xl rounded-3xl p-2 xl:w-[350px] max-w-full">
      <div className="rounded-t mb-0 p-4 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
              Performance
            </h6>
            <h2 className="text-blueGray-700 text-xl font-semibold">Total orders</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        {/* Chart */}
        <div className="relative lg:h-[350px] h-[200px]">
          <canvas id="bar-chart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default CardBarChart;
