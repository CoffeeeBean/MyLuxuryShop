import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Product from "./Product";
//import SearchForm from "./SearchForm";
import CATEGORIES from "../data/categories";

export default function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const inputEL = useRef("");

  const query = `{
    "query": {
      "bool" : {
        "filter": [
          ${selectedCategory}
        ]
      }
    }
  }`;

  useEffect(() => {
    axios
      .post(`http://localhost:8080/product/query`, query, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setProducts(response.data))
      .catch((error) => {
        //todo handle error
      });
  }, [query]);

  const handleCategoryFilter = (e) => {
    const value = e.target.value;
    if (value !== "All") {
      setSelectedCategory(`{"match":{"category":"${e.target.value}"}}`);
    } else {
      setSelectedCategory("");
    }
  };

  const handleQueryUpdate = (query) => {
    console.log(query);
  };

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

  const searchForm = (
    <Form>
      <ButtonGroup vertical>
        {CATEGORIES.map((category) => (
          <div key={category.id} className="mb-3">
            <Form.Check
              type="radio"
              label={category.name}
              value={category.name}
              id={`categoryFilter_${category.name}`}
              name="categoryFilter"
              onChange={handleCategoryFilter}
            />
          </div>
        ))}
      </ButtonGroup>
    </Form>
  );

  return (
    <Container>
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
      <div className="columnForFilter">
        <h4>Categories</h4>
        {searchForm}
      </div>
      <div>
        <hr />
        <Row>{retrivedProducts}</Row>
      </div>
    </Container>
  );
}
