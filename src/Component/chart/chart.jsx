import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartMain, ChartsTitle } from './chartStyle';



function Chart({dataKey,data,title,grid}) {
    
    return (
        <ChartMain>
          <ChartsTitle>{title}</ChartsTitle>
          <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
         
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid &&<CartesianGrid strokeDasharray="3 3"  />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" activeDot={{ r: 8 }} />
       
        </LineChart>
        
      </ResponsiveContainer>
      
        </ChartMain>
    )
}

export default Chart
