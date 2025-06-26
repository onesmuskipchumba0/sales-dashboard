import React from 'react'

export default function Dashboard() {
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
      <aside className="menu bg-base-200 w-72 p-4 rounded-r-xl shadow">
        <ul>
          <li className="menu-title">Dashboard</li>
          {links.map((e, i) => (
            <li key={i}>
              <a className="hover:bg-primary hover:text-primary-content">{e.name}</a>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-8 bg-base-100">
        {/* Main dashboard content goes here */}
      </main>
    </div>
  )
}
