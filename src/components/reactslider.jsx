import React from 'react'

export  function Reactslider() {
  return (
    <div className="slidecontainer">
        <p>b. ¿Por cuántos años?</p>
        <input className='slider1' type="range" min="1" max="7" list='ticks1' defaultValue={1}/>
        <datalist id="ticks1">
          <option value="1" className="op1"></option>
          <option value="2" className="op2">5</option>
          <option value="3" className="op3">7</option>
          <div className="limite">
              <div className="op4">10</div>
              <div className="icon-star">*</div>
          </div>
          <option value="5" className="op5">12</option>
          <option value="6" className="op6">15</option>
          <option value="7" className="op7">20</option>
        </datalist>
    </div>
    
  )
}
