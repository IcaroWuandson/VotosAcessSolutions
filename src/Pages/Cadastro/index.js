import React, { useState } from 'react';
import { Stack, TextField, PrimaryButton } from '@fluentui/react';

function VotacaoForm() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  const handleDataInicioChange = (event) => {
    setDataInicio(event.target.value);
  };

  const handleDataFimChange = (event) => {
    setDataFim(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // salvar votação no banco de dados
  };

  return (
    <Stack tokens={{ childrenGap: 15 }}>
      <TextField
        label="Título"
        value={titulo}
        onChange={handleTituloChange}
      />
      <TextField
        label="Descrição"
        value={descricao}
        onChange={handleDescricaoChange}
      />
      <TextField
        label="Data de início"
        type="datetime-local"
        value={dataInicio}
        onChange={handleDataInicioChange}
      />
      <TextField
        label="Data de fim"
        type="datetime-local"
        value={dataFim}
        onChange={handleDataFimChange}
      />
      <PrimaryButton onClick={handleSubmit}>Salvar</PrimaryButton>
    </Stack>
  );
}

export default VotacaoForm;
