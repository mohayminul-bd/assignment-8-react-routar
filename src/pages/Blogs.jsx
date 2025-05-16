import React from "react";
import faqData from "../data/fkData.json";

const Blogs = () => {
  return (
    <div>
      <div className="p-4 space-y-4">
        {faqData.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-bold">{item.question}</h2>
            <p className="text-gray-700">
              <span className="text-blue-500">Answer:</span> {item.answer}
            </p>
            <small className="text-sm text-gray-400">Date: {item.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
