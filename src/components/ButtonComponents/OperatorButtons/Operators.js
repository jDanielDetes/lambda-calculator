import React, {useState} from "react";
import {operators} from "../../../data"
import OperatorButton  from "../OperatorButtons/OperatorButton"


//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const  [Osymbol] = useState(operators)
  return (
    <div>
     {Osymbol.map((symbols, index) => {
        return <OperatorButton key={index} value={symbols.char} />
      })}
    </div>
  );
};
export default Operators