import { useEffect, useState } from "react";

function App() {

	const [input, setInput] = useState('')
	const [tarefas, setTarefas] = useState([
		'Estudar java',
		'Estudar react'
	]);
	
	useEffect(()=>{
		localStorage.setItem('@tarefas', JSON.stringify(tarefas))
		console.log('Salvando no localStorage:', tarefas);
	}, [tarefas]);
	useEffect(()=>{
		
		const tarefasStorage= localStorage.getItem('@tarefas');
		console.log('Carregando do localStorage:', tarefasStorage);
		if(tarefasStorage){
			setTarefas(JSON.parse(tarefasStorage))
			console.log('Carregando do localStorage:', tarefasStorage);
		}
		}, []);

	
	
	function handlerRegister(e) {
		e.preventDefault();

		setTarefas([...tarefas, input]);
		setInput('');
		
	}

	return (
		<div>
			<form onSubmit={handlerRegister}>
				<label>Nome da tarefa</label>		<br></br>
				<input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder="digite uma tarefa"></input>
				<br></br>

				<button type="submit" >Registrar</button>
			</form>
			<br></br>
			<ul>
				{tarefas.map(tarefa=>(
					<li key={tarefa}>
						{tarefa}
					</li>
				))}
				

			</ul>
		</div>
		
	);
}

export default App;

