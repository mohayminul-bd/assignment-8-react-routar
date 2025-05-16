// import React from 'react';

// const fake = () => {
//     return (
//         <div>
//             import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LabelList,
//   Cell,
// } from "recharts";

// const getTrianglePath = (x, y, width, height) => {
//   return `M${x},${y + height}
//           C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
//     x + width / 2
//   },${y}
//           C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
//     y + height
//   } ${x + width},${y + height}
//           Z`;
// };

// const TriangleBar = ({ fill, x, y, width, height }) => {
//   return (
//     <path d={getTrianglePath(x, y, width, height)} stroke="none" fill={fill} />
//   );
// };

// const colors = [
//   "#0088FE",
//   "#FFBB28",
//   "#00C49F",
//   "#FF8042",
//   "#FF6633",
//   "#FF66B2",
// ];

// const Chart = ({ desplayCard }) => {
//   if (!desplayCard || desplayCard.length === 0) {
//     return null;
//   }

//   const chartData = desplayCard.map((item, index) => ({
//     name: item.name,
//     fee: item.consultation_fee,
//     color: colors[index % colors.length],
//   }));

//   return (
//     <div className="w-full mt-10 border border-gray-200 rounded-lg shadow-sm md:py-6 md:px-4">
//       <ResponsiveContainer width="100%" height={500}>
//         <BarChart
//           data={chartData}
//           margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" interval={0} height={5} />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="fee" shape={<TriangleBar />} fill="#8884d8">
//             {chartData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={entry.color} />
//             ))}
//             <LabelList dataKey="fee" position="top" />
//           </Bar>
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Chart;
// Śámįúl
// import React, { useEffect, useState } from "react";
// import { getBooking, removeBooking } from "../../utils";
// import { Link } from "react-router";
// import Booking from "../Booking/Booking";
// import { Helmet } from "react-helmet";
// import Chart from "../../components/Chart/Chart";

// const Bookings = () => {
//   const [desplayCard, setDesplayCard] = useState([]);

//   useEffect(() => {
//     const savedBooking = getBooking();
//     console.log(savedBooking);
//     setDesplayCard(savedBooking || []);
//   }, []);

//   const handleRemove = (id) => {
//     removeBooking(id);
//     setDesplayCard(getBooking());
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>My Bookings - Law-BD</title>
//       </Helmet>

//       <div>
//         <Chart desplayCard={desplayCard}></Chart>
//       </div>
//       <div className="my-[32px] md:my-16 lg:my-[100px] text-center">
//         <div className="mb-4 md:mb-8">
//           <h1 className="mulish text-2xl md:text-[40px] font-extrabold mb-2 md:mb-4">
//             My Today Appointments
//           </h1>
//           <p className="mulish">
//             Our platform connects you with verified, experienced Lawyers across
//             various specialties — all at your convenience.
//           </p>
//         </div>
//         {desplayCard.length === 0 ? (
//           <div className="text-center mt-12">
//             <h2 className="text-xl font-semibold mb-4">
//               No appointments found for today!
//             </h2>
//             <Link to="/" className="inline-block">
//               <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all">
//                 Return to Homepage
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 gap-6 mb-6">
//             {desplayCard.map((singleLawyer) => (
//               <Booking
//                 key={singleLawyer.id}
//                 handleRemove={handleRemove}
//                 singleLawyer={singleLawyer}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bookings;
//         </div>
//     );
// };

// export default fake;
