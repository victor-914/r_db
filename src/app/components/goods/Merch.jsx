import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
function Merch() {
  const values = [
    {
      name: "January",
      onlineSales: 33,
      offlineSales: 20,
      totalSales: 53,
    },
    {
      name: "Febuary",
      onlineSales: 33,
      offlineSales: 20,
      totalSales: 53,
    },
    {
      name: "March",
      onlineSales: 33,
      offlineSales: 20,
      totalSales: 53,
    },
    {
      name: "April",
      onlineSales: 33,
      offlineSales: 20,
      totalSales: 53,
    },
    {
      name: "May",
      onlineSales: 33,
      offlineSales: 20,
      totalSales: 53,
    },
    {
      name: "June",
      onlineSales: 33,
      offlineSales: 20,
      totalSales: 53,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        width={1000}
        height={300}
        data={values}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          label={{ value: "Total Sales", angle: -90, position: "insideLeft" }}
          dataKey="totalSales"
        />
        <Tooltip  />
        <Legend />
        <Bar
          dataKey="onlineSales"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="offlineSales"
          fill="#82ca9d"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Merch;
