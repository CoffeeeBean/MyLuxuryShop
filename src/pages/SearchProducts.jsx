import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Product from "./Product";

export default function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputEL = useRef("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/query`)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        //todo handle error
      });
  }, []);

  const searchHandler = () => {
    setSearchTerm(inputEL.current.value);
    if (searchTerm !== "") {
      setSearchResults(
        products.filter((product) => {
          return Object.values(product)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
      );
    } else {
      setSearchResults(products);
    }
  };

  const productToRender = searchTerm.length < 1 ? products : searchResults;
  const retrivedProducts = productToRender.map((product) => (
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
        <div className="form-group has-search">
          <span className="fa fa-search form-control-feedback"></span>
          <input
            ref={inputEL}
            type="text"
            id="filter"
            className="form-control"
            placeholder="Search"
            value={searchTerm}
            onChange={searchHandler}
          />
        </div>
        <hr />
        <Row>{retrivedProducts}</Row>
      </>
    </Container>
  );
}
