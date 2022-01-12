import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ProductsContainer } from './styles';

const Products = ({ onGetProducts, products }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    onGetProducts()
  }, [onGetProducts]);

  return (
    <ProductsContainer rows="10% 90%" cols="100%">
      <div className="filter">
        <input id="filter" name="filter" type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button onClick={() => onGetProducts(filter)}>Search</button>
      </div>
      <div className="products">
        {products?.map(item => (
          <div>
            <div className="img">Image</div>
            <div className="stripe"></div>
            <div className="info">
              <h4>{item.tradeName}</h4>
              <p>{item.genericName}</p>
              <p>{item.category}</p>
              <Link to={`/product/${item.genericName}`}>Find More...</Link>
            </div>
          </div>
        ))}
      </div>
    </ProductsContainer>
  );
};

export default Products;
