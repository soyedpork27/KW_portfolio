import React from 'react';

function ColorComponent({word, colors}) {

  let colorIndex = 0;

  return (
    <p className='bg_text'>
      {word.map((i, idx) => (<span key={idx} className={`${colors[colorIndex++]}`}>{i}</span>))}
    </p>
  );
}

export default ColorComponent;