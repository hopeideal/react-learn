import React from 'react';
import Grandson from './Grandson';

export default class Parent extends React.Component {
  render() {
    return (
      <>
        <div>this is child.</div>;
        <Grandson />
      </>
    );
  }
}
