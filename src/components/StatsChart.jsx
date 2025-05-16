import React from "react";
import CountUp from "react-countup";

const statsData = [
  { name: "Doctors", value: 1199 },
  { name: "Reviews", value: 4167 },
  { name: "Patients", value: 11900 },
  { name: "Stuffs", value: 3100 },
];

const StatsChart = ({ showChart = true }) => {
  if (!showChart || statsData.length === 0) return null;

  return (
    <div className="bg-gray-100 py-10 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        We Provide Best Medical Services
      </h2>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {statsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
          >
            {/* Replace these emoji/icons with actual <img src="..." /> or icons if needed */}
            <div className="text-3xl mb-2">📊</div>
            <h3 className="text-2xl font-bold text-blue-600">
              <CountUp end={item.value} duration={2} />+
            </h3>
            <p className="text-gray-700 mt-1">{`Total ${item.name}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsChart;
