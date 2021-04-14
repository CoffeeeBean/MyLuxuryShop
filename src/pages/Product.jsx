import { useState } from "react";
import Col from "react-bootstrap/Col";

export default function Product({
  id,
  shortDescription,
  imageUrl,
  editorialDescription,
  brand,
  unitPrice,
  priceCurrency,
}) {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={imageUrl}
        alt={`product_img_${id}`}
        className="product"
        onClick={handleShowDetails}
        style={{ cursor: "pointer" }}
      />
      <p>{shortDescription}</p>
      {showDetails ? (
        <div>
          <h3>{brand}</h3>
          <p>{editorialDescription}</p>
          <p>
            {priceCurrency} {unitPrice}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </Col>
  );
}
