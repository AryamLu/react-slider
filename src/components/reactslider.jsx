import React from 'react'

export  function Reactslider() {
  return (
    <div class="slidecontainer">
        <p>b. ¿Por cuántos años?</p>
        <input className='slider1' type="range" min="1" max="7" list='ticks1'/>
        <datalist id="ticks1">
          <option value="1" class="op1"></option>
          <option value="2" class="op2">5</option>
          <option value="3" class="op3">7</option>
          <option value="4" class="op4">10</option>
          <option value="5" class="op5">12</option>
          <option value="6" class="op6">15</option>
          <option value="7" class="op7">20</option>
        </datalist>
    </div>
    
  )
}
