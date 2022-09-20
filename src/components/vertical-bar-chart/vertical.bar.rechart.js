import React from "react";
import {BarChart, Bar, XAxis, Cell, ResponsiveContainer} from "recharts";
const data = [
    {
      "Color": "green",
      "Year": "2018",
      "RespondentPercentage": 57,
    },
    {
      "Color": "green",
      "Year": "2020",
      "RespondentPercentage": 60,
    },
    {
      "Color": "yellow",
      "Year": "2022",
      "RespondentPercentage": 67,
    },
];

const CustomizedLabel = (props) => {
  const {x, y, width, value} = props;
  return <text
    x={x + width / 2}
    y={y}
    dy={-4}
    fontSize='18'
    fontFamily='sans-serif'
    fontWeight='bold'
    fill='#363737'
    textAnchor="middle">{value}%</text>
}

const  VerticalBarRechart = () => {
  return (
    <ResponsiveContainer width='100%' aspect={1} >
      <BarChart
        data={data}
        margin={{top: 0, right: 0, left: 0, bottom: 0}}>
        <XAxis
          dataKey='Year'
          fontFamily='sans-serif'
          fontWeight='bold'
        />
        <Bar
          isAnimationActive={true}
          dataKey='RespondentPercentage'
          barSize={100}
          fontFamily='sans-serif'
          label={<CustomizedLabel />}
          >
          {
            data.map((entry, index) => (
              <Cell fill={data[index].Color === "yellow" ? '#FFBB1B' : '#1D8019'} />
            ))
          }
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default VerticalBarRechart;