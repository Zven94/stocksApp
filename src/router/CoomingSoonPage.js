import './Homepage.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavElement/NavElement';

export default function CommingSoon() {
  return (
    <main className="main-with-background mi-contenedor-con-max-width">
      <Col className="justify-content-center">
        <Navbar />
        <main className="main-with-background">
          <Navbar />
          <Container
            className="d-flex justify-content-center align-items-center stock-container"
            style={{
              width: '45vw', height: '80vh', color: 'white', fontSize: '1.75vw',
            }}
          >
            <Col md={8} className="d-flex flex-column justify-content-center align-items-start">
              <Row className="d-flex justify-content-center mb-2">
                <h2>Cooming Soon</h2>
              </Row>
              <Link to="/" className="d-flex justify-content-center">
                <button type="submit" className="mt-3 closeButton"> &crarr; </button>
              </Link>
            </Col>
          </Container>
        </main>
      </Col>
    </main>
  );
}
