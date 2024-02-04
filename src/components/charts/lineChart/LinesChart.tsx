
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 3000,
    pv: 2400,
    amt: 2800,
  },
  {
    name: "Page B",
    uv: 6000,
    pv: 2500,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2800,
    pv: 4000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 5000,
    pv: 8008,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 3000,
    pv: 2000,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2200,
    pv: 6000,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 2000,
    pv: 500,
    amt: 2100,
  },
  {
    name: "Page",
    uv: 3190,
    pv: 2000,
    amt: 2100,
  },
  {
    name: "Page ",
    uv: 2090,
    pv: 4000,
    amt: 2100,
  },
  {
    name: "Page ",
    uv: 3690,
    pv: 4800,
    amt: 2100,
  },
  {
    name: "Page ",
    uv: 6690,
    pv: 4300,
    amt: 5000,
  },
];

export default function LinesChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
    <LineChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" hide />
      <YAxis hide />
      <Tooltip />
      {/* <Legend /> */}
      <Line
        type={`linear`}
        dataKey="pv"
        dot={false}
        stroke="#9870F3"
        strokeWidth={4}
     
      />
      <Line type={"linear"} dataKey="uv" stroke="#FFBE3F" dot={false} 
      strokeWidth={4}/>
    </LineChart>
    </ResponsiveContainer>
  );
}