import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

const Input = (props, ref) => {
  const [value, setValue] = useState('');
  const refInput = useRef();

  // useEffect(() => {
  // })

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        refInput.current.focus();
      },
    }),
    []
  );

  console.log(ref, refInput);

  return <input ref={refInput} onChange={(e) => props.onChange(e.target.value)} />;
};

export default () => {
  const r1 = useRef();
  const r2 = useRef();

  const MInput = forwardRef(Input);

  return (
    <React.Fragment>
      <MInput ref={r1} onChange={(x) => console.log('1:', x, r1)} />
      <button onClick={() => r1.current.focus()}>focus 1</button>
      <MInput ref={r2} onChange={(x) => console.log('2:', x)} />
      <button onClick={() => r2.current.focus()}>focus 2</button>
    </React.Fragment>
  );
};
