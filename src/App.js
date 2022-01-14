import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import auth from "./components/firebase";
import HomePage from "./components/HomePage";
import Mainboard from "./components/Mainboard";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) {
        //Login
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        //Logout
        dispatch(logout());
      }

      return unsub;
    });
  }, [dispatch]);
  return <div className="App">{!user ? <HomePage /> : <Mainboard />}</div>;
}

export default App;
