import Link from "next/link";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const AppHeader: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Pinoy Market Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/dashboard">
              <span className="nav-link">My Dashboard</span>
            </Link>
            <Link href="/services">
              <span className="nav-link">Mobile services</span>
            </Link>
            <Link href="/documents">
              <span className="nav-link">Documents</span>
            </Link>
            <Link href="/sell">
              <span className="nav-link">Sell Items</span>
            </Link>
          </Nav>
          <Button variant="outline-light" className="d-flex">
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
