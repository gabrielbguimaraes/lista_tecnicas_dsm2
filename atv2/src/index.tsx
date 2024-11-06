import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Roteador from './componentes/roteador';
import Cliente from '../../../atv1/src/modelo/cliente';
import Pet from '../../../atv1/src/modelo/pet';

const clientes: Cliente[] = [];
const pets: Pet[] = [];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Roteador clientes={clientes} pets={pets} />
  </React.StrictMode>
);

reportWebVitals();
