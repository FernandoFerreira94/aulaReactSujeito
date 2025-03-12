import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./main.css";
import { Container, Form, BtnSubmit, Lista, DeleteBtn } from "./styled";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { api } from "../../services/api";
import { RepoList, AlertMessage } from "../../comp";

const STORAGE_KEY = "@repositorio";
const BASE_USER = "FernandoFerreira94";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const { register, handleSubmit, reset } = useForm();

  // get repositorios Localstorage
  useEffect(() => {
    const storageRepos = getLocalStorage(STORAGE_KEY);
    if (storageRepos) {
      setRepositories(storageRepos);
    }
  }, []);

  // set LocalStorage
  function setLocalStorage(STORAGE_KEY, data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  // get LocalStorage
  function getLocalStorage(STORAGE_KEY) {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  }

  // atualizar repositorios
  function updateRepositories(data) {
    setRepositories(data);
    setLocalStorage(STORAGE_KEY, data);
  }

  // adicionar repositorio
  const addRepository = useCallback(
    async (info) => {
      setLoading(true);
      setIsAlertVisible(false);
      try {
        if (info.newRepo.trim() === "") {
          setAlertMessage("Campo em branco");
          setIsAlertVisible(true);
          throw new Error("Campo em branco");
        }

        const response = await api.get(`repos/${BASE_USER}/${info.newRepo}`);

        const existingRepo = repositories.find(
          (repo) => repo.name === response.data.name
        );

        if (existingRepo) {
          setAlertMessage("Repositorio ja adicionado");
          reset();
          setIsAlertVisible(true);
          return;
        }

        const newRepo = {
          name: response.data.name,

          url: response.data.html_url,
        };
        const updatedRepositories = [...repositories, newRepo];
        updateRepositories(updatedRepositories);
        reset();
      } catch (error) {
        console.log(error);

        if (error.response && error.response.status === 404) {
          setIsAlertVisible(true);

          setAlertMessage("Repositório não encontrado");
          console.error("Repositório não encontrado");
        } else {
          console.error("Erro ao buscar o repositório");
        }
      } finally {
        setLoading(false);
      }
    },
    [repositories, reset]
  );

  // deleta repositorio
  const deleteRepository = useCallback(
    (repoName) => {
      const filteredRepositories = repositories.filter(
        (repo) => repo.name !== repoName
      );
      updateRepositories(filteredRepositories);
    },
    [repositories]
  );

  return (
    <>
      <Container>
        <h2>
          <FaGithub size={25} />
          Meus repositórios
        </h2>
        <Form onSubmit={handleSubmit(addRepository)}>
          <input
            type="text"
            placeholder={
              loading ? "Buscando repositorio" : "Adicione um repositorio"
            }
            {...register("newRepo")}
            id="newRepo"
            disabled={loading}
            onChange={() => setIsAlertVisible(false)}
          />

          <BtnSubmit type="submit" loading={loading}>
            {loading ? (
              <FaSpinner size={12} color="#fff" />
            ) : (
              <FaPlus size={10} color="#fff" />
            )}
          </BtnSubmit>
        </Form>

        <AlertMessage
          show={isAlertVisible}
          message={alertMessage}
          type="error"
        />

        <RepoList repositorios={repositories} onDelete={deleteRepository} />
      </Container>
    </>
  );
}
