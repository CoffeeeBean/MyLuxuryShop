import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Product from "./Product";
import CATEGORIES from "../data/categories";
import COLORS from "../data/colors";

export default function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputEL = useRef("");
  const [filter, setFilter] = useState({
    category: "",
    variant_color: "",
  });
  const [jsonFilter, setJsonFilter] = useState("");

  const query = `{
    "query": {
      "bool" : {
        "filter": [
          ${jsonFilter}
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

  const handleFilter = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    const newFilter = filter;
    if (value !== "All") {
      newFilter[name] = `{"match":{"${name.replace("_", ".")}":"${value}"}}`;
    } else {
      newFilter[name] = "";
    }

    let newJsonFilter = "";
    for (let key in filter) {
      if (filter[key] !== "All" && filter[key] !== "") {
        if (newJsonFilter !== "") {
          newJsonFilter = newJsonFilter + ",";
        }
        newJsonFilter = newJsonFilter + filter[key];
      }
      console.log(newJsonFilter);
    }
    if (newFilter[name] !== "") {
      newJsonFilter = newJsonFilter + "," + newFilter[name];
    }

    setJsonFilter(newJsonFilter);
    setFilter(newFilter);
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
      <h4>Category</h4>
      <ButtonGroup vertical>
        {CATEGORIES.map((category) => (
          <div key={category.id} className="mb-3">
            <Form.Check
              type="radio"
              label={category.name}
              value={category.name}
              id={`categoryFilter_${category.name}`}
              name="category"
              onChange={handleFilter}
            />
          </div>
        ))}
      </ButtonGroup>
      <h4>Color</h4>
      <ButtonGroup vertical>
        {COLORS.map((color) => (
          <div key={color.id} className="mb-3">
            <Form.Check
              type="radio"
              label={color.name}
              value={color.name}
              id={`colorFilter_${color.name}`}
              name="variant_color"
              onChange={handleFilter}
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
      <div className="columnForFilter">{searchForm}</div>
      <div>
        <hr />
        <Row>{retrivedProducts}</Row>
      </div>
    </Container>
  );
}
