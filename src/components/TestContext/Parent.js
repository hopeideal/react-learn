import React from 'react';
import Child from './Child';

export default class Parent extends React.Component {
  render() {
    return (
      <>
        <div>this is parent.</div>;
        <Child />
      </>
    );
  }
}
