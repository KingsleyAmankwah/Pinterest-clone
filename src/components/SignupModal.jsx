import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "./firebase";

import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

function SignupModal({ closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  //const auth = getAuth();
  const dispatch = useDispatch();

  const registerUser = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!name) {
      return alert("Please enter your full Name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        //Update User Profile if Username and PhotoUrl are part of the input fields
        const user = userCredentials.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          dispatch(
            login({
              uid: userCredentials.user.uid,
              email: userCredentials.user.email,
              displayName: userCredentials.user.displayName,
              photoURL: userCredentials.user.photoURL,
            })
          );
        });
      })
      .catch((error) => {
        alert(error.message);
      });

    setLoading(false);
  };

  //Login With GoogleProvider
  const googleProvider = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="fixed inset-0 z-20">
      <div className="absolute inset-0 w-full bg-black h-auto opacity-80 z-40"></div>
      <div
        className="relative top-[10%] left-[50%] -translate-x-2/4 w-full sm:w-[90%] lg:w-8/12 xl:w-8/12
       flex flex-col  justify-center  bg-white h-auto z-50 rounded-2xl"
      >
        <div className="flex justify-center items-center">
          <img
            className=" h-10 w-10 sm:w-[60px] sm:h-[60px]"
            src="./pcl.png"
            alt=""
            srcset=""
          />
        </div>
        <div className="absolute right-[10px] top-[10px] text-black font-bolder text-xl sm:text-3xl">
          <button onClick={() => closeModal(false)}>X</button>
        </div>

        <div className="text-center">
          <h1 className="font-bolder text-xl sm:text-3xl">
            Welcome to Pinterest
          </h1>

          <p className="text-sm">Find new ideas to try</p>
        </div>

        <form className="flex flex-col justify-center items-center my-4">
          <input
            className="outline-none border text-sm border-[#0000004d] mb-4 py-2 pl-2 w-8/12 lg:w-4/12 rounded-xl"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="outline-none border text-sm border-[#0000004d] mb-3 py-2 pl-2 w-8/12 lg:w-4/12 rounded-xl"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="outline-none border text-sm border-[#0000004d] mb-4 py-2 pl-2 w-8/12 lg:w-4/12 rounded-xl"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="text"
            style={{ display: "none" }}
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />

          <div className="flex justify-center w-8/12 lg:w-4/12">
            <button
              onClick={registerUser}
              disabled={
                loading || !name.trim() || !email.trim() || !password.trim()
              }
              className="bg-[#e60023] text-white rounded-xl py-2 w-full font-bold
               disabled:cursor-not-allowed  disabled:opacity-60"
            >
              Continue
            </button>
          </div>

          <div className="my-4">
            <h1 className="font-bold ">OR</h1>
          </div>

          <div className=" w-8/12 lg:w-4/12 mb-5">
            <button
              onClick={googleProvider}
              className="flex justify-center items-center bg-white border border-[#0000004d] text-black rounded-xl py-2 w-full "
            >
              <span>
                {" "}
                <img
                  src="./gogle.png"
                  className="h-5 w-5 rounded-full mr-5"
                  alt="google_logo"
                  srcset=""
                />{" "}
              </span>{" "}
              <p className="font-bold"> Continue with Google</p>
            </button>
          </div>
        </form>

        <div className="mb-3">
          <p className="text-center text-sm">
            By continuing, you agree to Pinterest's
            <br />
            <span>
              <a href="" className="font-bold">
                Terms of Service
              </a>
            </span>{" "}
            and acknowledge you've read our
            <br />
            <span>
              <a href="" className="font-bold">
                Privacy Policy
              </a>
            </span>{" "}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-4">
          <p className="text-sm">
            Already a member?{" "}
            <span>
              <a href="" className="font-bold">
                Log in
              </a>
            </span>{" "}
          </p>

          <p className="text-sm">
            Are you a Business?{" "}
            <span>
              <a href="" className="font-bold">
                Get Started Here!
              </a>
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
