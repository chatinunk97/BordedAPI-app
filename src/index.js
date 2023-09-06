import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

const App = () => {
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
        console.log(data.activity);
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
      <div className="header">
        <p className="header__appname">暇、何をすればいい？</p>
        <p className="header__credit">Powered by https://www.boredapi.com/</p>
      </div>
      {/* Input */}
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
