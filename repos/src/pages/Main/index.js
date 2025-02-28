import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import "./main.css";
import { Container, Form, BtnSubmit } from "./styled";
import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";
import { api } from "../../services/api";

export default function Main() {
  const [loading, setLoading] = useState(undefined);
  const [listaRepo, setListaRepo] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const handleRepo = useCallback(
    async (info) => {
      setLoading(true);
      try {
        const response = await api.get(`repos/${info.newRepo}`);
        const data = {
          name: response.data.full_name,
        };

        setListaRepo([...listaRepo, data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        reset();
      }
    },
    [listaRepo, reset]
  );

  return (
    <>
      <Container>
        <h2>
          <FaGithub size={25} />
          Meus repositórios
        </h2>
        <Form onSubmit={handleSubmit(handleRepo)}>
          <input
            type="text"
            placeholder="Adicionar um repositório"
            {...register("newRepo")}
            id="newRepo"
            disabled={loading}
          />
          <BtnSubmit type="submit" loading={loading}>
            {loading ? (
              <FaSpinner size={14} color="#fff" />
            ) : (
              <FaPlus size={14} color="#fff" />
            )}
          </BtnSubmit>
        </Form>
        {listaRepo.map((repo, index) => (
          <span key={index}>{repo.name}</span>
        ))}
      </Container>
    </>
  );
}
