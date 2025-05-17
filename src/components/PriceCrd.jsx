import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

// Triangle shape for bars
const getTrianglePath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  },${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
    y + height
  } ${x + width},${y + height}
          Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
  return (
    <path d={getTrianglePath(x, y, width, height)} stroke="none" fill={fill} />
  );
};

const colors = [
  "#0088FE",
  "#FFBB28",
  "#00C49F",
  "#FF8042",
  "#FF6633",
  "#FF66B2",
];

const Chart = ({ doctors }) => {
  if (!doctors || doctors.length === 0) return null;

  const chartData = doctors.map((doctor, index) => ({
    name: doctor.name,
    fee: doctor.consultation_fee,
    color: colors[index % colors.length],
  }));

  return (
    <div className="w-full mt-10 border border-gray-200 rounded-lg shadow-sm md:py-6 md:px-4">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fee" shape={<TriangleBar />} fill="#8884d8">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList dataKey="fee" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
