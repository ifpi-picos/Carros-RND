import styled from "styled-components";

export const AppBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  min-height: 100vh;
  background-color: #e4e4e4;
  padding-bottom: 20px;
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  max-width: 1200px;
  background-color: #282c34;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  img {
    width: 190px;
    height: auto;
    margin: 7px;
  }
`;

export const Descricao = styled.p`
  font-size: 1rem;
  padding: 0 10px;
  text-align: center;
  max-width: 300px;
  font-weight: bold;
  text-shadow: 0 1px 2px #868686;
`;


export const BotaoFiltrar = styled.button`
display: flex;
align-items: center;
justify-content: center;
background-color: transparent;
color: #282c34;
border: none;
cursor: pointer;
font-size: 16px;
position: absolute;
right: 20px; /* Move o botão para o canto direito */

&:hover {
  color: #555;
}

svg {
  margin-right: 8px;
}

`;



export const Main = styled.main`
  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerBusca = styled.div`
display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha os elementos à esquerda */
  
  width: 100%;
  margin-bottom: 20px;
  
`;
export const ContainerPes = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const PesquisaWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 5px 10px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

export const Pesquisa = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  flex: 1;
`;

export const PesquisaIcone = styled.div`
  color: #282c34;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;

export const BotaoBuscar = styled.button`
  background-color: #61dafb;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 25px;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21a1f1;
  }
`;

export const FilmeInfo = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease;
  cursor: pointer;
  width: 180px;

  &:hover {
    transform: scale(1.05);
  }

  h2 {
    font-size: 1rem;
    margin: 10px 0;
    text-align: center;
  }

  p {
    font-size: 0.8rem;
    color: #555;
    text-align: center;
    margin: 5px 0;
  }
`;

export const FilmeImagem = styled.img`
  width: 100%;
  height: auto;
  max-width: 150px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FilmesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;
export const ModalFiltroWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FiltroInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;
  input {
    margin-right: 10px;
  }
`;

export const BotaoAplicarFiltro = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 16px;
  &:hover {
    background-color: #45a049;
  }
`;
