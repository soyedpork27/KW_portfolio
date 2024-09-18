import {createContext, useState} from 'react';

// 1. context 생성
export const modalContext = createContext();

// 2. contextProvider 생성
export const ModalProvider = ({children}) =>{

  const [isModalUse, setIsModalUse] = useState(false);

  const [modalData, setModalData] = useState(0);

  const handleModalUse = (data) => {
    setIsModalUse((prev) => (!prev));
    if(data){
      setModalData(data);
    }else{
      setModalData(0);
    }
  }

  const handleModalData = (data) => {
    setModalData({...data});
  }

  return <modalContext.Provider value={{isModalUse, modalData, handleModalUse ,handleModalData}} >{children}</modalContext.Provider>

};