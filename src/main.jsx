import React from 'react'
import ReactDOM from 'react-dom/client';
import RafaHeader from './Rafael/RafaHeder.jsx';
import RafaOfertas from './Rafael/RafaOfertas.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import RafaFooter from './Rafael/rafaFooter.jsx';


{
  /* The following line can be included in your src/index.js or App.js file */
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RafaHeader/>
    <RafaOfertas/>
    <RafaFooter/>
  </React.StrictMode>
)
