import './content6.css'
import item1 from './img/Copy+of+Deepti+Headshot+1.jpeg'
import item2 from './img/Screen+Shot+2022-04-28+at+10.34.04+AM.jpg'
import item3 from './img/Headshot.jpg'
import lineimg from "./img/Line-Separator.jpg";

 const Content6 = (() => {

    return (

        <>
        <i><p className='from'>from  the podcast</p></i>
        <div className='imgs3'> 
           <div className='imgs3Item'> <img src={item1} alt=''/> 
          <p className='p1'> CHOOSING YOURSELF</p>
          <p className='p2'>WITH DEEPTI VEMPATI, BREAKOUT STAR OF NETFLIX’S LOVE IS BLIND </p>
          <button className='btns5'>SEE EPISODE </button>
           </div>

           <div className='imgs3Item'> <img src={item2} alt=''/> 
          <p className='p1'>OWNING WHO YOU ARE (VS. <br/> WHO YOU THINK YOU SHOULD <br/> BE) </p>
          <p className='p2'> WITH REVEREND NICOLE GARCIA, FIRST LATINA TRANS WOMAN ORDAINED IN THE<br/> EVANGELICAL LUTHERAN CHURCH IN AMERICA</p>
          <button className='btns5'>SEE EPISODE </button>
           </div>

           <div className='imgs3Item'> <img src={item3} alt=''/> 
          <p className='p1'> BUILDING A DO-GOOD BRAND <br/> THAT ISN’T ATTACHED TO <br/> YOUR IDENTITY</p>
          <p className='p2'>WITH AMYANN CADWELL, FOUNDER & CEO OF <br/>  THE GOOD TRADE</p>
          <button className='btns5'>SEE EPISODE </button>
           </div>
        </div>
        <br/>

        <img src={lineimg} alt='' className='cont6img'/>
        <button className='btns2'>VIEW MORE PODCAST EPISODES</button>
        </>
    )
})

export default Content6 