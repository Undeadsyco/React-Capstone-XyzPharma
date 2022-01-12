import styled from "styled-components";
import { GridContainer } from "../../GlobalStyles";

export const ProductsContainer = styled(GridContainer)`
  padding: 0 200px;
  box-sizing: border-box;

  & .filter {
    text-align: center;
    height: 60%;

    & > input {
      height: 100%;
      width: 250px;
    }

    & > button {
      width: 75px;
      height: 100%;
      margin-left: 10px;
      border-radius: 20px;
    }
  }

  & .products {
    width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 20px;
    display: grid;
    gap: 10px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;

    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      border: 2px solid rgba(0, 0, 0, 0.2);

      & .img {
        align-self: center;
        height: 140px;
        width: 140px;
        background-color: black;
        color: white;
      }

      & .stripe {
        background-color: green;
        width: 5px;
      }

      & .info {
        width: 55%;
        padding: 0 20px;
        margin-left: 30px;
        background-color: green;
        color: white;

        & > a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
`;
