import React from 'react'

export  function Reactslider() {
  return (
    <div class="slidecontainer">
        <p>b. ¿Por cuántos años?</p>
        <input className='slider1' type="range" min="1" max="7" list='ticks1'/>
        <datalist id="ticks1">
          <option value="1"></option>
          <option value="2">5</option>
          <option value="3">7</option>
          <option value="4">10</option>
          <option value="5">13</option>
          <option value="6">15</option>
          <option value="7">20</option>
        </datalist>
    </div>
    
  )
}
