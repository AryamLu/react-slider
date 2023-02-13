import React from 'react'

export function Reactslider() {
  return (
    <div className='curly-braces'>
      <span className='curly-braces-text'>Texto cualquiera</span>
      <svg className="curly-braces-svg" viewBox={`0 0 100 16`} xmlns="http://www.w3.org/2000/svg">
      <path
        d={`M 1 2
        L 1 7
        Q 1 10 4 10
        L 48 10
        L 50 15
        L 52 10
        L 96 10
        Q 99 10 99 7
        L 99 2`} stroke="black" fill="transparent" strokeWidth={1}/>
      </svg>
    </div>
    
  )
}
