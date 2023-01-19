import React from "react";

function HomeDashboard() {
  return (
    <div className="relative z-10">
      <div className="mt-20 flex flex-col items-center">
        <h1 className="text-center text-4xl md:text-6xl pb-3 font-semibold">
          Get your next
        </h1>
        <h3 className="md:text-5xl text-center text-[#c28b00] text-3xl">
          weeknight dinner idea
        </h3>
      </div>

      <div>
        <div className="flex flex-col items-center overflow-hidden">
          <div className="grid grid-cols-7 gap-[252px]">
            <div className="column flex flex-col items-center w-full mt-0">
              <div className="item">
                <img src="./c1r1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c1r2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c1r3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c1r4.jpg" alt="" />
              </div>
            </div>

            <div className="column flex flex-col items-center w-full mt-[160px]">
              <div className="item">
                <img src="./c2r1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c2r2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c2r3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c2r4.jpg" alt="" />
              </div>
            </div>

            <div className="column flex flex-col items-center w-full mt-[320px]">
              <div className="item">
                <img src="./c3r1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c3r2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c3r3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c3r4.jpg" alt="" />
              </div>
            </div>

            <div className="column flex flex-col items-center w-full mt-[480px]">
              <div className="item">
                <img src="./c4r1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c4r2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c4r3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c4r4.jpg" alt="" />
              </div>
            </div>

            <div className="column flex flex-col items-center w-full mt-[320px]">
              <div className="item">
                <img src="./c5r1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c5r2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c5r3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c5r4.jpg" alt="" />
              </div>
            </div>

            <div className="column flex flex-col items-center w-full mt-[160px]">
              <div className="item">
                <img src="./c6r1.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c6r2.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c6r3.jpg" alt="" />
              </div>
              <div className="item">
                <img src="./c6r4.jpg" alt="" />
              </div>
            </div>

            <div className="column flex flex-col items-center w-full mt-0">
              <div className="item">
                <img src="./c6r4.jpg" alt="" />
              </div>

              <div className="item">
                <img src="./c5r4.jpg" alt="" />
              </div>

              <div className="item">
                <img src="./c4r4.jpg" alt="" />
              </div>

              <div className="item">
                <img src="./c7r4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
