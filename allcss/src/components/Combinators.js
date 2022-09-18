import React from 'react'
import './Combinators.css';

const Combinators = () => {
  return (
    <>
      <h1>this is combinators</h1>

      <div className='cotainer'>
        <div className='row'>
          <ul>
            <li className='item'><p>this is a paragraph inside li</p></li>
            <li className='item'><p>this is a paragraph inside li</p></li>

          </ul>
          <p>this is paragraph</p>
        </div>


        <p>this is another paragraph</p>
      </div>

      <p>this is outer paragraph</p>

    </>
  )
}

export default Combinators;