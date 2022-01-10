import styled from "styled-components";
import { FlexContainer, GridContainer } from "../../GlobalStyles";

export const HomeContainer = styled(GridContainer)``;

export const TitleContainer = styled(FlexContainer)`
  & > h1 {
    font-size: 3rem;
  }
`;

export const InfoContainer = styled(FlexContainer)`
    padding-top: 30px;

  & > div {
    width: 33.33%;
    height: 100%;
    margin: 0 5px;
    background-color: red;

    &:first-child{
      margin-left: 0;
      background-color: blue;
    }

    &:last-child{
      margin-right: 0;
      background-color: green;
    }
  }
`;
