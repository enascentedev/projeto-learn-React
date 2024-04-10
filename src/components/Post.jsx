// Post.jsx
function Post({ titulo, capa, subtitulo }) {
  return (
    <article className="post">
      <strong className="titulo">{titulo}</strong>
      <img src={capa} alt={titulo} className="capa" />
      <p className="subtitulo">{subtitulo}</p>
      <a className="botao">Acessar</a>
    </article>
  );
}

export default Post;
