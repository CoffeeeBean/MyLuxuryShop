import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function CreateProduct() {
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
              <Form.Control type="text" id="productId" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productShortDescription">
              Short Description "
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" id="productShortDescription" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productEditorialDescriprion">
              Editorial Description
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" id="productEditorialDescriprion" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Category
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Brand
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productSku">
              SKU
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" id="productSku" />
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
            <Form.Label column sm="2">
              Size
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Gender
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Unit Price
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Price Currency
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              In Stock
            </Form.Label>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2" htmlFor="productImageUrl">
              Image Url
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" id="productImageUrl" />
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
