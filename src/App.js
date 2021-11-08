import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import mondaySdk from 'monday-sdk-js';
import 'monday-ui-react-core/dist/main.css';
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from 'monday-ui-react-core/dist/AttentionBox.js';
import Item from './components/Item';
import Board from './components/Board';

const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: '',
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return (
      <Routes>
        <Route path="/item" element={<Item />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    );
  }
}

export default App;
{
  /*  */
}
