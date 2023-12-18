import './Homepage.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavElement/NavElement';
import DisplayStocks from '../components/displayData/displayStocks';

export default function Homepage() {
  return (
    <main className="d-flex main-with-background mi-contenedor-con-max-width">
      <Col className="justify-content-center">
        <Navbar />
        <DisplayStocks />
        <Link to="/" className="d-flex justify-content-center">
          <button type="submit" className="mt-3 closeButtonH"> &crarr; </button>
        </Link>
      </Col>
    </main>
  );
}
