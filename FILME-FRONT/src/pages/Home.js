import React, { useState, useEffect } from 'react';
import FilmeCard from '../components/FilmeCard';
import SearchBar from '../components/SearchBar';
import '../styles/Home.css';

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/v1/controle-filmes/filmes')
      .then(res => res.json())
      .then(data => {
        if (data.status) setFilmes(data.books);
      })
      .catch(err => console.log(err));
  }, []);

  // Filtra filmes pelo nome
  const filmesFiltrados = filmes.filter(filme =>
    filme.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">

      <div className="search-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="grid-filmes">
        {filmesFiltrados.map(filme => (
          <FilmeCard key={filme.id} filme={filme} />
        ))}
      </div>
    </div>
  );
}

export default Home;