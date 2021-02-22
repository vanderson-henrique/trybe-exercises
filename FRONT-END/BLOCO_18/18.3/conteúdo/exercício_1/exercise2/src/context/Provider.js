/* import React, { useState } from 'react';
import ToDoContext from './ToDoContext';

function Provider({ children }) {
  const [list, setList] = useState([]);

  const addList = (itemList) => {
    setList(list.concat(itemList));
  }

  const contextValue = { list, addList };
    
  return(
    <ToDoContext.Provider value={ contextValue }>
      {children}
    </ToDoContext.Provider>
  );
};

export default Provider; */
