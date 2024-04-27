// Nutri.jsx
import useNutri from '../state/useNutri';
import Post from './Post';

function Nutri() {

  const { nutri, isLoading, error } = useNutri();
	console.log(nutri);

	if (isLoading) {
    return <div>Carregando...</div>;
  }
  if (error) return <p>Ocorreu um erro ao carregar os dados.</p>;

  return (
    <div>
      {nutri.map((item) => (
        <Post key={item.id} titulo={item.titulo} capa={item.capa} subtitulo={item.subtitulo} />
      ))}
    </div>
  );
}

export default Nutri;
