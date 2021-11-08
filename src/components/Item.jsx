import AttentionBox from 'monday-ui-react-core/dist/AttentionBox.js';
import React from 'react';

const Item = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Item</h1>
      <AttentionBox
        title="Hello  Apps!"
        text={JSON.stringify(props, null, 2)}
        type="success"
      />
    </div>
  );
};

export default Item;
