
import { useState } from "react";


function Input()
{
    const [value, setValue] = useState("");
    function onInputChange(e) {
        setValue(e.target.value);
    }

    return (
        <div
            style={{ textAlign: "center", margin: "auto" }}
        >
            <h1 style={{ color: "Green" }}>
                useState in React..!
            </h1>
        
            <input value={value} onChange={onInputChange} />
            <br />
            <h2>User Input:- {value}</h2>
            <button onClick={onInputChange}>Reset</button>
        </div>
    );
}
 
export default Input;
