import { useEffect, useState } from "react";
import Post from "./Post";

function Nutri() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }

    loadApi();
  }, []);

  return (
    <div>
      {nutri.map((item) => (
        <Post key={item.id} titulo={item.titulo} capa={item.capa} subtitulo={item.subtitulo} />
      ))}
    </div>
  );
}

export default Nutri;
