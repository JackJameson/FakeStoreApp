import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Welcome to the Fake App Store 🏪</h3>
          <p>
            This app will let you see all of the very important fake products
            that the FakeStoreAPI gives us.
          </p>
        </Col>
      </Row>
      <Link to="/product-listing">
        <Button variant="link" className="mt-5 text-decoration-none">
          Take me to the Product Listing!
        </Button>
      </Link>
    </Container>
  );
}

export default HomePage;
