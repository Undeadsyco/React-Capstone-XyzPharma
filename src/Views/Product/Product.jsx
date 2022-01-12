import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = ({ onGetProduct }) => {
  const { name } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.log(name)
    onGetProduct(name).then(data => setProduct(data));
  }, [onGetProduct, name]);

  return (
    <div style={{ overflow: 'hidden' }}>
      <h2>{product.genericName}</h2>
      <div>
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>
      <div>
        <h4>Side Effects</h4>
        <ul>
          {product?.sideEffects?.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Uses</h4>
        <ul>
          {product?.uses?.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
