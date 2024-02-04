import { AreaChart, Area , ResponsiveContainer ,Tooltip} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 3200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 3500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2200,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1800,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 1500,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 1300,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 2000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 1200,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 100,
    pv: 4300,
    amt: 2100,
  },
];


export default function AreaCharts() {
  return (
    <ResponsiveContainer width="100%" height={150}>
    <AreaChart
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <Area type="linear" dataKey="uv" stroke="#C79535" fill="#C79535" />
      <Tooltip/>
    </AreaChart>
    </ResponsiveContainer>
  );
}
