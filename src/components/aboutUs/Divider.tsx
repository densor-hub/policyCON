import React from "react";

const Divider = ({ number }) => {
  return !(number % 2 === 0) ? (
    <main className="relative  z-0" style={{ bottom: "2px" }}>
      <div className="absolute h-[100px] w-[100vw]  bg-[rgb(0,0,60)] "></div>
      <div className="relative h-[100px] border-t-[rgb(0,0,60)] w-[98.72w]  border-b-[100px] border-b-white border-l-[100vw] border-l-[rgb(0,0,0,0.3)]"></div>
    </main>
  ) : (
    <main className="relative z-0" style={{ bottom: "2px" }}>
      <div className="absolute h-[100px] w-[100vw]  bg-[rgb(0,0,60)] "></div>
      <div className="relative h-[100px] w-[98.72w]  border-t-[100px] border-t-white border-r-[100vw] border-r-[rgb(0,0,0,0.3)]"></div>
    </main>
  );
};

export default Divider;
