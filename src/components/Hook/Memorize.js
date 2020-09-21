import React, { useState, useEffect, useCallback, useMemo } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {

  // }, [count]);

  const inc = useCallback(() => {
    console.log(count);
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <button onClick={inc}>+1</button>
      <p>{count}</p>
    </div>
  )
}