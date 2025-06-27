"use client";
import React, { ReactHTMLElement, useRef, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts'
function SalesInventoryChart() {
    const data = [
        { name: 'Jan', sales: 4000, inventory: 2400 },
        { name: 'Feb', sales: 3000, inventory: 1398 },
        { name: 'Mar', sales: 2000, inventory: 9800 },
        { name: 'Apr', sales: 2780, inventory: 3908 },
        { name: 'May', sales: 1890, inventory: 4800 },
        { name: 'Jun', sales: 2390, inventory: 3800 },
        { name: 'Jul', sales: 3490, inventory: 4300 },
    ]

    const detailsRef = useRef<HTMLDetailsElement>(null);
    const [selectedChart, setSelectedChart] = useState("Bar Chart");
     const handleDropdownClick = (chartType: string) => {
      setSelectedChart(chartType);
      if(detailsRef.current){
        detailsRef.current.open = false;
      }
     }

  const lineChart = () => (
            <LineChart data={data}>
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="inventory" stroke="#82ca9d" />
            </LineChart>
      );


  const barChart = () => (
    <BarChart data={data}>
      <CartesianGrid stroke='#ccc' strokeDasharray="5 5"/>
      <XAxis dataKey={"name"}/>
      <YAxis stroke='#333' />
      <Tooltip />
      <Legend />
      <Bar type='monotone' dataKey={"sales"} fill='#1976d2'/>
      <Bar type='monotone' dataKey={"inventory"} fill='#43a047' />
    </BarChart>
  )

  return (
    <div className='card shadow-lg bg-base-100 p-5 mt-10'>
      <h2 className='text-center py-1 text-xl'>Analytics for Sales and inventory</h2>
      <div>
        <details className='dropdown' ref={detailsRef}>
          <summary className='btn mb-1'>{selectedChart}</summary>
          <ul className='menu dropdown-content bg-base-100 rounded-xl z-1 shadow-md space-y-4'>
            <li><a onClick={() => handleDropdownClick("Bar Chart")}>Bar Chart</a></li>
            <li><a onClick={() => handleDropdownClick("LIne Chart")}>Line chart</a></li>
          </ul>
        </details>
      </div>
        <ResponsiveContainer width={'100%'} height={400}>
          { selectedChart === "Bar Chart" ? barChart() : lineChart()}
        </ResponsiveContainer>
    </div>
  )
}

export default SalesInventoryChart
