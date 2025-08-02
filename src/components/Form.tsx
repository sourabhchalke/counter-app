
import React, { useState } from "react";

const Form=()=>{

    const [value,setValue]=useState("");

    const changeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log(e);
        setValue(e.target.value);
    }

    const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(e);
    }

    return (
        <div>
            <form  onSubmit={submitHandler} action="">
                <input onChange={changeHandler} type="text" placeholder="Enter Your Detail" />
                <button type="submit">Submit</button>
            </form>
            <h2>{value}</h2>
        </div>
    )

}

export default Form;