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
  CarroInfo,
} from './styles';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const [carroSelecionado, setCarroSelecionado] = useState(null);

  useEffect(() => {
    // Simulação de um carro selecionado
    const carroExemplo = {
      nome: 'Carro A',
      descricao: 'Um carro confortável e econômico para o dia a dia.',
      preco: 'R$ 50.000',
      combustivel: 'Gasolina',
      desempenho: '10km/l'
    };
    setCarroSelecionado(carroExemplo);
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
              placeholder="Buscar veículo..."
              onChange={() => {}}
            />
            <BotaoBuscar>Buscar</BotaoBuscar>
          </PesquisaWrapper>
        </ContainerPes>
        {carroSelecionado && (
          <CarroInfo>
            <h2>{carroSelecionado.nome}</h2>
            <p>{carroSelecionado.descricao}</p>
            <p>Preço: {carroSelecionado.preco}</p>
            <p>Combustível: {carroSelecionado.combustivel}</p>
            <p>Desempenho: {carroSelecionado.desempenho}</p>
          </CarroInfo>
        )}
      </Main>
    </AppBody>
  );
};

export default Home;
