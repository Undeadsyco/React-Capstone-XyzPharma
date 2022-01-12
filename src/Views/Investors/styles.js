import styled from "styled-components";
import { GridContainer } from "../../GlobalStyles";

export const InvestorsContainer = styled(GridContainer)`
  & .filters {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      height: 45px;
      width: 175px;
      padding: 0 20px;


      & > select {
        width: 100%;
      }

      & > button {
        height: 75%;
        width: 100px;
      }
    }
  }

  & .table {
    height: 100%;

    & > table {
      width: 100%;

      & > thead {
        & > tr {
          height: 40px;
          background-color: black;
          color: white;
        }
      }

      & > tbody {
        & > tr {
          height: 40px;

          & > td {
            text-align: center;

            &.title-col {
              text-align: left;
              padding-left: 20px;
            }
          }
        }
      }
    }
  }
`;