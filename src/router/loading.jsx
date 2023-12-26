import React from 'react';
import './loading.css';

function Loading() {
  return (
    <>
      <div className="spinner-grow d-flex align-items-start" role="status">
        <h1 className="ml-5 mb-0 h1-spinner">Loading...</h1>
      </div>
    </>
  );
}

export default Loading;
