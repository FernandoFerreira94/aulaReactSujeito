import React, { useEffect, useState } from "react";
import "./style.css";

export default function Api() {
  const url = "https://sujeitoprogramador.com/rn-api/?api=posts";

  const [nutri, setNutri] = useState([]);
  useEffect(() => {
    function loadApi() {
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          setNutri(json);
        });
    }

    loadApi();
  }, []);
  return (
    <main>
      <section>
        <h1>Nutrição</h1>
        {nutri.map((iten, id) => {
          return (
            <article key={id}>
              <h2>{iten.titulo}</h2>
              <h4> {iten.categoria}</h4>
              <img src={iten.capa} alt={iten.titulo} width={200} />
              <p>{iten.subtitulo}</p>
              <button>Acessar</button>
              <span></span>
            </article>
          );
        })}
      </section>
    </main>
  );
}
