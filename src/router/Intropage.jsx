import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from './loading';
import './Homepage.css';

export default function Intropage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [1000]);
  }, []);

  return (
    <main className="main-with-background mi-contenedor-con-max-width d-flex flex-column align-items-center">
      <Row className="d-flex flex-column justify-content-center align-items-center title-container">
        <h2 className="h2-editor">Index Dashboard</h2>
      </Row>
      <div className="d-flex flex-column justify-content-center align-items-center stock-container">
        {
          loading
            ? <Loading loading={loading} />
            : (
              <>
                <div className="d-flex flex-column justify-content-center align-items-center stock-container">
                  <Row>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/homepage">
                        <button className="index-button" type="submit">NYSE INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/coomingsoon">
                        <button className="index-button" type="submit">Crypto INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/coomingsoon">
                        <button className="index-button" type="submit">NYSE INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                  </Row>
                  <Row>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/coomingsoon">
                        <button className="index-button" type="submit">NYSE INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/coomingsoon">
                        <button className="index-button" type="submit">NYSE INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/coomingsoon">
                        <button className="index-button" type="submit">NYSE INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                  </Row>
                  <Row>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/coomingsoon">
                        <button className="index-button" type="submit">NYSE INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/coomingsoon">
                        <button className="index-button" type="submit">NYSE INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                    <article className="card-with-background d-flex flex-column justify-content-center align-items-center">
                      <Link to="/coomingsoon">
                        <button className="index-button" type="submit">NYSE INDEX</button>
                      </Link>
                      <p className="p-1 pTagcontenedor">
                        in this index you can find stocks like: apple,meta,alphabet,
                        etc...
                      </p>
                    </article>
                  </Row>
                </div>
              </>
            )
        }
      </div>
    </main>
  );
}
