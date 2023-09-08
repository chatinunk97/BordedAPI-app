import { useContext } from "react";
import useFuckingContext from "../../../../hooks/useContext";

function TestFunction (){

    const {testValue} = useFuckingContext()
    return(
        <div>
            <h1>WOWZA FUNCTION</h1>
            <p>{`=====> ${testValue}`}</p>
        </div>
    )
}

export default TestFunction;