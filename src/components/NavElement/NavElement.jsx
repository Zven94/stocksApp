import './NavElement.css';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <header className="header navbar-container">
        <Container className="d-flex justify-content-center" bordered>
          <nav className="w-100">
            <Row className="d-flex justify-content-end w-100 mt-3">
              <Link to="/">
                <button className="watch-list" type="submit">
                  <i className="bi bi-eye" />
                </button>
              </Link>
              <Link to="/">
                <button className="about-us" type="submit">About Us</button>
              </Link>
            </Row>
            <Row className="d-flex justify-content-center">
              <h2> NYSE INDEX </h2>
            </Row>
          </nav>
        </Container>
      </header>
    </>
  );
}
