import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data for the charts
const revenueOverTimeData = [
  { date: '2023-01', netSales: 3200, liveBuy: 2800, netOrders: 2400 },
  { date: '2023-02', netSales: 4100, liveBuy: 3200, netOrders: 2800 },
  { date: '2023-03', netSales: 3800, liveBuy: 3800, netOrders: 3200 },
  { date: '2023-04', netSales: 4500, liveBuy: 4200, netOrders: 3800 },
  { date: '2023-05', netSales: 3900, liveBuy: 3600, netOrders: 3400 },
  { date: '2023-06', netSales: 4800, liveBuy: 4400, netOrders: 4000 },
  { date: '2023-07', netSales: 4200, liveBuy: 4000, netOrders: 3600 },
  { date: '2023-08', netSales: 5100, liveBuy: 4800, netOrders: 4200 },
  { date: '2023-09', netSales: 4600, liveBuy: 4200, netOrders: 3800 },
  { date: '2023-10', netSales: 5300, liveBuy: 5000, netOrders: 4400 },
  { date: '2023-11', netSales: 4900, liveBuy: 4600, netOrders: 4000 },
  { date: '2023-12', netSales: 5600, liveBuy: 5200, netOrders: 4800 }
];

const topRegionsData = [
  { state: 'California', revenue: 240 },
  { state: 'Texas', revenue: 180 },
  { state: 'Florida', revenue: 160 },
  { state: 'New York', revenue: 140 },
  { state: 'Illinois', revenue: 120 },
  { state: 'Pennsylvania', revenue: 100 },
  { state: 'Ohio', revenue: 90 },
  { state: 'Georgia', revenue: 80 },
  { state: 'North Carolina', revenue: 70 },
  { state: 'Michigan', revenue: 60 }
];

const bottomRegionsData = [
  { state: 'Wyoming', revenue: 15 },
  { state: 'Vermont', revenue: 18 },
  { state: 'Alaska', revenue: 22 },
  { state: 'North Dakota', revenue: 25 },
  { state: 'South Dakota', revenue: 28 },
  { state: 'Delaware', revenue: 32 },
  { state: 'Montana', revenue: 35 },
  { state: 'Rhode Island', revenue: 38 },
  { state: 'Hawaii', revenue: 42 },
  { state: 'New Hampshire', revenue: 45 }
];

const salesTargetData = [
  { name: 'Net Sales', current: 180, target: 250 },
  { name: 'Net Sales Goal', current: 220, target: 250 }
];

const upsellCrossSellData = [
  { name: 'Upsells', value: 60.7, color: '#8b5cf6' },
  { name: 'Cross-Sells', value: 39.3, color: '#22c55e' }
];

const mrrData = [
  { category: 'New MRR', value: 35, color: '#8b5cf6' },
  { category: 'Expansion MRR', value: 55, color: '#22c55e' },
  { category: 'Churned MRR', value: 10, color: '#ef4444' }
];

const customerValueData = [
  { metric: 'Jan', acquisitionCost: 45, lifetimeValue: 120 },
  { metric: 'Feb', acquisitionCost: 38, lifetimeValue: 140 },
  { metric: 'Mar', acquisitionCost: 42, lifetimeValue: 135 },
  { metric: 'Apr', acquisitionCost: 35, lifetimeValue: 160 },
  { metric: 'May', acquisitionCost: 40, lifetimeValue: 145 },
  { metric: 'Jun', acquisitionCost: 32, lifetimeValue: 175 }
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-600">
        <p className="text-gray-300 mb-2">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {`${entry.dataKey}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Chart Components
const RevenueOverTime = () => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <h3 className="text-white text-lg font-semibold mb-4">Total Revenue Over Time</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={revenueOverTimeData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="date" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="netSales" stroke="#8b5cf6" strokeWidth={2} name="Net Sales" />
        <Line type="monotone" dataKey="liveBuy" stroke="#22c55e" strokeWidth={2} name="Live Buy" />
        <Line type="monotone" dataKey="netOrders" stroke="#f59e0b" strokeWidth={2} name="Net Orders" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

const TopRegions = () => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <h3 className="text-white text-lg font-semibold mb-4">Revenue by TOP 10 Regions</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={topRegionsData} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis type="number" stroke="#9ca3af" />
        <YAxis dataKey="state" type="category" stroke="#9ca3af" width={80} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="revenue" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const BottomRegions = () => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <h3 className="text-white text-lg font-semibold mb-4">Revenue by BOTTOM 10 Regions</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={bottomRegionsData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="state" stroke="#9ca3af" angle={-45} textAnchor="end" height={100} />
        <YAxis stroke="#9ca3af" />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="revenue" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const SalesVsTarget = () => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <h3 className="text-white text-lg font-semibold mb-4">Sales vs. Target Revenue Comparison</h3>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={salesTargetData} layout="horizontal">
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis type="number" stroke="#9ca3af" />
        <YAxis dataKey="name" type="category" stroke="#9ca3af" width={120} />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="current" fill="#8b5cf6" name="Current" />
        <Bar dataKey="target" fill="#374151" name="Target" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const UpsellCrossSell = () => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <h3 className="text-white text-lg font-semibold mb-4">Number of Upsells/Cross-Sells</h3>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={upsellCrossSellData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={5}
          dataKey="value"
        >
          {upsellCrossSellData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => [`${value}%`, 'Percentage']}
          contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const MRRBreakdown = () => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <h3 className="text-white text-lg font-semibold mb-4">MRR Breakdown</h3>
    <div className="space-y-4">
      {mrrData.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div 
              className="w-4 h-4 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-gray-300">{item.category}</span>
          </div>
          <span className="text-white font-semibold">{item.value}%</span>
        </div>
      ))}
      <div className="mt-4">
        <div className="flex h-6 rounded-lg overflow-hidden">
          {mrrData.map((item, index) => (
            <div
              key={index}
              className="h-full"
              style={{ 
                backgroundColor: item.color,
                width: `${item.value}%`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CustomerValueVsAcquisition = () => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <h3 className="text-white text-lg font-semibold mb-4">Customer Lifetime Value vs. Customer Acquisition Cost</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={customerValueData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="metric" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="acquisitionCost" fill="#8b5cf6" name="Customer Acquisition Cost" />
        <Bar dataKey="lifetimeValue" fill="#22c55e" name="Customer Lifetime Value" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export {RevenueOverTime, TopRegions, BottomRegions, SalesVsTarget, UpsellCrossSell, MRRBreakdown, CustomerValueVsAcquisition}