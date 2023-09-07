import React, { useEffect, useState,useContext } from "react";
import "./App.scss";
import Header from "./components/common/Header/Header";
import useFuckingContext from "../hooks/useContext";


const App = () => {

  const a = useFuckingContext()
  console.log(a)
  const [activity, setActivity] = useState("");
  const [active, setActie] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const BASE_URL = "http://www.boredapi.com/api/activity/";
      const option = {
        method: "GET",
      };
      try {
        const result = await fetch(BASE_URL, option);
        const data = await result.json();
        setActivity(data.activity);
      } catch (error) {
        console.log(error);
      }
    }
    if (active) {
      fetchData();
      setActie((prev) => !prev);
    }
  }, [active]);
  const handleClick = () => {
    setActie((prev) => !prev);
  };
  return (
    <div className="app">
      <img
        src="https://i.pinimg.com/736x/92/d2/bb/92d2bb9dd7a9b3846348187eb76598eb.jpg"
        alt="kaoruko-pic"
      ></img>
      <Header value={"wow"} />
      <div className="input">
        <button className="input__button" onClick={handleClick}>
          <p>検索</p>
        </button>
      </div>
      {/* Display */}
      <div>
        <div className="activity">{activity}</div>
      </div>
    </div>
  );
};

export default App;
