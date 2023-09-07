import { useContext } from "react";
import useFuckingContext from "../../../../hooks/useContext";

function TestFunction (){

    const showText = useFuckingContext()
    return(
        <div>
            <h1>WOWZA FUNCTION</h1>
            <p>{`=====> ${showText}`}</p>
        </div>
    )
}

export default TestFunction;