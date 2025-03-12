import React from "react";

import { DeleteBtn, Lista } from "../pages/Main/styled";
import { FaTrash, FaBars } from "react-icons/fa";

// componente mostra lista de repositorios
export function RepoList({ repositorios, onDelete }) {
  return (
    <Lista>
      {repositorios.map((repo, index) => (
        <li key={index}>
          <span>
            <DeleteBtn onClick={() => onDelete(repo.name)}>
              <FaTrash size={14} />
            </DeleteBtn>
            {repo.name}
          </span>
          <a href={repo.url} target="_blank" rel="noopener noreferrer">
            <FaBars size={20} />
          </a>
        </li>
      ))}
    </Lista>
  );
}

// Componente de msg de erro
export function AlertMessage({ show, message, type = "error" }) {
  const styles = {
    error: { color: "red" },
    success: { color: "green" },
  };

  return show ? <span style={styles[type]}>{message}</span> : null;
}
