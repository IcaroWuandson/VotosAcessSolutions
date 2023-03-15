import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Envie os dados para o banco de dados
    const temasRef = firebase.database().ref().child("temas");
    temasRef.push({
      nome,
      data,
      descricao,
    });

    // Limpe o formulário após o envio
    setNome("");
    setData("");
    setDescricao("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <label htmlFor="data">Data:</label>
      <input
        type="text"
        id="data"
        value={data}
        onChange={(event) => setData(event.target.value)}
      />

      <label htmlFor="descricao">Descrição:</label>
      <textarea
        id="descricao"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
      />

      <button type="submit">Cadastrar Tema</button>
    </form>
  );
}

export default Cadastro;
