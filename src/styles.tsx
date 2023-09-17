import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`

export const PokemonListCards = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  justify-content: center;
`

export const PokemonCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  width: 200px;
  
  &:hover {
    transform: scale(1.05);
  }
  
  img {
    max-width: 100px;
    max-height: 100px;
    margin: 0 auto;
  }
  
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`

export const PopupContent = styled.div`
  background-color: #fff;
  width: 80%;
  max-width: 400px; /* Максимальная ширина попапа */
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
`

export const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #aaa;
`

export const Detail = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
  
  p {
    font-size: 24px;
    margin-bottom: 5px;
  }
`