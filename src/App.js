import './App.css';
import './style/floatingText.css';
import FloatingText from './components/FloatingText';

import Router from './components/Router';
import { ModalProvider } from './components/modalContext/modalContext';


function App() {

  const words = [
    {
      text : `setJob^(^true^)`,
      colors : ['beige', 'yellow', 'navy', 'yellow'],
      line : false
    },
    {
      text : `if(^isNeedDev^){/  FEDEV^.^push^(^‘전찬혁’^)^;/  return^ ;/}`,
      colors : ['purple', 'blue', 'purple', 'blue', 'white', 'beige', 'purple', 'brown', 'purple', 'white', 'purple', 'white','purple'],
      line : true
    },
    {
      text : `const`,
      colors : ['navy'],
      line : false
    },
    {
      text : `const ^[^job^, ^setJob^]^ = ^useState^(^flase^)^;`,
      colors : ['navy', 'purple', 'blue', 'white', 'beige', 'purple', 'white', 'beige', 'purple', 'navy', 'purple', 'white'],
      line : false
    },
    {
      text : `let`,
      colors : ['navy'],
      line : false
    },
    {
      text : 'this',
      colors : ['navy'],
      line : false
    }
  ];

  return (
    <>

      <ModalProvider>
        <Router />
      </ModalProvider>

      {/* 배경 박스 = fixed */}
      <div className='floating_bg'>

        {/* 배열에 따라 랜더링 */}
        {words.map((i,idx) => <FloatingText key={idx} word={i} index={idx} />)}
      </div>


    </>
  );
}

export default App;