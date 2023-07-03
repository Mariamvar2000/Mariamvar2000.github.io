
import './App.css';
import Content from './Content';
import Logo from './img/Logo.png'
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import Context7 from './Context7'
import Content8 from './Content8';
import Day90planner from './Day90planner';
import { Content9 } from './Content9';
import { Content10 } from './Content10';
import { Content11 } from './Content11';
import Content12 from './Content12'
import Content13 from './Content13'
import Slider from './Slider';
import { useState } from 'react';
import {CiMenuBurger} from 'react-icons/ci'
import {AiOutlineClose} from 'react-icons/ai'


function App() {

const [showMenu,setShowMenue] = useState(false)

  const list = ['PODCAST','MEMBERSHIP','GUIDANCE GROUPS','CONFERENCE'];
 
  const lists =  list.map((el,index) => 
    <li key={index} className='items'>{el}</li>)

  return (
    <>
    <div className='mainDiv'>
    <img src={Logo} alt='' className='logos'/> </div>
    <div className='navbar'> 
      <div className='menuIcons' onClick={() => {
        setShowMenue(!showMenu)
      }}> {showMenu ? <AiOutlineClose />: <CiMenuBurger/>}
     </div>
     <ul className= {showMenu?'ul-items': 'ul-items-none'}> {lists}</ul>
   </div>
    
    <Content/>
    {/* <Carousel/> */}
    <Slider/>
    <Content2/>
   <Content3/>
   <Content4/>
   <Content5 />
   <Content6/>
   <Context7/>
   <Content8/>
   <Day90planner/>
   <Content9/>
   <Content10/>
   <Content11/>
   <Content12/>
   <Content13/>
    </>
    
  );
}

export default App;
