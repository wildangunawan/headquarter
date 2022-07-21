import { useEffect, useState } from "react";

// https://github.com/apexcharts/react-apexcharts/issues/240
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = (props: any) => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData(props.chartData);
    setChartOptions(props.chartOptions);
  }, [props]);

  return (
    <ApexChart
      options={chartOptions}
      series={chartData}
      type="bar"
      width="100%"
      height="100%"
    />
  );
};

export default BarChart;
