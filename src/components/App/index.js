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
    x0: new Date(2014, 0, 1).valueOf(),
    x: new Date(2014, 1, 1).valueOf(),
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
      width={300}
      height={300}
      xType="time"
      stackBy="y"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <VerticalRectSeries data={myData1} />
      <VerticalRectSeries data={myData1} />
    </XYPlot>

    <XYPlot
      width={300}
      height={300}
      xType="time"
      stackBy="y"
      xDomain={[2014, 2020]}
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
