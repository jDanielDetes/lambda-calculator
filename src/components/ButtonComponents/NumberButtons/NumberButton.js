import React from "react";

 const NumberButton = btn => {
  return (
    <button className="number_button">
      {btn.button.value}
    </button>
  );
};
export default NumberButton