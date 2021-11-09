import AttentionBox from 'monday-ui-react-core/dist/AttentionBox.js';
import TextField from 'monday-ui-react-core/dist/TextField';
import Loader from 'monday-ui-react-core/dist/Loader.js';
import React, { useState, useEffect } from 'react';
import mondaySdk from 'monday-sdk-js';

const monday = mondaySdk();

const Item = (props) => {
  const [state, setState] = useState({
    settings: {},
    context: {},
  });
  const [item, setItem] = useState();

  useEffect(() => {
    monday.listen('context', (res) => {
      setState({ settings: state.settings, context: res.data });
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (state.context.itemId) {
      monday
        .api(
          `query ($itemIds: [Int]) { items (ids: $itemIds) { id name column_values { id text title type value additional_info } } }`,
          {
            variables: {
              itemIds: [state.context.itemId],
            },
          }
        )
        .then((res) => setItem(res.data.items[0]));
    }
  }, [state]);
  if (item) console.log(item);

  return (
    <div>
      {item ? (
        <form>
          <h1>{item.name}</h1>
          <label htmlFor={item.column_values[0].id}>
            {item.column_values[0].title}:
            <input
              type="number"
              required={true}
              id={item.column_values[0].id}
              defaultValue={item.column_values[0].text}
            />
          </label>

          <label htmlFor={item.column_values[1].id}>
            {item.column_values[1].title}:
            <input
              type="number"
              required={true}
              id={item.column_values[1].id}
              defaultValue={item.column_values[1].text}
            />
          </label>

          <label htmlFor={item.column_values[2].id}>
            {item.column_values[2].title}:
            <input
              type="date"
              required={true}
              id={item.column_values[2].id}
              defaultValue={item.column_values[2].text.split(' ')[0]}
            />
            <input
              type="date"
              required={true}
              id={item.column_values[2].id}
              defaultValue={item.column_values[2].text.split(' ')[2]}
            />
          </label>

          <label htmlFor={item.column_values[3].id}>
            {item.column_values[3].title}:
            <input
              type="text"
              required={true}
              id={item.column_values[3].id}
              defaultValue={item.column_values[3].text}
            />
          </label>

          <label htmlFor={item.column_values[4].id}>
            {item.column_values[4].title}:
            <input
              type="text"
              required={true}
              id={item.column_values[4].id}
              defaultValue={item.column_values[4].text}
            />
          </label>

          <label htmlFor={item.column_values[5].id}>
            {item.column_values[5].title}:
            <input
              type="text"
              required={true}
              id={item.column_values[5].id}
              defaultValue={item.column_values[5].text}
            />
          </label>

          <label htmlFor={item.column_values[6].id}>
            {item.column_values[6].title}:
            <input
              type="text"
              required={true}
              id={item.column_values[6].id}
              defaultValue={item.column_values[6].text}
            />
          </label>

          <AttentionBox
            title="Item View!"
            text={JSON.stringify(item, null, 2)}
            type="success"
          ></AttentionBox>
        </form>
      ) : (
        <Loader svgClassName="loader-size-lg" />
      )}
    </div>
  );
};

export default Item;
