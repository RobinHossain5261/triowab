"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const series = [
    {
      data: [400, 430, 648, 470, 540, 580, 690, 1100, 1200, 984, 485, 1380],
    },
  ];

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    colors: [
      "#d4526e",
      "#546E7A",
      "#d4526e",
      "#13d8aa",
      "#A5978B",
      "#2b908f",
      "#f9a3a4",
      "#90ee7e",
      "#f48024",
      "#69d2e7",
    ],
    dataLabels: {
      enabled: false,
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
      type="bar"
      height={350}
      width="100%"
    />
  );
};

export default BarChart;
