import React, { useState, useEffect } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem("tarefas");
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });
  const [valor, setValor] = useState("");

  function handleAdd() {
    setTarefas([...tarefas, valor]);
    setValor("");
  }

  useEffect(() => {
    console.log("Salvando no localStorage:", tarefas);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}
