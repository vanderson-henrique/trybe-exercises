import React, { useContext } from 'react';
import useArray from '../hooks/useArray';
// import ToDoContext from '../context/ToDoContext';

function List() {
  // const { list } = useContext(ToDoContext);
  const [list, addList] = useArray();
  return(
    <ul>
      {list.map((e) => <li>{e}</li>)}
    </ul>
  );
}

export default List;
