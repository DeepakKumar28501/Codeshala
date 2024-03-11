import React from "react";

function Jobs({ result }) {
  return (
    <>
      <div>
        <h3 className="text-primary text-xl font-bold mb-2">
          {result.length} Jobs
        </h3>
      </div>
      <section>{result}</section>
    </>
  );
}

export default Jobs;
