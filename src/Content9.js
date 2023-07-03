import './content9.css'
import im1 from './popular/im1.jpeg'
import im2 from './popular/im2.jpg'
import im3 from './popular/im3.png'
import im4 from './popular/im4.png'
import im5 from './popular/im5.jpg'
import im6 from './popular/im6.jpg'

export function Content9() {

    return(
        <>
          <h1 className='pop'>—  popular posts</h1>
          <div className='maco9'>
        <div className='maco-divs'>
          <div> <img src={im1} alt=''/></div>  
          <p className='txt1-9'>how to become a paid <br/> keynote speaker </p>
          <p className='txt2-9'>Joanna Waterfall </p>
         </div>
         <div className='maco-divs'>
          <div> <img src={im2} alt=''/></div>  
          <p className='txt1-9'>pepperdine alumna <br/> fulfilling dreams & <br/> creating new ones </p>
          <p className='txt2-9'>Ella London </p>
         </div>
         <div className='maco-divs'>
          <div> <img src={im3} alt=''/></div>  
          <p className='txt1-9'>cafe gratitude coworkers <br/> use this practice with <br/> each other to connect & <br/> feel seen </p>
          <p className='txt2-9'>Terces Engelhart </p>
         </div>
         <div className='maco-divs'>
          <div> <img src={im4} alt=''/></div>  
          <p className='txt1-9'>how these sisters built an <br/> eco-friendly laundromat <br/> that’s making us never <br/> look at laundry the same <br/> way again </p>
          <p className='txt2-9'> Lauren Breiding</p>
         </div>
         <div className='maco-divs'>
          <div> <img src={im5} alt=''/></div>  
          
          <p  className='txt1-9'> how your enneagram <br/> type can be most effective <br/> & fulfilled at work</p>
          <p className='txt2-9'> Kadie Smith</p>
         </div>
         <div className='maco-divs'>
          <div> <img src={im6} alt=''/></div>  
          <p className='txt1-9'>this body is mine, this <br/> body is beautiful: a poem <br/> on embracing ourselves </p>
          <p className='txt2-9'>Arielle Estoria </p>
         </div>
          
    

          </div> 
          <div className='btn9div'> 
            <button className='btn9'>HEAD TO THE BLOG</button>
          </div>
           
        </>
    )
}