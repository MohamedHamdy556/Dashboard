import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function Chart({dataKey,data,title,grid}) {
    
    return (
        <div className='chart'>
          <h3 className="chartsTitle">{title}</h3>
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
      
        </div>
    )
}

export default Chart
