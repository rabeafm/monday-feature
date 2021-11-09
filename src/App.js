//Explore more Monday React Components here: https://style.monday.com/
import { Routes, Route } from 'react-router-dom';
import 'monday-ui-react-core/dist/main.css';
import React from 'react';
import './App.css';
import Board from './components/Board';
import Item from './components/Item';

const App = () => {
  return (
    <Routes>
      <Route path="/item" element={<Item />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
};

export default App;
