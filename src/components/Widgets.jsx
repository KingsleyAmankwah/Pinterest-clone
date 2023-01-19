import React from "react";
import { Avatar } from "@mui/material";
import { signOut } from "firebase/auth";
import auth from "./firebase";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Widgets({ closeModal }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="fixed z-50 flex right-0 w-8/12 sm:w-6/12 md:w-4/12 lg:w-4/12 bg-white text-black h-[85%] sm:h-3/4 rounded-3xl mr-3">
      <div className="flex flex-col">
        <p className="text-sm py-5 pl-3 font-light">
          Currently in @{user.displayName.slice(0, 5).toLocaleLowerCase()}
          {user.uid.slice(0, 5).toLocaleLowerCase()}
        </p>
        <div className="flex flex-row justify-center mb-4 cursor-pointer hover:bg-white hover:rounded-lg">
          <div>
            <Avatar
              className="rounded-full h-10 md:h-20 mx-2 capitalize"
              src={user.photoURL}
            >
              {" "}
              {user.email[0]}{" "}
            </Avatar>
          </div>
          <div>
            <h1>{user.displayName}</h1>
            <p className="text-sm font-light">Personal</p>
            <p className="text-sm  font-light">{user.email}</p>
          </div>
        </div>

        <div className="mb-4 md:ml-5 ml-3">
          <p className="text-sm font-light py-3">Your accounts</p>
          <h1 className="font-bold w-full pb-2  hover:bg-white hover:rounded-lg">
            Add Account
          </h1>
          <h1 className="font-bold w-full pb-2   hover:bg-white hover:rounded-lg">
            Convert to Business
          </h1>
        </div>

        <div className="mb-5 md:ml-5 ml-3">
          <p className="text-sm font-light py-3">More options</p>
          <h1 className="font-bold w-full pb-2  hover:bg-white hover:rounded-lg">
            Settings
          </h1>
          <h1 className="font-bold w-full pb-2  hover:bg-white hover:rounded-lg">
            Install the Windows app
          </h1>
          <h1 className="font-bold w-full pb-2  hover:bg-white hover:rounded-lg">
            Get help
          </h1>
          <h1 className="font-bold w-full pb-2  hover:bg-white hover:rounded-lg">
            See terms and privacy
          </h1>
          <button
            onClick={logOut}
            className="font-bold w-full py-2  bg-[#e60023] text-white rounded-lg"
          >
            Logout
          </button>
        </div>
        <button
          style={{ display: "none" }}
          onClick={() => closeModal(false)}
          className="bg-white"
        >
          Close Me
        </button>
      </div>
    </div>
  );
}

export default Widgets;
