import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreateProduct() {
  return (
    <div>
      <h2>Create Product</h2>
      <Form>
        <Form.Group>
          <Form.Label>Id</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Short Description</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Editorial Description</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Brand</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>SKU</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Model</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Color</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Material</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Size</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Unit Price</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Price Currency</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>In Stock</Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>Image Url</Form.Label>
        </Form.Group>
      </Form>
    </div>
  );
}
