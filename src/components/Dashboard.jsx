import React from "react";
import Pin from "./Pin";

function Dashboard({ pins }) {
  return (
    <div className="flex mt-8 justify-center w-full h-full">
      <div
        className="h-full columns-1/2 gap-x-2 my-0 mx-auto sm:columns-2 sm:max-w-[640px] 
                   sm:gap-x-0  md:columns-3 md:max-w-[768px] lg:max-w-[1024px] 
                   lg:columns-4 xl:max-w-[1280px] xl:columns-5"
      >
        {pins.map((pin, index) => {
          return <Pin key={index} {...pin} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
