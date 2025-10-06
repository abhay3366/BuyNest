import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardChart = () => {
   const [chart1Data, setChart1Data] = useState([
  { name: "Jan", TotalSales: 4000, TotalUsers: 2400, amt: 2400 },
  { name: "Feb", TotalSales: 3000, TotalUsers: 1398, amt: 2210 },
  { name: "Mar", TotalSales: 3500, TotalUsers: 3200, amt: 2300 },
  { name: "Apr", TotalSales: 4200, TotalUsers: 3908, amt: 2600 },
  { name: "May", TotalSales: 4600, TotalUsers: 4100, amt: 2800 },
  { name: "Jun", TotalSales: 5000, TotalUsers: 4500, amt: 3000 },
  { name: "Jul", TotalSales: 2000, TotalUsers: 4800, amt: 3200 },
  { name: "Aug", TotalSales: 5700, TotalUsers: 5200, amt: 3400 },
  { name: "Sep", TotalSales: 6000, TotalUsers: 5500, amt: 3600 },
  { name: "Oct", TotalSales: 640, TotalUsers: 5900, amt: 3800 },
  { name: "Nov", TotalSales: 6800, TotalUsers: 6300, amt: 4000 },
  { name: "Dec", TotalSales: 7200, TotalUsers: 6700, amt: 4200 },
]);

    return (
        <>
            <div className="card my-4 shadow-md sm:rounded-lg bg-white">
                <div className="flex items-center justify-between px-5 ">
                    <h2 className='text-[18px] font-[600]'>Total User & Total Sales</h2>
                </div>

                <div className="flex items-center justify-between px-5 py-1 mb-2">
                    <span className='flex items-center gap-1 text-[15px]'>
                        <span className='block w-[8px] h-[8px] rounded-full bg-green-600'></span>Total Users &nbsp;
                        <span className='block w-[8px] h-[8px] rounded-full bg-green-600'></span> Total Sales</span>
                </div>
                <LineChart
                    width={1000}
                    height={500}
                    data={chart1Data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="none" />
                    <XAxis dataKey="name" tick={{fontSize:12}} />
                    <YAxis tick={{fontSize:12}} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="TotalUsers" strokeWidth={3} stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="TotalSales" strokeWidth={3}  stroke="#82ca9d" />
                </LineChart>
            </div>
        </>
    )
}

export default DashboardChart