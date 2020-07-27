import React, { useState } from 'react';

import './App.css';
import sits from './api/sits'


function App() {
  const [reserved, setReserve] = useState([]);
  const [show, setShow] = useState(false)

  const reserveSit = (e) => {
      let id = e.target.innerText
      if(!reserved.includes(id) && sits[id].reserved !== true){
        let arr = [...reserved]
        arr.push(id)
        setReserve(arr)
        sits[id].reserved = true
      } else {
        alert("already reserved")
      }
  }

  const unreserveSit = (e) => {
      let id = e.target.value
      let arr = [...reserved]
      arr.splice(arr.indexOf(id), 1)
      setReserve(arr)
      sits[id].reserved = false
  }

  const handleShow = () => {
    setShow(!show)
  }
  return (
    <div>
      
      {/* displaying out sits */}
      <div className="sits">
        {sits.map((e) => {
          return (<div key={e.id} className="sit" style={e.reserved?{backgroundColor : "red"} : {backgroundColor: "green"}} onClick={(event) => reserveSit(event)}>{e.id}</div>)
        })}
      </div>
      {/* displaying basket */}
      <button onClick={handleShow} className="btn btn-primary basket-btn">My Basket</button>
      <div style={show?{display : "block"} : {display : "none"}}>
        <div className="basket-header">
          You Ordered: 
        </div>
        {reserved.map((e,i) => {
          return (<div key={i}>
            <div className="order"><span className="order-number">{e}</span><button value={e} onClick={(event) => unreserveSit(event)} className="btn btn-danger">remove</button></div>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
