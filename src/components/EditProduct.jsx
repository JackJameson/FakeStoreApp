import { useState, useEffect } from "react";
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

// const initialFormData = {
//   title: "",
//   price: "",
//   description: "",
//   category: "",
// };

function EditProduct() {
  // const [formData, setFormData] = useState(initialFormData);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://fakestoreapi.com/products", formData);
      console.log("Product Edited:", response.data);
      alert("Product Edited successfully!");
      // setFormData(initialFormData);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to Edit product. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <h2 className="mb-4 text-center">Edit Product</h2>

          {error && <Alert variant="danger">{error}</Alert>}

          <div className="p-4 border rounded shadow-sm bg-white">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={7}>
                  <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price ($)</Form.Label>
                    <Form.Control
                      type="number"
                      name="price"
                      value={formData.price}
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
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={formData.category}
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
                    Editing...
                  </>
                ) : (
                  "Edit Product"
                )}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EditProduct;
