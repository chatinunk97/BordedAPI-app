import { useState } from "react";
import { Context } from "../../../../context/Context";

function Input() {
 
  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className="input">
      <button className="input__button" onClick={handleClick}>
        <p>検索</p>
      </button>
    </div>
  );
}

export default Input;
