import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

import './App.css';

interface TarefaData {
  inputTarefa: string;
}

function App() {
  const [listaTarefa, setListaTarefa] = useState<string[]>([]);
  const [tarefaEmEdicao, setTarefaEmEdicao] = useState<{ index: number; valor: string } | null>(null);
  const { register, handleSubmit, reset } = useForm<TarefaData>();

  useEffect(() => {
    function loadLocalStorage() {
      const load = localStorage.getItem("@listaTarefa");
      if (load) {
        setListaTarefa(JSON.parse(load));
      }
    }

    loadLocalStorage();
  }, []);

  function setLocalStorage(lista: string[]): void {
    localStorage.setItem("@listaTarefa", JSON.stringify(lista));
  }

  function handleAddTarefa(data: TarefaData): void {
    const tarefaAdd = data.inputTarefa;
    if (tarefaAdd.trim().length === 0) return toast.info("Digite sua tarefa");
    if (listaTarefa.some((tarefa) => tarefa === tarefaAdd)) return toast.info(`Essa tarefa "${tarefaAdd}" já foi adicionada`);

    const lista = [...listaTarefa, tarefaAdd];
    ordenaLista(lista);
    toast.success(`Tarefa "${tarefaAdd}" adicionada`);
    reset();
  }

  function ordenaLista(lista: string[]) {
    const listaOrdenada = [...lista].sort((a, b) => a.localeCompare(b));
    setListaTarefa(listaOrdenada);
    setLocalStorage(listaOrdenada);
  }

  function handleDelete(index: number, tarefa: string): void {
    const novaLista = listaTarefa.filter((_, i) => i !== index);
    ordenaLista(novaLista);
    toast.warn(`Tarefa "${tarefa}" deletada`);
  }

  function handleEdit(index: number, tarefa: string): void {
    setTarefaEmEdicao({ index, valor: tarefa });

  }

  function salvarEdicao(): void {
    if (tarefaEmEdicao) {
      const listaAtualizada = [...listaTarefa];
      listaAtualizada[tarefaEmEdicao.index] = tarefaEmEdicao.valor;
      ordenaLista(listaAtualizada);
      setTarefaEmEdicao(null);
      toast.success("Tarefa editada com sucesso!");
    }
  }

  return (
    <>
      <ToastContainer autoClose={1500} />
      <div className="content">
        <h2>Lista de tarefas</h2>
        <form
          onSubmit={handleSubmit(tarefaEmEdicao ? salvarEdicao : handleAddTarefa)}
        >
          <label>Tarefa:</label>
          <input
            type="text"
            placeholder="Digite sua tarefa"
            {...register("inputTarefa")}
            value={tarefaEmEdicao ? tarefaEmEdicao.valor : ""}
            onChange={(e) =>
              setTarefaEmEdicao((prev) =>
                prev ? { ...prev, valor: e.target.value } : null
              )
            }
          />
          <input
            type="submit"
            value={tarefaEmEdicao ? "Salvar" : "Adicionar"}
          />
        </form>
        <div className="lista">
          {listaTarefa.map((iten, index) => (
            <span key={index}>
              * {iten}
              <button onClick={() => handleDelete(index, iten)}>X</button>
              <button onClick={() => handleEdit(index, iten)}>Edit</button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
