import React from 'react';

function LineComponents({word, colors}) {

  let colorIndex = 0;

  return (
    <>
      {word.map((i, idx) => (
        <p key={idx} className='bg_text'>{(idx!==0&&idx!==word.length-1)&&<span>&nbsp;</span>}
          {i.map((t, tIdx) => (
            <span key={tIdx} className={`${colors[colorIndex++]}`}>
              {t}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

export default LineComponents;