import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer } from "../../GlobalStyles";

const HeaderContainer = styled(FlexContainer)`
  padding-left: 20px;
  justify-content: left;

  & > h1 {
    margin: 0;
  }

  & > nav {
    margin-left: 20px;

    & > a {
      text-decoration: none;
      margin: 0 5px;
      color: black;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer className="Header">
      <h1>XYZ Pharma</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/investors">Investors</Link>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
