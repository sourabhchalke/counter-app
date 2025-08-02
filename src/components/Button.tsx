import React, { useState } from "react";

import { useCounter } from "../provider/Counter";

interface MyProps {
  text: string | number | boolean;
  onClick?: () => void;
  something?: Boolean;
}
// interface Book{
//     name:string,
//     price:number,
// }

const MyButton: React.FC<MyProps> = (props) => {
//   const { text, onClick } = props;

//   const [value, setValue] = useState<number>(1); 
    //  const [value,setValue]=useState<Book>({
    //     name:"Doglapan",
    //     price:450,
    //  });

    const context =useCounter();

  return (
    <>
      <div>
        <h1>{context?.value}</h1>
        <button onClick={(e)=>context?.setCount(context?.value+1)}>Click Me</button>
      </div>

        {/* <div>
          <h1 onClick={(e)=>context?.setCount(context?.value+1)}></h1>
        </div> */}

    </>
  );
};

export default MyButton;
