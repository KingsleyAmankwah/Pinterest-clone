/* eslint-disable*/
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import unsplash from "../api/unsplash";
import Spinner from "./Spinner";
function Mainboard() {
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(false);

  //Get Photos from unsplash using the api
  const getImages = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: {
        query: { term },
      },
    });
  };

  //A function passes as a prop from header.jsx
  const onSearchSubmit = (term) => {
    //console.log("on seach submit", term);
    getImages(term).then((res) => {
      //* Get Photos results
      let results = res.data.results;
      //?Store the results in an array
      let newPins = [...results, ...pins];
      //Sort pins
      newPins.sort(function (a, b) {
        return 0.5 - Math.random();
      });

      //save pins
      setPins(newPins);
    });
  };

  //onSearchSubmit("cars");

  const getNewPins = () => {
    //create empty array variables
    let promises = [];
    let pinData = [];

    let pins = [
      "cars",
      "ocean",
      "dogs",
      "wallpapers",
      "Tokyo",
      "Bali",
      "dinner",
      "food",
      "sneakers",
    ];

    /*Loop through all the pins and push it in the promises.
        Store the pushed data in results and concat it with pinData.
        Sort the results that is concatenated with the pinData
      */
    pins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;
          pinData = pinData.concat(results);

          pinData.sort(function (a, b) {
            return 0.5 - Math.random();
          });
        })
      );
    });

    /* Wait for all the promises */
    Promise.all(promises).then(() => {
      setPins(pinData);
      setLoading(true);
    });
  };

  useEffect(() => {
    getNewPins();
  }, []);

  return (
    <div>
      <Header onSubmit={onSearchSubmit} />
      {loading ? <Dashboard pins={pins} /> : <Spinner />}
    </div>
  );
}

export default Mainboard;
