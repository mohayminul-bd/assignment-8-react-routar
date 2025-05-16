import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Triangle-shaped bar path
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  },${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  },${y + height}
    Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Custom colors for bars
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

// Sample data
// const data = [
//   { name: "Page A", uv: 4000 },
//   { name: "Page B", uv: 3000 },
//   { name: "Page C", uv: 2000 },
//   { name: "Page D", uv: 2780 },
//   { name: "Page E", uv: 1890 },
//   { name: "Page F", uv: 2390 },
//   { name: "Page G", uv: 3490 },
// ];

const PriceCharts = ({ displayDoctor }) => {
  if (!displayDoctor || displayDoctor.length === 0) {
    return null;
  }

  const chartData = displayDoctor.map((item, index) => ({
    name: item.name,
    fee: parseInt(item.consultation_fee.slice(1)),
    color: colors[index % colors.length],
  }));

  return (
    <div className="w-full h-[400px] mt-8 p-4 border border-gray-200 rounded-xl shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="fee"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceCharts;
