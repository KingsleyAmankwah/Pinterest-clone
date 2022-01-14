import React, { useState } from "react";
import {
  BellIcon,
  ChatIcon,
  SearchIcon,
  ArrowDownIcon,
} from "@heroicons/react/solid";
import { Avatar } from "@mui/material";
import Widgets from "./Widgets";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

/*Props was passed because onSearchSubmit is already decleard as a function,
  Hence, in order to use it we have to pass in props as an argument in Header

  props: {
  onSubmit: onSearchSubmit();
}
*/

function Header(props) {
  const [Input, setInput] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const user = useSelector(selectUser);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(Input);
  };
  return (
    <div className=" w-full z-50 bg-white">
      <div className="px-3 py-4 flex items-center">
        {/* Logo Wrapper */}
        <div className="flex items-center mr-2">
          <div className=" text-[#e60023]  w-9 h-9 cursor-pointer">
            <img src="./pcl.png" alt="" />
          </div>

          <div className="hidden md:flex justify-center  items-center h-[48px]  min-w-[123px] bg-[rgba(17,17,17)] text-white rounded-3xl font-[700]">
            {" "}
            <a href="">Home</a>
          </div>
          <div className=" hidden lg:flex justify-center items-center h-[48px] min-w-[123px] bg-white text-black hover:bg-[#e1e1e1] rounded-3xl font-[700]">
            <a href="">Following</a>
          </div>
        </div>

        {/* SearchArea Wrapper */}
        <div className="flex flex-1 items-center bg-[#efefef] w-full h-[38px] sm:h-[48px] rounded-3xl pl-4 md:mr-2">
          <div className="mr-3">
            <SearchIcon className="h-5 cursor-pointer text-[#0000004d]" />
          </div>
          <form action="" method="post" className="flex flex-1 ">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
            <button
              type="submit"
              onClick={onSearchSubmit}
              style={{ display: "none" }}
            >
              Search
            </button>
          </form>
        </div>

        {/* Icons Wrapper */}

        <div className="flex ml-auto">
          <div>
            <BellIcon className="hoverAnimation hidden md:inline" />
          </div>

          <div>
            <ChatIcon className=" hoverAnimation hidden md:inline" />
          </div>

          <div>
            <Avatar className="hoverAnimation uppercase" src={user.photoURL}>
              {user.email[0]}{" "}
            </Avatar>
          </div>

          <div>
            <ArrowDownIcon
              className="hoverAnimation"
              onClick={() => setOpenModal(!openModal)}
            />
          </div>
        </div>
      </div>

      {openModal && <Widgets closeModal={setOpenModal} />}
    </div>
  );
}

export default Header;
