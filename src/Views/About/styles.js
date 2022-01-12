import styled from "styled-components";
import { GridContainer } from '../../GlobalStyles';

export const AboutContainer = styled(GridContainer)`
  & > div:first-child {
    grid-column: 1/3;
    grid-row: 1/2;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    & > h2 {
      margin-left: 20px;
    }

    & > ul {

    }
  }

  & > div {
    width: 100%;
    height: 100%;

    &.contact {
      border-right: 1px solid rgba(0, 0, 0, 0.3);

      & div:first-child {
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);

        & > h3{
          margin: 20px;
        }
      }

      & > div:last-child {
        padding-left: 20px;

        & > h3{
          margin: 15px 0;
          font-weight: 400;
        }

        & > address {
          font-size: 0.9rem;
        }
      }
    }

    &.business {
      border-left: 1px solid rgba(0, 0, 0, 0.3);

      & > div:first-child {
        height: 66px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      }

      & > div:last-child {
        padding-left: 20px;
      }
    }
  }
`;
