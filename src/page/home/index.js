import React, { useState, useEffect } from 'react';
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
} from './styles';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  useEffect(() => {
    // Simulação de um filme selecionado
    const filmeExemplo = {
      nome: 'Filme A',
      descricao: 'Um filme emocionante e cheio de aventura.',
      tipo: 'Ação',
      ano: '2022',
      duracao: '2h 30min',
      diretor: 'Diretor X',
    };
    setFilmeSelecionado(filmeExemplo);
  }, []);

  return (
    <AppBody>
      <Header>
        <Logo>Logo</Logo>
        <Descricao>Descrição da Página</Descricao>
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
              onChange={() => {}}
            />
            <BotaoBuscar>Buscar</BotaoBuscar>
          </PesquisaWrapper>
        </ContainerPes>
        {filmeSelecionado && (
          <FilmeInfo>
            <h2>{filmeSelecionado.nome}</h2>
          
            <p>Tipo: {filmeSelecionado.tipo}</p>
            <p>Ano: {filmeSelecionado.ano}</p>
            <p>Duração: {filmeSelecionado.duracao}</p>
            <p>Diretor: {filmeSelecionado.diretor}</p>
          </FilmeInfo>
        )}
      </Main>
    </AppBody>
  );
};

export default Home;
