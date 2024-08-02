import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import "./index.css"
import { App } from './App';

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App/>
  </>
);
