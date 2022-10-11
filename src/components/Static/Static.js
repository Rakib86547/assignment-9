// import React from 'react';
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ReferenceLine,
//     ResponsiveContainer,
//   } from 'recharts';

// const Static = ({ data }) => {
//     console.log(data)
//     // const { name, total } = data;
//     return (
//         <div>
//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart width={500} height={300} data={data}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey={data.name} padding={{ left: 30, right: 30 }} />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey={data.total} stroke="#8884d8" activeDot={{ r: 8 }} />
//                     <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };

// export default Static;