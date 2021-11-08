import AttentionBox from 'monday-ui-react-core/dist/AttentionBox.js';

import React, { Fragment } from 'react';
const Item = () => {
  return (
    <Fragment>
      <h1>Item</h1>
      <AttentionBox
        title="Hello Monday Apps!"
        text="Let's start building your amazing app, which will change the world!"
        type="success"
      />
    </Fragment>
  );
};

export default Item;
