import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/FilmeDetalhes.css';

function FilmeDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/v1/controle-filmes/filme/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.status) setFilme(data.books[0]);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (!filme) return <div className="loading">Carregando...</div>;

  return (
    <div className="filme-detalhes">
      <img
        src={filme.foto_capa || 'https://via.placeholder.com/300x450'}
        alt={filme.nome}
      />
      <h2>{filme.nome}</h2>
      <p><strong>Duração:</strong> {filme.duracao}</p>
      <p><strong>Data de lançamento:</strong> {filme.data_lancamento}</p>
      <p>{filme.sinopse}</p>
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
}

export default FilmeDetalhes;