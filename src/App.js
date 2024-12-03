import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { Button, Card, Image, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import welcomeImage from "./img/table.jpg"; // Replace with your actual image path
import notFoundImage from "./img/notfound.jpg"; // Replace with your actual image path

// HomePage Component
const HomePage = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f8f9fa", // Light gray background
        color: "#343a40", // Dark gray text
        padding: "20px",
        textAlign: "center",
        border: "1px solid #dee2e6",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1>Welcome to Table Haven!</h1>
      <p>Your one-stop shop for premium tables for every occasion.</p>

      {/* Responsive Image */}
      <Image
        src={welcomeImage}
        alt="Beautiful table setup"
        fluid
        style={{ marginBottom: "20px", borderRadius: "10px" }}
      />

      {/* Shop Now Button */}
      <Button
        variant="primary"
        size="lg"
        style={{ boxShadow: "0px 4px 6px rgba(0, 123, 255, 0.4)" }}
      >
        Shop Now
      </Button>

      {/* Card Section */}
      <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Featured Table</Card.Title>
            <Card.Text>
              Explore our range of elegant dining tables perfect for your home.
            </Card.Text>
            <Button variant="secondary">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

// NotFound Component
const NotFound = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#ffffff", // White background
        color: "#6c757d", // Gray text
        textAlign: "center",
        padding: "40px",
      }}
    >
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={notFoundImage}
            alt="404 error illustration"
            fluid
            style={{ borderRadius: "10px" }}
          />
        </Col>
        <Col md={6}>
          <h1>404 - Page Not Found</h1>
          <p>
            Oops! It seems like you've wandered off track. But don't worry, we
            can help you find your way back to the best tables in town.
          </p>
          <NavLink to="/" className="btn btn-primary" style={{ margin: "10px" }}>
            Back to Home
          </NavLink>
          <Button variant="secondary" href="/shop" style={{ margin: "10px" }}>
            Explore Tables
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

// App Component with Routing
const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav
          style={{
            backgroundColor: "#343a40",
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <NavLink
            to="/"
            style={{ color: "#f8f9fa", textDecoration: "none", fontSize: "20px" }}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            style={{ color: "#f8f9fa", textDecoration: "none", fontSize: "20px" }}
          >
            Shop
          </NavLink>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
