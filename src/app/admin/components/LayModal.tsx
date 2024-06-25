"use client";
import { useState,useEffect } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function Modal(props:any,) {
  const { children, title, stModal} = props;
  const [Modal, setModal] = useState(stModal);

  
  useEffect(()=>{
    setModal(stModal)
  }, [stModal]);

  const handleOnClick = () => {
    setModal(!Modal);
  }
  return (
  
  <div id="default-modal" aria-hidden="true" className={`${Modal ? "block" : "invisible"} fixed top-0 right-0 left-0 md:left-1/3 z-50 w-full`}>
    <div className="relative p-4 w-full max-w-2xl max-h-full">
      <div className="relative bg-white rounded-lg shadow">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-200">
          <h3 className="text-xl font-semibold text-black">
            {title}
          </h3>
          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={handleOnClick}>
            <FaRegCircleXmark />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <div className="w-full h-96">
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
  

  );
}