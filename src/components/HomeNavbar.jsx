import React, { useState } from "react";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function HomeNavbar() {
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  return (
    <div>
      <div className=" mt-5 sm:mt-0  flex justify-between items-center w-full">
        <img
          src="./Pinterest-logo.png"
          className="h-10 sm:h-20 ml-3"
          alt="Pinterest-logo"
        />

        <div className="flex justify-around w-[50%] md:w-3/12">
          <button
            onClick={() => setLoginModal(true)}
            className="text-sm bg-[#e60023] text-white font-normal md:font-semibold
             rounded-2xl py-1 px-2 sm:py-2 sm:px-4 hover:bg-[#ad081b]"
          >
            Log in{" "}
          </button>
          <button
            onClick={() => setSignUpModal(true)}
            className="text-sm bg-[#e1e1e1] font-normal md:font-semibold rounded-2xl 
             py-1 px-2 sm:py-2 sm:px-4 hover:bg-[#efefef]"
          >
            Sign Up
          </button>
        </div>
      </div>
      {loginModal && <LoginModal closeModal={setLoginModal} />}
      {signUpModal && <SignupModal closeModal={setSignUpModal} />}
    </div>
  );
}

export default HomeNavbar;
