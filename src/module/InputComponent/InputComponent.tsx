import React, { useEffect, useState } from "react";
import styless from "./InputComponent.module.scss";

interface inputPropsType {
  inputType: string;
  placeholder: string;
  inputValue: string;
  inputOnChange:  (i:string) => void;
}

const InputComponent = (props: inputPropsType) => {
  const [errorClass, setErrorClass] = useState('');
  
  const { placeholder, inputValue, inputOnChange , inputType} = props;
  
  useEffect(() => {
    if(inputType === 'text' && inputValue.length < 4){
      setErrorClass(styless['error-class']);
      if(inputValue.length === 0){
        setErrorClass('');
      }
    }else if(inputType === 'number' && parseInt(inputValue) < 0){
      setErrorClass(styless['error-class']);
    }else{
      setErrorClass('');
    }
    
  }, [inputType,inputValue])
  

  return (
    <div className={styless["inputDiv"]}>
      <span> {placeholder} </span>
      <input 
      type={inputType} 
      placeholder={placeholder} 
      className={errorClass} 
      onChange={(e) => inputOnChange(e.target.value)} 
      value={inputValue} 
      />

      {/* <span style={{ textAlign: "end" }}>
        {"3 / " +  inputValue.length}
      </span> */}
    </div>
  );
};

export default InputComponent;
