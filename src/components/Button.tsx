import React, { useState } from "react";

interface MyProps {
  text: string | number | boolean;
  onClick?: () => void;
  something?: Boolean;
}
interface Book{
    name:string,
    price:number,
}

const MyButton: React.FC<MyProps> = (props) => {
//   const { text, onClick } = props;

//   const [value, setValue] = useState<number>(1); 
     const [value,setValue]=useState<Book>({
        name:"Doglapan",
        price:450,
     });

  return (
    <>
      <div>
        <h2>Name : {value.name} (Rs){value.price} </h2>
        <button onClick={() => setValue({name:"New Name",price:800})}>Click Me</button>
      </div>
    </>
  );
};

export default MyButton;
