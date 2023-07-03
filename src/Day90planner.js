import './day90planner.css'
import imgday1 from './img/unsplash-image-DC_gMe5H95k.jpg'
import imgasset from './img/Line-separator-2.png'


export default function Day90planner() {

    return(
        <>
        <hr className='gic2'/>
         <div className='day90'> 
            <div className='day1'> <img src={imgday1} /> </div>
            <div className='day2'> <p> download our 90-day <br/> planner</p> 
               <p className='pto'> Get intentional about the upcoming 90 days with this free 90-day <br/> planner.</p>
               <button className='btns1'> DOWNLOAD NOW</button>
            </div>
         </div>
         <img src={imgasset} className='ass' />
        </>
    )
}