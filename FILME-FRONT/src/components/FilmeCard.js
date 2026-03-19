import React from 'react';
import '../styles/FilmeCard.css';
import { useNavigate } from 'react-router-dom';

function FilmeCard({ filme }) {
  const navigate = useNavigate();

  return (
    <div className="filme-card">
      <img
        src={filme.foto_capa || 'https://via.placeholder.com/200x300'}
        alt={filme.nome}
        className="filme-img"
      />
      <h3>{filme.nome}</h3>
      <p>{filme.sinopse?.substring(0, 100)}...</p>
      <button onClick={() => navigate(`/filme/${filme.id}`)}>Detalhes</button>
    </div>
  );
}

export default FilmeCard;