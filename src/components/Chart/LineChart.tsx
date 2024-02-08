"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Import ApexCharts dynamically to prevent server-side rendering issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LineChart = () => {
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 75, 51, 49, 82, 69, 91, 138, 87, 34, 121],
    },
  ];
  const options: ApexOptions = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#693FEC"],
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="line"
      height={350}
      width="100%"
    />
  );
};

export default LineChart;
