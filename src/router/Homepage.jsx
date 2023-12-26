import './Homepage.css';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavElement/NavElement';
import DisplayStocks from '../components/displayData/displayStocks';
import Loading from './loading';

export default function Homepage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [1000]);
  }, []);
  return (
    <main className="d-flex main-with-background mi-contenedor-con-max-width">
      <Col className="justify-content-center">
        <Navbar />
        {loading
          ? <Loading loading={loading} />
          : (
            <>
              <DisplayStocks />
              <Link to="/" className="d-flex justify-content-center">
                <button type="submit" className="mt-3 closeButtonH"> &crarr; </button>
              </Link>
            </>
          )}
      </Col>
    </main>
  );
}
