import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch product details. Please try again later.");
        setLoading(false);
      });
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <Container>
      <Row>
        <Card>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "500px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Subtitle>{product.category}</Card.Subtitle>
            <Card.Text>${product.price}</Card.Text>
            <Card.Text>{product.description}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ProductDetails;
