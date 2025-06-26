"use client";
import React from 'react'
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
      <CartesianGrid stroke='#eee' strokeDasharray="5 5"/>
      <XAxis dataKey={"name"}/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar type='monotone' dataKey={"sales"} stroke='#8884d8'/>
      <Bar type='monotone' dataKey={"inventory"} stroke='#82ca9d' />
    </BarChart>
  )
  return (
    <div className='card shadow-lg bg-base-100 p-5 mt-10'>
        <ResponsiveContainer width={'100%'} height={400}>
          {barChart()}
        </ResponsiveContainer>
    </div>
  )
}

export default SalesInventoryChart
