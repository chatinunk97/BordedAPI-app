import { useContext } from "react";
import { Context } from "../../../../context/Context";
import useFuckingContext from "../../../../hooks/useContext";

function TestFunction2() {
  const showText = useFuckingContext();
  return (
    <div>
      <h1>Function 2 without Provider above</h1>
      <p>{`=====> ${showText}`}</p>
      <p>{`============>${useContext(Context)}`}</p>
    </div>
  );
}

export default TestFunction2;
