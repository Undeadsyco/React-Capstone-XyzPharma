import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  &.App {
    width: 100vw;
    height: 100vh;

    & > div{
      &.Header {
        height: 10%;
      }

      &.RouteBody {
        height: 90%;
      }
    }
  }
`;

export const FlexContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: flex;
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};

  &.nested {
    grid-column: ${props => props.colSpan};
    grid-row: ${props => props.rowSpan};
  }
`;

export const GridContainer = styled.div.attrs((props) => ({
  cols: props.cols || '100%',
  rows: props.rows || '100%',
}))`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: grid;
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
  grid-template-columns: ${props => props.cols};
  grid-template-rows: ${props => props.rows};

  &.manyRows {
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.manyCols {
    grid-template-columns: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.multiGrid {
    grid-template-columns: ${props => `repeat(${props.rows}, 1fr)`};
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.nested {
    grid-column: ${props => props.colSpan};
    grid-row: ${props => props.rowSpan};
  }
`;