import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Product from "./Product";

export default function SearchProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/query`)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        //todo handle error
      });
  }, []);

  const retrivedProducts = products.map((product) => (
    <Product
      key={product.id}
      id={product.id}
      shortDescription={product.shortDescription}
      imageUrl={product.imageUrl}
    />
  ));

  return (
    <Container>
      <>
        <h2>search page</h2>
        <input
          type="text"
          id="filter"
          placeholder="insert json filter"
          style={{ width: 500 }}
        ></input>
        <button>Search</button>
        <hr />
        <Row>{retrivedProducts}</Row>
      </>
    </Container>
  );
}
