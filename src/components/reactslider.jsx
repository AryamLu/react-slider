import React from 'react'

export  function Reactslider() {
  return (
    <div class="slidecontainer">
        <p>b. ¿Por cuántos años?</p>
        <input className='slider1' type="range" min="1" max="7" />
        <div class="slider-numbers">
            <div></div>
            <div>5</div>
            <div>7</div>
            <div>10</div>
            <div>12</div>
            <div>15</div>
            <div>20</div>
        </div>
    </div>
    
  )
}
