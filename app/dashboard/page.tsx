"use client";
import React, { useState } from 'react'
import { FaEdit, FaShare } from 'react-icons/fa';
import { FaArrowDown, FaBurger } from 'react-icons/fa6';
import { Sales } from '@/bin/data/SalesData';

export default function Dashboard() {
  const [activeBoard, setActiveBoard] = useState("Executive sales Dashboard");
  /* Sales calculations */
  let sales = 0;
  Sales.forEach((element, index) => sales += element.sales);

  let previousSales = 700000;
  let PercentageIncrease = ((sales - previousSales) / (previousSales + sales)) * 100 ;


  const links = [
    {name:"Executive sales Dashboard"},
    {name:"Revenue Dashboard"},
    {name:"Sales activity Dashboard"},
    {name:"Sales compenstation Dashboard"},
    {name:"Sales Rep and team performance Dashboard"},
    {name:"Sales Reporting Dashboard"},
  ]
  return (
    <div className="h-[100vh] flex">
      <aside className="menu bg-base-300 w-72 p-4 rounded-r-xl shadow">
        <ul>
          <li className="menu-title">Dashboard</li>
          {links.map((e, i) => (
            <li
            onClick={() => setActiveBoard(e.name)} 
            key={i}>
              <a className="hover:bg-primary hover:text-primary-content">{e.name}</a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-1 pl-5 bg-base-100">
        <div className='flex py-2'>
          <label className='font-bold'>{activeBoard}</label>
          <div className='ml-auto mr-5 space-x-5'>
            <a className='btn btn-primary bg-blue-500'><FaEdit/> Edit</a>
            <a className='btn border-blue-500'><FaShare/> Share</a>
            <a className='btn border-blue-500'>...</a>
          </div>
        </div>

        <div className='divider'></div>

        <div className='flex px-2'>
          <div className='dropdown dropdown-hover'>
            <label className='btn hover:bg-base-100'>Date range<FaArrowDown/></label>
            <ul className='dropdown-content'>
              <li className='link link-accent btn link-hover'><a>This year</a></li>
              <li className='link link-accent btn link-hover'><a>Last year</a></li>
            </ul>
          </div>
          <div className='ml-auto'>#overview</div>
        </div>

        <div className='divider'></div>

        <div className='flex items-center justify-between'>
          <label className='font-bold'>Overall Revenue KPIs</label>
          <div className='divider w-7/8'></div>
        </div>

        {/* Analytics cards */}

        <div className='flex'>
          <div className='card card-body shadow-md max-w-1/4 py-5 bg-base-300'>
            <label className='card-title'>Total Revenue</label>
            <label className='text-3xl font-bold'>${(sales / 1000).toFixed(2)} k</label>
            <div className='flex h-16'>
              <div className='flex flex-col'>
                <label className={`${PercentageIncrease > 0 ? "text-green-400" : "text-red-600"}`}>{PercentageIncrease.toFixed(2)}%</label>
                <label>Versus</label>
              </div>

              <div className='divider-horizontal divider'></div>

              <div className='flex flex-col'>
                <label className='text-base'>$ {(previousSales / 1000).toFixed(2)} k</label>
                <label>Previous year</label>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
