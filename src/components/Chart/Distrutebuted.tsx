"use client";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const Distrutebuted = () => {
  const series = [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30, 40, 43, 27, 19],
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
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
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
      labels: {
        style: {
          colors: "#1C1C1C",
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="bar"
      height={300}
      width="100%"
    />
  );
};

export default Distrutebuted;
