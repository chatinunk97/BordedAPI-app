import React, { useEffect} from "react";
import "./App.scss";
import Header from "./components/common/Header/Header";
import useFuckingContext from "../hooks/useContext";

const App = () => {
  const { active, setActive, handleClick, activity, fetchData } =
    useFuckingContext();

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (active) {
        fetchData();
        setActive((prev) => !prev);
      }
    }, 500);
    return ()=>{
      clearTimeout(timeoutId)
    }
  }, [active,setActive,fetchData]);

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
