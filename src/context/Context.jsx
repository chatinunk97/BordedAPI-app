import { createContext } from "react";
import { useState } from "react";

const Context = createContext("DEFAULT from Context.js");

function FuckingContextProvider(props) {
  const [active, setActive] = useState(false);
  const [activity, setActivity] = useState("");

  const handleClick = () => {
    setActive((prev) => !prev);
  };
  async function fetchData() {
    const BASE_URL = "http://www.boredapi.com/api/activity/";
    const option = {
      method: "GET",
    };
    try {
      const result = await fetch(BASE_URL, option);
      const data = await result.json();
      setActivity(data.activity);
      console.log('Fetched')
    } catch (error) {
      console.log(error);
    }
  }
  const sharedObj = {
    testValue: "This is a test value from Context.jsx",
    handleClick,
    active,
    setActive,
    activity,
    setActivity,
    fetchData,
  };

  return (
    <Context.Provider value={sharedObj}>{props.children}</Context.Provider>
  );
}
export default FuckingContextProvider;

export { Context };
