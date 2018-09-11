import React from 'react';
import { Line } from 'react-chartjs';

function Chart({ title, data }) {
  return (
    <div>
      <h1>{title}</h1>
      <Line
        data={data}
        width="900"
        height="300"
      />
    </div>
  );
}

export default Chart;
