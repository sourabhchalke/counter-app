import React from "react";

interface MyProps{
    text:string | number | boolean,
    onClick?:()=>void,
    something?:Boolean,
}

const MyButton:React.FC<MyProps>=(props)=>{
    return <>
        <button onClick={props.onClick}>
            {props.text}
       </button>
    </>
}

export default MyButton;