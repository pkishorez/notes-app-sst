import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./routes";

export const App = () => (
  <div className="App container py-3">
    <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
      <Navbar.Brand href="/" className="font-weight-bold text-muted">
        {" "}
        Scratch
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav activeKey={window.location.pathname}>
          <Link className="nav-link" to="/signup">
            Signup
          </Link>
          <Link className="nav-link" to="/login">
            login
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Routes />
  </div>
);
