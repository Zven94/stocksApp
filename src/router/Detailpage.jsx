import { Link, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from '../components/NavElement/NavElement';
import './Detailpage.css';

export default function Detailpage() {
  const {
    symbol, name, price, change, dayLow, dayHigh, marketCap, volume, exchange,
  } = useParams();
  return (
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
            <h2>Stock Detail</h2>
          </Row>
          <Row className="d-flex justify-content-left align-items-center">
            <p className="pDetail">
              Symbol:
              {' '}
              {symbol}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="pDetail">
              Name:
              {' '}
              {name}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="pDetail">
              Price:
              {' '}
              {price}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="pDetail">
              Daily change:
              {' '}
              {change}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="pDetail">
              Min value today:
              {' '}
              {dayLow}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="pDetail">
              Max value today:
              {' '}
              {dayHigh}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="pDetail">
              Market Cap:
              {' '}
              {marketCap}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="pDetail">
              Vol:
              {' '}
              {volume}
            </p>
          </Row>
          <Row className="d-flex justify-content-center">
            <p className="pDetail">
              Exchange:
              {' '}
              {exchange}
            </p>
          </Row>
          <Link to="/homepage" className="d-flex justify-content-center">
            <button type="submit" className="mt-3 closeButton"> &crarr; </button>
          </Link>
        </Col>
      </Container>
    </main>
  );
}
