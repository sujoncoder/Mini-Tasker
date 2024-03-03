import React from "react";

const NoTaskFound = () => {
  return (
    <div className="bg-gray-500 p-6 rounded shadow space-y-2">
      <h1 className="text-center text-2xl font-semibold text-red-400">
        No Task Found
      </h1>
      <h1 className="text-center text-2xl font-medium text-blue-400">
        Add one task
      </h1>
    </div>
  );
};

export default NoTaskFound;
