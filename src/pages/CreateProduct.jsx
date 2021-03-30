import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CATEGORIES from "../data/categories";
import GENDERS from "../data/genders";
import COLORS from "../data/colors";
import CURRENCIES from "../data/currencies";
import { useState } from "react";
import axios from "axios";

const emptyNewProduct = {
  id: "",
  shortDescription: "",
  editorDescription: "",
  category: "",
  brand: "",
  sku: "",
  variant: {
    model: "",
    color: "",
    materials: [
      {
        description: "",
      },
    ],
    size: "",
    gender: "",
  },
  unitPrice: 0,
  priceCurrency: "",
  inStock: false,
  imageUrl: "",
};

export default function CreateProduct() {
  const [newProduct, setNewProduct] = useState(emptyNewProduct);

  const submit = (e) => {
    e.preventDefault();
    console.log({ newProduct });
    axios
      .post(`http://localhost:8080/product/add`, { ...newProduct })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <h2>Create Product</h2>
      <div className="center">
        <Form>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productId">
              Id
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="productId"
                value={newProduct.id}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, id: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productShortDescription">
              Short Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="productShortDescription"
                value={newProduct.shortDescription}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    shortDescription: e.target.value,
                  })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productEditorialDescriprion">
              Editorial Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="productEditorialDescriprion"
                value={newProduct.editorDescription}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    editorDescription: e.target.value,
                  })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                value={newProduct.category}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, category: e.target.value })
                }
              >
                {CATEGORIES.map((category) => (
                  <option key={category.id}>{category.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label htmlFor="productBrand" column sm="2">
              Brand
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="productBrand"
                value={newProduct.brand}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, brand: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productSku">
              SKU
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="productSku"
                value={newProduct.sku}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, sku: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productModel">
              Model
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" id="productModel" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Color
            </Form.Label>
            <Col sm="10">
              <Form.Control as="select">
                {COLORS.map((color) => (
                  <option key={color.id}>{color.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productMaterial">
              Material
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" id="productMaterial" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label forhtml="productSize" column sm="2">
              Size
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" id="productSize" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Gender
            </Form.Label>
            <Col sm="10">
              <Form.Control as="select">
                {GENDERS.map((gender) => (
                  <option key={gender.id}>{gender.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label htmlFor="productUnitPrice" column sm="2">
              Unit Price
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="productUnitPrice"
                value={newProduct.unitPrice}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, unitPrice: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Price Currency
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                value={newProduct.priceCurrency}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    priceCurrency: e.target.value,
                  })
                }
              >
                {CURRENCIES.map((currency) => (
                  <option key={currency.id}>{currency.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="In Stock"
              value={newProduct.inStock}
              onChange={(e) =>
                setNewProduct({ ...newProduct, inStock: e.target.checked })
              }
            />
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productImageUrl">
              Image Url
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="productImageUrl"
                value={newProduct.imageUrl}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, imageUrl: e.target.value })
                }
              />
            </Col>
          </Form.Group>
        </Form>
        <Button variant="primary" type="submit" onClick={submit}>
          Save
        </Button>
      </div>
    </div>
  );
}
