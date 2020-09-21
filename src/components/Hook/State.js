import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  console.log('render');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h2>{count}</h2>
    </div>
  );
};
