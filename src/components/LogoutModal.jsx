import React from "react";

function LogoutModal() {
  return (
    <div className="fixed inset-0 z-20">
      <div className="absolute inset-0 bg-black opacity-80 w-full h-full"></div>
      <div
        className="relative bg-white top-[10%] left-[50%] -translate-x-2/4
       w-full h-auto sm:w-[90%] lg:w-8/12 xl:w-8/12"
      >
        <button>X</button>
      </div>
    </div>
  );
}

export default LogoutModal;
