import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalRectSeries,
} from '../../vendor/react-vis/src';

const myData = [
  {
    x0: new Date(2015, 0, 1).valueOf(),
    x: new Date(2015, 1, 1).valueOf(),
    y: 16,
  },
  {
    x0: new Date(2014, 0, 1).valueOf(),
    x: new Date(2014, 1, 1).valueOf(),
    y: 16,
  }
]

const App = () => (
  <XYPlot
    width={300}
    height={300}
    xType="time"
    stackBy="y"
  >
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <VerticalRectSeries data={myData} />
    <VerticalRectSeries data={myData} />
  </XYPlot>
);

export default App;
