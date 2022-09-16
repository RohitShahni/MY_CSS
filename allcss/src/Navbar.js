import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Flexbox from './components/Flexbox';
import Grid from './components/Grid';
import Classes from './components/Classes';
import Pseudo from './components/Pseudo';
import Combinators from './components/Combinators';
import Specificity from './components/Specificity';
import Important from './components/Important';
import Boxmodel from './components/Boxmodel';
import Mediaqueries from './components/Mediaqueries';


const Navbar = () => {
  const [item, setItem] = useState(1);

  const fun = (number) => {
    // setItem(number);
    console.log(number)
    setItem(number)
    console.log(item)

  }
  const fun2 = (x) => {
    console.log("inside the fun2 and condition", x)
    switch (x) {
      case 1:
        return <Flexbox />;
        break;
      case 2:
        return <Grid />;
        break;
      case 3:
        return <Classes />;
        break;

      case 4:
        return <Pseudo />
        break;
      case 5:
        return <Combinators />
        break;

        case 6:
          return <Specificity />
          break;
          
          case 7:
            return <Important />
            break;

            case 8:
              return <Boxmodel />
              break;
              case 9:
                return <Mediaqueries />
                break;
    }
  }


  return (
    <div className='maincontainer'>
      <div className='maincontainer-item'>
        <button className='maincontainer-item_btn' onClick={() => { fun(1) }} >FlexBox</button>
        <button className='maincontainer-item_btn' onClick={() => { fun(2) }} > Grid</button>
        <button className='maincontainer-item_btn' onClick={() => { fun(3) }}> Classes & Selector</button>
        <button className='maincontainer-item_btn' onClick={() => { fun(4) }}> Pseudo</button>
        <button className='maincontainer-item_btn' onClick={() => { fun(5) }}> Combinators</button>
        <button className='maincontainer-item_btn' onClick={() => { fun(6) }}> Specificity</button>
        <button className='maincontainer-item_btn' onClick={() => { fun(7) }}> The important</button>
        <button className='maincontainer-item_btn' onClick={() => { fun(8) }}> Box Model</button>
        <button className='maincontainer-item_btn' onClick={() => { fun(9) }}>Media Queries</button>

      </div>

      {
        fun2(item)
      }


    </div>
  )

}

export default Navbar;

