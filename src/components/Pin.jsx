import react, { useState } from "react";

function Pin({ pin, urls }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="inline-flex p-2">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex cursor-pointer w-[236px] items-center box-border"
      >
        <img
          src={urls?.regular}
          className="flex w-full h-full rounded-2xl cursor-zoom-in object-cover "
          alt="pin"
          srcSet=""
        />

        {hovered && (
          <div className="absolute flex flex-col bg-black opacity-60 w-full h-full rounded-2xl cursor-zoom-in pr-2"></div>
        )}
      </div>
    </div>
  );
}

export default Pin;
