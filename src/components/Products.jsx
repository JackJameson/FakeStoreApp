import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Carousel, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router";

function Products() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      });
  }, []);

  if(loading) {
    return <div>Loading...</div>;
  }
  if(error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Hi, welcome to the 🏠 page!</h3>
          <p>
            This app will let you see all of the very important fake products
          </p>
        </Col>
      </Row>

      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} style={{ height: '300px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
              <Card.Link href={`/products/${product.id}`}>View Details</Card.Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
