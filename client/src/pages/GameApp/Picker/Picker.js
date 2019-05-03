import React from 'react';

import './Picker';

const Picker = ({color, colorIndex, clickHandler, incrementCount}) => {
  let className = color + ' picker';
  return (
    <div className={className}
    onClick={(e) => {
      incrementCount();
      clickHandler(colorIndex);
    }}
    ></div>
  );
}

export default Picker;