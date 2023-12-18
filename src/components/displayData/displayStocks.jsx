import './displayStocks.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { incrementCount, stocksData } from '../../redux/stocks/stockSlice';

export default function DisplayStocks() {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks.stocks);
  const [searchStock, setSearchStock] = useState('');
  const [showComponent, setShowComponent] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);

  useEffect(() => {
    if (!stocks.length) {
      dispatch(stocksData());
    }
  }, [dispatch, stocks.length]);

  const filteredStocks = stocks.filter((stock) => stock.name
    .toLowerCase()
    .includes(searchStock.toLowerCase()));

  const middleIndex = Math.ceil((filteredStocks.length / 2));

  const handleIncrementViews = (symbol) => {
    setTimeout(() => {
      dispatch(incrementCount({ symbol }));
    });
  };

  const handleMouseOver = () => {
    setShowComponent(true);
  };

  const handleMouseOut = () => {
    setShowComponent(false);
  };

  const handleFocus = () => {
    setShowComponent(true);
  };

  const handleBlur = () => {
    setShowComponent(false);
  };

  const handleSelect = (index) => {
    setHoverItem(index);
  };

  const handleSelectLeave = () => {
    setHoverItem(null);
  };

  return (
    <Container>
      <div className="d-flex justify-content-center w-100">
        <div
          className="d-flex justify-content-center mb-3 mt-3 search-container"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <i className="bi bi-search search-icon" />
          {showComponent && (
            <div
              className={`search-input-container justify-content-center align-item-center  ${showComponent ? 'show' : ''}`}
              style={{ display: 'block' }}
            >
              <input
                type="text"
                placeholder="Search Stock"
                value={searchStock}
                onChange={(e) => setSearchStock(e.target.value)}
                className="border border-0 rounded p-2 search-input"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          )}
        </div>
      </div>

      <Row>
        <Col className="p-0">
          {/* Render the first half of the list items in the first column */}
          <ul className="list-group">
            {filteredStocks.slice(0, middleIndex).map((stock, index) => (
              <li
                key={stock.symbol}
                className={`list-group-item p-0 first-column ${
                  index % 2 === 0 ? 'even' : 'odd'
                }`}
                onMouseEnter={() => handleSelect(index)}
                onMouseLeave={() => handleSelectLeave(null)}
                style={{ backgroundColor: hoverItem === index ? '#e6e6e6' : '' }}
              >
                <Link
                  to={`/detail/${stock.symbol}/${stock.name}/${stock.price}/${stock.change}/${stock.dayLow}/${stock.dayHigh}/${stock.marketCap}/${stock.volume}/${stock.exchange}`}
                >
                  <button
                    type="submit"
                    onClick={() => handleIncrementViews(stock.symbol)}
                    className="stocks-btn"
                  >
                    {stock.symbol}
                    {' '}
                    -
                    {' '}
                    {stock.price}
                    {' '}
                    Views:
                    {' '}
                    {stock.views}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </Col>

        <Col className="p-0">
          {/* Render the second half of the list items in the second column */}
          <ul className="list-group">
            {filteredStocks.slice((middleIndex)).map((stock, index) => {
              const newIndex = index + middleIndex;
              return (
                <li
                  key={stock.symbol}
                  className={`list-group-item p-0 second-column ${
                    newIndex % 2 !== 0 ? 'even' : 'odd'
                  }`}
                  onMouseEnter={() => handleSelect(newIndex)}
                  onMouseLeave={() => handleSelectLeave(null)}
                  style={{ backgroundColor: hoverItem === newIndex ? '#e6e6e6' : '' }}
                >
                  <Link
                    to={`/detail/${stock.symbol}
                  /${stock.name}/${stock.price}/${stock.change}
                  /${stock.dayLow}/${stock.dayHigh}/${stock.marketCap}
                  /${stock.volume}/${stock.exchange}`}
                  >
                    <button
                      type="submit"
                      onClick={() => handleIncrementViews(stock.symbol)}
                      className="stocks-btn"
                    >
                      {stock.symbol}
                      {' '}
                      -
                      {' '}
                      {stock.price}
                      {' '}
                      Views:
                      {' '}
                      {stock.views}
                    </button>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
