import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Registry() {
    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState(false);

    const addItems = (e) => {
        if(error) return;
        e.preventDefault();
        const tempData = [...registryData];
        tempData.push(textInput);
        setRegistryData(tempData)
        setTextInput("")
    }

    useEffect(() => {
        if (textInput.length > 10) setError(true)
    }, [textInput])

const removeItems = (index) =>{

    let newData = [...registryData];
    newData.splice(index,1)
    setRegistryData(newData)

}

const editItems = (index) =>{
    if(error) return;
    let newData = [...registryData];
    newData[index] = textInput;
    setRegistryData(newData)
}
    return (
        <div>
            <h1>Registry</h1>
            <Link to="/Home">Click here to go to home</Link>
            <form onSubmit={addItems}>
                <label> text input :
                   <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                </label>
                <input type="submit" value="submit" />
            </form>
            {error ? <span style={{ color: "red" }}>Error Occured</span> : null}
            {
                registryData.map((element, index) => {
                    return (

                        <li key={index}>{element} <button onClick = {()=>{removeItems(index)}}>Remove</button><button onClick = {()=>{editItems(index)}}>Update</button></li>

                    )
                })
            }
        </div>
    )
}

export default Registry;