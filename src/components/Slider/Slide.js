import React from 'react';
import './slide.css';

export default function Slide(props) {
  return (
    <div className="slide-out">
      <img src={props.source} />
      <div className="image">slide: {props.index}</div>
    </div>
  );
}
