import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer =  styled.div`
  color: white;
  height: 100%;

  & > div {
    height: 15%;
    padding: 0 10px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  & > main {
    height: 65%;
    padding: 0 10px;

    & > h3 {}

    & > p {}

    & > a {
      text-decoration: none;
      color: white;
    }
  }
`;

const Card = ({subject, heading, info, link}) => {
  return (
    <CardContainer>
      <div><p>{subject}</p></div>
      <main>
        <h3>{heading}</h3>
        <p>{info}</p>
        {link && <Link to={link}>Know More...</Link>}
      </main>
    </CardContainer>
  );
}

export default Card;
