import React, {useState} from "react";
import {numbers} from '../../../data'
import NumberButton from "../NumberButtons/NumberButton"

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberButton, setNumberButton]= useState(numbers);



  return (
    <div>
      <div>
        {numberButton.map((number,index)=> (
          <NumberButton key={index} button={number} />
        ))}
      </div>
    </div>
  );
};

 export default Numbers