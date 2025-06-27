"use client";
import React, { useState } from 'react'
import { FaEdit, FaShare } from 'react-icons/fa';
import { FaArrowDown, FaBurger } from 'react-icons/fa6';
import { Sales } from '@/bin/data/SalesData';
import SalesCard from '@/components/dashboard/SalesCard';

export default function Dashboard() {
  const [activeBoard, setActiveBoard] = useState("Executive sales Dashboard");
  /* Sales calculations */
  let sales = 0;
  Sales.forEach((element, index) => sales += element.sales);

  let previousSales = 700000;
  let salesIncrease = ((sales - previousSales) / (previousSales + sales)) * 100 ;
  let previousSalesIncrease = 54.4;
  const salesGrowthRate = ((salesIncrease-previousSalesIncrease)/(previousSalesIncrease + salesIncrease));


  //Recuring revenue
  let reccuringRev = 560000;
  let prevReccuringRev = 360000;
  let revIncrease = ((reccuringRev - prevReccuringRev) / (prevReccuringRev + reccuringRev)) * 100;

  //Customer lifetime value
  let averagePurchaseValue = 200000;
  let purchaseFrequency = 4;
  let customerLifespan = 4;
  let CLV = (averagePurchaseValue) * (purchaseFrequency) * (customerLifespan)
  let prevCLV = 2000000;
  let CLVIncrease = ((CLV-prevCLV)/(CLV+prevCLV)) * 100;



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

        <div className='flex space-x-4'>
          {/* Total sales */}
          <SalesCard title={"Total sales"} current={sales} prev={previousSales} increase={salesIncrease} />

          {/* Recurring revenue */}
          <SalesCard title='Recurring sales revenue' current={reccuringRev} prev={prevReccuringRev} increase={revIncrease}/>

          {/* Sales growth rate */}
          <SalesCard title='Sales growth rate' current={salesGrowthRate} prev={previousSalesIncrease} increase={salesGrowthRate}/>

          {/* Customer lifetime value */}
          <SalesCard title='Customer LIfetime Value' current={CLV} prev={prevCLV} increase={CLVIncrease}/>
        </div>

        
      </main>
    </div>
  )
}
