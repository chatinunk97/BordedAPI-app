import { createContext } from "react";

const Context = createContext("DEFAULT from Context.js");

function FuckingContextProvider (props){


    return (
        <Context.Provider value={"value from return function"}>{props.children}</Context.Provider>
    )

}
export default FuckingContextProvider;

export { Context };
