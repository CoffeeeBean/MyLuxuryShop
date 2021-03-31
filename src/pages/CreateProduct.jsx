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
    materials: "",
    size: "",
    gender: "",
  },
  unitPrice: 0,
  priceCurrency: "",
  inStock: true,
  imageUrl: "",
};

const emptyNewProductVariant = {
  model: "",
  color: "",
  materials: "",
  size: "",
  gender: "",
};

export default function CreateProduct() {
  const [newProduct, setNewProduct] = useState(emptyNewProduct);
  const [newProductVariant, setNewProductVariant] = useState(
    emptyNewProductVariant
  );
  const [saveConfirmed, setSaveConfirmed] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    console.log({ newProduct });
    axios
      .post(`http://localhost:8080/product/add`, { ...newProduct })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSaveConfirmed(true);
      });
  };

  const handleVariant = (e) => {
    setNewProductVariant({
      ...newProductVariant,
      [e.target.id]: e.target.value,
    });
    setNewProduct({ ...newProduct, variant: newProductVariant });
  };

  const resetForNewProduct = (e) => {
    setNewProductVariant(emptyNewProductVariant);
    setNewProduct(emptyNewProduct);
    setSaveConfirmed(false);
  };

  const confirmationMessage = saveConfirmed ? (
    <p>New Product Created. Id: {newProduct.id}</p>
  ) : null;

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
                disabled={saveConfirmed}
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
                disabled={saveConfirmed}
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
                disabled={saveConfirmed}
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
            <Form.Label column sm="2" htmlFor="category">
              Category
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                id="category"
                disabled={saveConfirmed}
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
                disabled={saveConfirmed}
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
                disabled={saveConfirmed}
                value={newProduct.sku}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, sku: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="model">
              Model
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="model"
                disabled={saveConfirmed}
                value={newProductVariant.model}
                onChange={(e) => handleVariant(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="color">
              Color
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                id="color"
                disabled={saveConfirmed}
                value={newProductVariant.color}
                onChange={(e) => handleVariant(e)}
              >
                {COLORS.map((color) => (
                  <option key={color.id}>{color.name}</option>
                ))}
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="materials">
              Material
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="materials"
                disabled={saveConfirmed}
                value={newProductVariant.materials}
                onChange={(e) => handleVariant(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label htmlFor="size" column sm="2">
              Size
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                id="size"
                disabled={saveConfirmed}
                value={newProductVariant.size}
                onChange={(e) => handleVariant(e)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="gender">
              Gender
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                id="gender"
                disabled={saveConfirmed}
                value={newProductVariant.gender}
                onChange={(e) => handleVariant(e)}
              >
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
                disabled={saveConfirmed}
                value={newProduct.unitPrice}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, unitPrice: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="priceCurrency">
              Price Currency
            </Form.Label>
            <Col sm="10">
              <Form.Control
                as="select"
                id="priceCurrency"
                disabled={saveConfirmed}
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
              disabled={saveConfirmed}
              checked={newProduct.inStock}
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
                disabled={saveConfirmed}
                value={newProduct.imageUrl}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, imageUrl: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Button
              variant="primary"
              type="submit"
              onClick={submit}
              disabled={saveConfirmed}
            >
              Save
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={resetForNewProduct}
              disabled={!saveConfirmed}
            >
              Create New Product
            </Button>
          </Form.Group>
        </Form>
        <h2>{confirmationMessage}</h2>
      </div>
    </div>
  );
}
