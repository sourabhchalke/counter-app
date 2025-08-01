import React from "react";

interface MyProps{
    text:string,
}

const MyButton:React.FC<MyProps>=(props)=>{
    return <>
        <button>
            {props.text}
       </button>
    </>
}

export default MyButton;