import React, { useMemo } from 'react'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
    Text,
  } from "recharts";


  const blues = [
    
    "#EBE4FA", "#E5A158", "#5E4994",
  ];
  
  const getColor = (index :number) => {
    return blues[index % blues.length];
  };
  
  const data = [
    { name: "Page A", pv: 42 },
    { name: "B", pv: 29 },
    { name: "C", pv: 19},
   
  ];
  
  const YAxisLeftTick = ({ y, payload: { value } } :any) => {
    return (
      <Text x={0} y={y} textAnchor="start" verticalAnchor="middle" scaleToFit>
        {value}
      </Text>
    );
  };
  
  let ctx :any;
  
  export const measureText14HelveticaNeue = (text : any) => {
    if (!ctx) {
      ctx = document.createElement("canvas").getContext("2d");
      ctx.font = "14px 'Helvetica Neue";
    }
  
    return ctx.measureText(text).width;
  };
  let xKey="name"
  let  yKey="pv" 

function HorizontalBarChart() {
        const maxTextWidth = useMemo(
          () =>
            data.reduce((acc :any, cur :any) => {
              const value = cur[yKey];
              const width = measureText14HelveticaNeue(value.toLocaleString());
              if (width > acc) {
                return width;
              }
              return acc;
            }, 0),
          [data, yKey]
        );
        const BAR_AXIS_SPACE = 10;
        return (
          <ResponsiveContainer width={"100%"} height={50 * data.length} debounce={50}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ left: 10, right: maxTextWidth + (BAR_AXIS_SPACE - 8) }}
            >
              <XAxis hide axisLine={false} type="number" />
              <YAxis
                yAxisId={0}
                dataKey={xKey}
                type="category"
                axisLine={false}
                tickLine={false}
                tick={YAxisLeftTick}
                hide
              />
              <YAxis
                orientation="right"
                yAxisId={1}
                dataKey={yKey}
                type="category"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => value.toLocaleString()}
                mirror
                tick={{
                  transform: `translate(${maxTextWidth + BAR_AXIS_SPACE}, 0)`,
                }}
              />
              <Bar dataKey={yKey} minPointSize={2} barSize={32}>
                {data.map((d:any, idx :any) => {
                  return <Cell key={d[xKey]} fill={getColor(idx)} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      
}

export default HorizontalBarChart