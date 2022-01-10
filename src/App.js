import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Home } from './Views'
import { Header } from './Components';
import { Container } from "./GlobalStyles";

const App = () => {
  return (
    <Container className="App">
      <Header />
      <div className="RouteBody">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Container>
  );
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => {

  return ({

  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
