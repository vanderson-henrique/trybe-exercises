import { useEffect, useContext } from 'react';
import NumberContext from './NumberContext';
import Message from './Message';
import './App.css';       

function RenderNumber() {
  const { number, alterNumber } = useContext(NumberContext);

  useEffect(() => {
    const timer = setInterval(
      alterNumber,
      6000,
     );

     return () => {
       clearInterval(timer);
     }

  },);

  return (
   <div>
     <h1>App de número aleatório</h1>
     <span>{number}</span>
     <Message />
   </div>
  );
}

export default RenderNumber;