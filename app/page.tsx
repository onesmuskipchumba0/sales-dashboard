import SalesInventoryChart from "@/components/analytics/SalesInventoryChart";

export default function Home() {
  return (
    <div className="pt-5 pb-5 w-full mb-12">
    <div className="relative flex items-center justify-center w-full text-center font-bold text-green-400 text-3xl">
        <span>Sales Management software</span>
        <span className="absolute left-1/2 translate-x-[-50%] -bottom-5 w-1/4 h-1 bg-green-400 rounded-sm"></span>
    </div>

    {/* Quick Actions */}
    <div className="mt-12 p-5 flex flex-row">
      <div className="card space-y-4">
        <button className="btn btn-primary">View sales</button>
        <button className="btn btn-primary">View sales</button> 
      </div>
      {/* graph */}
      <div className="w-1/2 ml-auto mr-5">
        <SalesInventoryChart />
      </div>
    </div>
    </div>
  );
}
