import React from 'react';
import '../style/floatingText.css';
import LineComponents from './Text/LineComponents';
import ColorComponent from './Text/ColorComponent';

const FloatingText = ({ word, index }) => {

  let text = word.text;

  // 이 변수에 따라 줄바꿈을 시행하는 컴포넌트로 랜더링
  let line = false;

    if (word.line){
      line = true;
      text = text.split('/');
      text = text.map(i => i.split('^'));
    }else{
      text = text.split('^');
    }


  return (
    <div className={`floating-letter-${index+1}`}>
      {/* {line && <LineComponents word={text} colors={word.colors} />}
      {!line && <ColorComponent word={text} colors={word.colors} />} */}

      {line?
        <LineComponents word={text} colors={word.colors} />
        :
        <ColorComponent word={text} colors={word.colors} />
      }


    </div>
  );
};

export default FloatingText;