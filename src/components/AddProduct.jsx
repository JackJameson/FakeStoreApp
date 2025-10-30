import { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import axios from "axios";

const initialFormData = {
  title: "",
  price: "",
  description: "",
  category: "",
};

function AddProduct() {
  const [product, setProduct] = useState(initialFormData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://fakestoreapi.com/products", product);
      console.log("Product added:", response.data);
      alert("Product added successfully!");
      setProduct(initialFormData);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to add product. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <h2 className="mb-4 text-center">Add New Product</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <div className="p-4 border rounded shadow-sm bg-white">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={9}>
                  <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={product.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price ($)</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={product.price}
                      onChange={handleChange}
                      step="0.01"
                      min="0"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                variant="success"
                type="submit"
                disabled={loading}
                className="w-100 mt-3"
              >
                {loading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      className="me-2"
                    />
                    Adding...
                  </>
                ) : (
                  "Add Product"
                )}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AddProduct;
