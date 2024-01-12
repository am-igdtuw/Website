import React from 'react';
import './loader.css'; 
import logo from './AM logo rm removebg-preview.png';

const Loader = () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="loader.css" />
        <title>Document</title>
      </head>
      <body>
        <div id="container">
          <div className="divider" aria-hidden="true"></div>
          <p className="loading-text" aria-label="Loading">
            <span className="letter" aria-hidden="true">
              <img src={logo} alt="Logo" className='logolo' />
            </span>
            <span className="letter" aria-hidden="true">s</span>
            <span className="letter" aria-hidden="true">s</span>
            <span className="letter" aria-hidden="true">e</span>
            <span className="letter" aria-hidden="true">t</span>
            <span className="letter" aria-hidden="true">m</span>
            <span className="letter" aria-hidden="true">e</span>
            <span className="letter" aria-hidden="true">r</span>
            <span className="letter" aria-hidden="true">k</span>
            <span className="letter" aria-hidden="true">l</span>
            <span className="letter" aria-hidden="true">e</span>
          </p>
        </div>
      </body>
    </html>
  );
};

export default Loader;
