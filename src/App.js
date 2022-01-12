import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Home, About, Products, Product, Investors } from './Views'
import { Header } from './Components';
import { Container } from "./GlobalStyles";

import actions from './Actions';

const App = (props) => {
  return (
    <Container className="App">
      <Header />
      <div className="RouteBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={
            <Products onGetProducts={props.onGetProducts} products={props.products} />
          }/>
          <Route path="/product/:name" element={<Product onGetProduct={props.onGetProduct} />} />
          <Route path="/investors" element={<Investors onGetData={props.onGetData} />} />
        </Routes>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => {
  const { getProducts, getProduct, getData } = actions;

  return ({
    onGetProducts: (filter) => getProducts(filter).then(
      data => dispatch({ type: 'GET_PRODUCTS', data })
    ),
    onGetProduct: (name) => getProduct(name),
    onGetData: (qtr, year) => getData(qtr, year)
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
