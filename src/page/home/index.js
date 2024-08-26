import React, { useState } from "react";
import {
  AppBody,
  Header,
  Logo,
  Descricao,
  Main,
  ContainerPes,
  PesquisaWrapper,
  Pesquisa,
  PesquisaIcone,
  BotaoBuscar,
  FilmeInfo,
  FilmeImagem,
  FilmesContainer,
} from "./styles";
import { FaSearch } from "react-icons/fa";
import logo from "./../../assets/Logo.png";

const Home = () => {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [query, setQuery] = useState("");
  const [filmes, setFilmes] = useState([]);

  const API_KEY = "c605dbfbc7d745806ecd13d954090f68";
  const URL_BASE = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const buscarFilmes = async () => {
    try {
      const response = await fetch(
        `${URL_BASE}/search/movie?api_key=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      setFilmes(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <AppBody>
      <Header>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Descricao>Explore e descubra novos filmes com informações detalhadas e avaliações </Descricao>
      </Header>
      <Main>
        <ContainerPes>
          <PesquisaWrapper>
            <PesquisaIcone>
              <FaSearch />
            </PesquisaIcone>
            <Pesquisa
              type="text"
              placeholder="Buscar filme..."
              onChange={handleSearchInputChange}
            />
            <BotaoBuscar onClick={buscarFilmes}>Buscar</BotaoBuscar>
          </PesquisaWrapper>
        </ContainerPes>
        {filmes.length > 0 && (
          <FilmesContainer>
            {filmes.map((filme) => (
              <FilmeInfo
                key={filme.id}
                onClick={() => setFilmeSelecionado(filme)}
              >
                {filme.poster_path && (
                  <FilmeImagem
                    src={`${IMAGE_BASE_URL}${filme.poster_path}`}
                    alt={`Poster de ${filme.title}`}
                  />
                )}
                <h2>{filme.title}</h2>
                <p>{truncateText(filme.overview, 100)}</p>{" "}
                <p>
                  <strong>Data de lançamento:</strong> {filme.release_date}
                </p>
                <p>
                  <strong>Avaliação:</strong> {filme.vote_average}
                </p>
              </FilmeInfo>
            ))}
          </FilmesContainer>
        )}
        {filmeSelecionado && (
          <FilmeInfo
            style={{ marginTop: "20px", maxWidth: "300px", margin: "0 auto" }}
          >
            {filmeSelecionado.poster_path && (
              <FilmeImagem
                src={`${IMAGE_BASE_URL}${filmeSelecionado.poster_path}`}
                alt={`Poster de ${filmeSelecionado.title}`}
              />
            )}
            <h2>{filmeSelecionado.title}</h2>
            <p>{filmeSelecionado.overview}</p>
            <p>
              <strong>Data de lançamento:</strong>{" "}
              {filmeSelecionado.release_date}
            </p>
            <p>
              <strong>Avaliação:</strong> {filmeSelecionado.vote_average}
            </p>
          </FilmeInfo>
        )}
      </Main>
    </AppBody>
  );
};

export default Home;
