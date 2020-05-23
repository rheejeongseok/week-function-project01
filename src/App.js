import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
    const msg = props.msg;
    const dt = msg.split("\n");
    console.log(dt)
    const print = dt.map((d) => {
        console.log(d)
        return <div>{d}</div>
    })
  return (
   <div>
     <h1>이름 : {props.name}</h1>
     <h1>성별 : {props.sex}</h1>
     <h1>나이 : {props.age}</h1>
       <h1>{print}</h1>
   </div> 
  );
}

export default App;
