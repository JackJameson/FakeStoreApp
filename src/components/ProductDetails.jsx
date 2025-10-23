import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  if (!product) {
    return <div>No product found.</div>;
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://fakestoreapi.com/carts/${id}`
      );
      console.log(response.status);
      alert("Product deleted successfully!");
      navigate("/products");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Failed to delete the product.");
    }
  };

  function handleCart() {
    alert("Product deleted successfully!");
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
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
            <div className="px-3 pb-3 d-flex justify-content-center">
              <Button variant="primary" className="me-2" onClick={handleCart}>
                Add To Cart
              </Button>
              <Button variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
