import React from 'react';
import './App.css';

import Home from './pages/Home';
import ModalPool from './components/ModalPool';

function App() {
  return (
    <div className="App">
      <Home />

      <ModalPool/>
    </div>
  );
}

export default App;
