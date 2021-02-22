import { useState } from 'react';

function useArray() {
  const [list, setList] = useState(['teste','test2']);

  const addList = (itemList) => {
    setList(list.concat(itemList));
  }

  return [list, setList];
}

export default useArray;
