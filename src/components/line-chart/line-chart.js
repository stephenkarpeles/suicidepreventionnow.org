import React from "react";

import { ResponsiveLine } from '@nivo/line'

const data = [
  {
    "id": "help",
    "color": "hsl(193, 100%, 45%)",
    "data": [
      {
        "x": "2018",
        "y": 75
      },
      {
        "x": "2020",
        "y": 74.5
      },
      {
        "x": "2022",
        "y": 76
      }
    ]
  },
  {
    "id": "talkingClinician",
    "color": "hsl(203, 80%, 44%)",
    "data": [
      {
        "x": "2018",
        "y": 65
      },
      {
        "x": "2020",
        "y": 66
      },
      {
        "x": "2022",
        "y": 71
      }
    ]
  },
  {
    "id": "talkingFriend",
    "color": "hsl(202, 69%, 14%)",
    "data": [
      {
        "x": "2018",
        "y": 59
      },
      {
        "x": "2020",
        "y": 60
      },
      {
        "x": "2022",
        "y": 65
      }
    ]
  },
  {
    "id": "discussing",
    "color": "hsl(203, 24%, 52%)",
    "data": [
      {
        "x": "2018",
        "y": 58
      },
      {
        "x": "2020",
        "y": 59
      },
      {
        "x": "2022",
        "y": 62
      }
    ]
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
const LineChart = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        colors={{ datum: 'color' }}        
    />
)

export default LineChart