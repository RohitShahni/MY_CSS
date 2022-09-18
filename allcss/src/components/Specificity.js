import React from 'react'
import './Specificity.css';
const Specificity = () => {
  return (
    <div id='div-Specificity'>
      <h1>Specificity</h1>
      <button id='btn-Specificity'>
        <a href='https://www.youtube.com/watch?v=m5H0Ge4y614' target='blank'>watch video</a>
      </button><br />

      <div className='div' id='div1'>
        <p className='red' id='blue'>Specificity Table</p>
      </div>
      <div className='div'>
        <p className='red'> . 10,000 point to !importaint</p>
        <p className='red'>. 1000 to inline</p>
        <p className='red'>. 100 to id </p>
        <p className='red'>. 10 to class, attribute or pseudo-class</p>
        <p className='red'>. 1 for element selector and pseudo-elements</p>
        <p className='red'>.0 to universal selector</p>
      </div>
    </div>
  )
}

export default Specificity;