import React, { useContext, useEffect } from "react";
import NumberContext from "./NumberContext";

const Message = () => {
  const { isDivisible, alterTimer, timer } = useContext(NumberContext);

  useEffect(() => {
    setInterval(alterTimer, 1000);
  }, [timer]);

  return <div>{isDivisible() && timer > 0 && <h1>Acertou!!!</h1>}</div>;
};

export default Message;
