import React from "react";
import { useState } from "react";

const CheckBoxExampleTry=()=>{
    const element1 = "boy";
const element2 = "girl";
let [value,setValue]=useState([{
   
}])
const handleChange = (e) => {
    // to find out if it's checked or not; returns true or false
    const checked = e.target.checked;
    
    // to get the checked value
    const checkedValue = e.target.value;
    
    // to get the checked name
    const checkedName = e.target.name;
    
    //then you can do with the value all you want to do with it.
    if(e.target.checked){
        setValue([{
      
            aaa:checked,
            bbb:checkedValue,
            ccc:checkedName
        }])
    }
   
    };
    return(
        <>
        <section className="m-5">
            <div className="container">
            <input
 type="checkbox"
 name="xxxxx"
 value={element1}
 onChange={handleChange}
/>
<label for="element" style={{ fontSize: 35 }}>
xxxxx
 </label>

<input
 type="checkbox"
 name="yyyyyyy"
 value={element2}
 onChange={handleChange}
/>
<label for="element" style={{ fontSize: 35 }}>
yyyyyyy </label>
            </div>
        </section>
        {JSON.stringify(value)}
        </>
    )
}

export default CheckBoxExampleTry;