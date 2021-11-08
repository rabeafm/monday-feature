//Explore more Monday React Components here: https://style.monday.com/
import { Routes, Route } from 'react-router-dom';
import 'monday-ui-react-core/dist/main.css';
import mondaySdk from 'monday-sdk-js';
import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Item from './components/Item';

const monday = mondaySdk();

const App = () => {
  const [state, setState] = useState({
    settings: {},
    context: {},
  });
  const [item, setItem] = useState();

  useEffect(() => {
    monday.listen('context', (res) => {
      setState({ settings: state.settings, context: res.data });
    });
  }, []);

  useEffect(() => {
    if (state.context.itemId) {
      monday
        .api(
          `query ($itemIds: [Int]) { items (ids: $itemIds) *`, //{ name id  column_values {
          //title : 'Timeline'
          //}  } }`,
          {
            variables: {
              itemIds: [state.context.itemId],
            },
          }
        )
        .then((res) => setItem(res.data));
    }
  }, [state]);
  console.log('rendered:', item);
  return (
    <Routes>
      <Route path="/item" element={<Item {...state} />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
};

export default App;
