import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalRectSeries,
} from '../../vendor/react-vis/src';

const myData1 = [
  {
    x0: new Date(2015, 0, 1).valueOf(),
    x: new Date(2015, 1, 1).valueOf(),
    y: 16,
  },
  {
    x0: new Date(2015, 2, 1).valueOf(),
    x: new Date(2015, 3, 1).valueOf(),
    y: 16,
  },
];

const myData2 = [
  {
    x0: new Date(2015, 0, 1).valueOf(),
    x: new Date(2015, 1, 1).valueOf(),
    y: 16,
  },
];

const App = () => (
  <div style={{ display: 'flex' }}>
    <XYPlot
      width={600}
      height={500}
      stackBy="y"
      xType="time"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalRectSeries data={myData1} />
      <VerticalRectSeries data={myData1} />
    </XYPlot>

    <XYPlot
      width={600}
      height={500}
      stackBy="y"
      xType="time"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalRectSeries data={myData2} />
      <VerticalRectSeries data={myData2} />
    </XYPlot>
  </div>


);

export default App;
