import React from 'react'
import {useState} from 'react';


export default function Home() {

  const[counter,setCounter]=useState(1);

  function Up(){
    setCounter(counter +1);
  }
  
  const Down=()=>setCounter(prev=>prev-1);

  const style={
    textAlign:'center'
  }
  const btnStyle={
    width:'5%',
    fontSize:'30px'
  }
  return (
    <div style={style}>
      <h1>Home Page</h1>
      <h2>{counter}</h2>
      <button style={btnStyle} onClick={Up}>+</button>{" "}
      <button style={btnStyle} onClick={Down}>-</button>
    </div>
  )
}
