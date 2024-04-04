import { useState } from "react";
import Nome from './components/Nome';

function App() {
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [idade, setIdade] = useState('')
	
	const [user, setUser] = useState({})
	
	function handlerRegister(e) {
		e.preventDefault();
		alert("Usuário registrado com sucesso")
		setUser({
			nome:nome,
			idade:idade,
			email:email,
		})
	}

	return (
		<div>
			<form onSubmit={handlerRegister}>
				<label>Nome</label>		<br></br>
				<input type="text" value={nome} onChange={(e)=> setNome(e.target.value)} placeholder="digite seu nome"></input>
				<br></br>

				<label>Email</label>		<br></br>
				<input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="digite seu email"></input>
				<br>
				</br>
				<label>Idade</label>		<br></br>
				<input type="text" value={idade} onChange={(e)=> setIdade(e.target.value)} placeholder="digite sua idade"></input>
				<br></br>
				<button type="submit" >Registrar</button>
			</form>
			<br></br>
			<div>
				<span>Bem vindo {user.nome}</span><br/>
				<span>idade {user.idade}</span><br/>
				<span>email {user.email}</span><br/>

			</div>
		</div>
		
	);
}

export default App;

