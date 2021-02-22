import React, { useState, useContext } from 'react';
import useArray from '../hooks/useArray';
// import ToDoContext from '../context/ToDoContext';

function InputList() {
	const [item, setItem] = useState('');
	const [list, setList] = useArray();
	// const { addList } = useContext(ToDoContext);
  return(
		<div>
			<input type="text" value={item} onChange={({target}) => setItem(target.value)}/>
			<button
				type="button"
				onClick={() => {
					setList(list.concat(item));
					setItem('');
				}}
			>Adicionar Tarefa
			</button>
		</div>
	);
}

export default InputList;
