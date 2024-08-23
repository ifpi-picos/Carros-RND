import styled from "styled-components";

export const AppBody = styled.div`
  background-color: #f0f0f0; /* Cinza claro */
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 4em;
  display: flex;
  background-color: #000000; /* Preto */
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: #ffffff;
`;

export const Descricao = styled.div`
  font-size: 1em;
  color: #ffffff;
`;

export const Main = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerPes = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const PesquisaWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #87CEEB; /* Azul claro */
  border-radius: 5px;
  overflow: hidden;
`;

export const PesquisaIcone = styled.div`
  padding: 0 10px;
  color: #87CEEB; /* Azul claro */
`;

export const Pesquisa = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 0.9em;
  border: none;
  outline: none;
  color: #333333;
  ::placeholder {
    color: #888888; /* Cor mais apagada para o placeholder */
  }
`;

export const BotaoBuscar = styled.button`
  background-color: #87CEEB; /* Azul claro */
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  font-weight: bold;
`;

export const CarroInfo = styled.div`
  background-color: #ffffff; /* Branco */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;

  h2 {
    margin-bottom: 10px;
    font-size: 1.5em;
  }

  p {
    margin: 5px 0;
  }
`;
