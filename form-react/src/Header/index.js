import { memo } from "react";

import "./header.css";

export default function Header({ name, nome }) {
  return (
    <>
      <h2 className="head">
        Bem vindo {name} {nome}{" "}
      </h2>
    </>
  );
}

export const MemoHeader = memo(Header);
