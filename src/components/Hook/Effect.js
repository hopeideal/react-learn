import React, { useState, useEffect, useRef } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   console.log('effect');
  //   // const timer = setTimeout(() => {
  //   //   setCount((count) => count + 1);
  //   //   console.log('setCount');
  //   // }, 1000);
  //   // return () => {
  //   //   clearTimeout(timer);
  //   //   console.log('回收');
  //   // };
  //   const id = setInterval(() => {
  //     setCount(count => count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);

  //   // return () => {
  //   //   console.log('清除');
  //   // }
  // }, [count]);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount2(count2 => count2 + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, [count2]);

  const countRef = useRef();
  countRef.current = count;

  useEffect(() => {
    const id = setInterval(() => {
      console.log(countRef.current);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  console.log('render');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h2>{count}</h2>
      <h2>{count2}</h2>
    </div>
  );
};
