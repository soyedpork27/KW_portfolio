import React, {useState, useEffect} from 'react';

import '../../style/fliptext.css';

function FlipText({texts, size, sec}) {
  
  const style = {
    wrap : {
      height : `${size}px`,
    },
    visible : {
      fontSize : `${size}px`,
      opacity : '1',
      transform : 'rotateX(0)',
      bottom : '0',
    },
    invisible : {
      opacity : '0',
      fontSize : `${size}px`,
      bottom : `-${size}px`,
      transform : 'rotateX(-180deg)',
    }
  }

  const [rotate,setRotate] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotate((prev) => (prev + 1) % texts.length);
    }, sec);

    return () => clearInterval(intervalId);
  }, [texts.length, sec]);


  return (
    <>

      <div className='text_wrap' style={style.wrap}>
        {texts.map((i,idx) => <p key={idx} style={rotate===idx?style.visible:style.invisible} className='text' >{i}</p>)}
      </div>

    </>
  );
}

export default FlipText;