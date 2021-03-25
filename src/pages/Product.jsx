import Col from "react-bootstrap/Col";

export default function Product({ id, shortDescription, imageUrl }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img src={imageUrl} alt={`product_img_${id}`} />
      <p>{shortDescription}</p>
    </Col>
  );
}
