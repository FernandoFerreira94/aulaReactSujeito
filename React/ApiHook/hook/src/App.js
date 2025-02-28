import React, { useState, useEffect, useMemo, useCallback } from "react";

export default function App() {
  // useState é usado para criar variáveis de estado para armazenar as tarefas e o valor do input
  const [tarefas, setTarefas] = useState(() => {
    const tarefasStorage = localStorage.getItem("tarefas");
    // Se existirem tarefas salvas no localStorage, elas são carregadas ao iniciar
    return tarefasStorage ? JSON.parse(tarefasStorage) : [];
  });
  const [valor, setValor] = useState("");

  // useMemo é usado para memorizar o valor total de tarefas, evitando recalcular em cada renderização se 'tarefas' não mudar
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  // useCallback é usado para memoizar a função handleAdd, evitando a criação de uma nova instância a cada renderização
  const handleAdd = useCallback(() => {
    if (valor.trim() === "") {
      alert("Digite uma tarefa");
      return;
    }
    if (tarefas.includes(valor)) {
      alert("Essa Tarefa ja existe");
      return;
    }
    // Adiciona uma nova tarefa à lista e limpa o campo de entrada
    setTarefas([...tarefas, valor]);
    setValor("");
  }, [valor, tarefas]);

  // useEffect é usado para atualizar o localStorage sempre que a lista de tarefas mudar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map((tarefa, index) => (
          // Renderiza cada tarefa em um item de lista
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
      <strong>Voçê tem {totalTarefas} tarefas</strong>
      <br />
      <input
        type="text"
        value={valor}
        // Atualiza o valor do input e transforma a primeira letra em maiúscula
        onChange={(e) =>
          setValor(
            e.target.value.charAt(0).toUpperCase() +
              e.target.value.slice(1).toLocaleLowerCase()
          )
        }
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </div>
  );
}
