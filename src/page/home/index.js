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
  BotaoFiltrar,
  ContainerBusca,
  ModalFiltroWrapper,
  ModalContent,
  FiltroInput,
  BotaoAplicarFiltro,
  CheckboxLabel,
  CheckboxWrapper
} from "./styles";
import { FaSearch, FaFilter } from "react-icons/fa";
import logo from "./../../assets/Logo.png";

const Home = () => {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [query, setQuery] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [releaseYear, setReleaseYear] = useState(""); // Estado para o filtro de ano de lançamento
  const [selectedRatings, setSelectedRatings] = useState([]); // Estado para as pontuações selecionadas
  const [showModal, setShowModal] = useState(false); // Estado para controlar a modal

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
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleReleaseYearChange = (e) => {
    setReleaseYear(e.target.value);
  };

  const handleRatingChange = (e) => {
    const rating = e.target.value;
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const applyFilters = () => {
    setShowModal(false); // Fechar a modal após aplicar os filtros
  };

  // Função para verificar se o filme está dentro do intervalo de pontuação selecionado
  const isRatingInRange = (rating, ranges) => {
    return ranges.some((range) => {
      const [min, max] = range.split("-").map(Number);
      return rating >= min && rating <= max;
    });
  };

  // Filtra os filmes com base no ano de lançamento e nas pontuações selecionadas
  const filmesFiltrados = filmes.filter((filme) => {
    return (
      (!releaseYear || filme.release_date.includes(releaseYear)) &&
      (selectedRatings.length === 0 ||
        isRatingInRange(filme.vote_average, selectedRatings))
    );
  });

  return (
    <AppBody>
      <Header>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Descricao>
          Explore e descubra novos filmes com informações detalhadas e avaliações
        </Descricao>
      </Header>
      <Main>
        <ContainerBusca>
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
            <BotaoFiltrar onClick={() => setShowModal(true)}>
              <FaFilter />
              Filtrar
            </BotaoFiltrar>
          </ContainerPes>
        </ContainerBusca>

        {/* Modal de Filtro */}
        {showModal && (
          <ModalFiltroWrapper>
            <ModalContent>
              <h2>Filtrar Filmes</h2>
              <FiltroInput
                type="text"
                placeholder="Ano de lançamento"
                value={releaseYear}
                onChange={handleReleaseYearChange}
              />
              <CheckboxWrapper>
                <CheckboxLabel>
                  <input
                    type="checkbox"
                    value="1-2"
                    checked={selectedRatings.includes("1-2")}
                    onChange={handleRatingChange}
                  />
                  1 a 2
                </CheckboxLabel>
                <CheckboxLabel>
                  <input
                    type="checkbox"
                    value="3-4"
                    checked={selectedRatings.includes("3-4")}
                    onChange={handleRatingChange}
                  />
                  3 a 4
                </CheckboxLabel>
                <CheckboxLabel>
                  <input
                    type="checkbox"
                    value="5-6"
                    checked={selectedRatings.includes("5-6")}
                    onChange={handleRatingChange}
                  />
                  5 a 6
                </CheckboxLabel>
                <CheckboxLabel>
                  <input
                    type="checkbox"
                    value="7-8"
                    checked={selectedRatings.includes("7-8")}
                    onChange={handleRatingChange}
                  />
                  7 a 8
                </CheckboxLabel>
                <CheckboxLabel>
                  <input
                    type="checkbox"
                    value="9-10"
                    checked={selectedRatings.includes("9-10")}
                    onChange={handleRatingChange}
                  />
                  9 a 10
                </CheckboxLabel>
              </CheckboxWrapper>
              <BotaoAplicarFiltro onClick={applyFilters}>
                Aplicar Filtros
              </BotaoAplicarFiltro>
            </ModalContent>
          </ModalFiltroWrapper>
        )}

        {filmesFiltrados.length > 0 && (
          <FilmesContainer>
            {filmesFiltrados.map((filme) => (
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
                <p>{truncateText(filme.overview, 100)}</p>
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
