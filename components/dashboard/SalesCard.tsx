"use client";
import React from 'react'
interface salesInterface{
    title: string,
    current: number,
    increase: number,
    prev: number
}
function SalesCard({title, current, increase, prev}: salesInterface) {
  return (
          <div className='h-[14rem] md:h-[14rem] lg:h-[16rem] items-center justify-center card card-body shadow-md py-5 bg-base-300 hover:scale-105 transition-all ease-in'>
            <label className='card-title'>{title}</label>
            <label className='text-3xl font-bold'>{title === 'Sales growth rate' ? null : "$"}{title === 'Sales growth rate' ? (current).toFixed(2):(current/1000).toFixed(2)} {title === 'Sales growth rate' ? "%" : "k"}</label>
            <div className='flex h-16'>
              <div className='flex flex-col'>
                <label className={`${increase > 0 ? "text-green-400" : "text-red-600"}`}>{increase.toFixed(2)}%</label>
                <label>Versus</label>
              </div>

              <div className='divider-horizontal divider'></div>

              <div className='flex flex-col'>
                <label className='text-base'>$ {title === 'Sales growth rate' ? (prev).toFixed(2) : (prev /1000).toFixed(2) } {title === 'Sales growth rate' ? "%" : "k"}</label>
                <label>Previous year</label>
              </div>
            </div>

          </div>
  )
}

export default SalesCard
