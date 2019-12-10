import React from "react";

export const NumberButton = btn => {
  return (
    <button className="number_button">
      {btn.button.value}
    </button>
  );
};
