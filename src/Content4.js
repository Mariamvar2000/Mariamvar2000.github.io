import './content4.css'
import img1 from './content4imgs/GG-2.png'
import img2 from './content4imgs/Conf-Gif.gif'
import img3 from './content4imgs/Membership-2.png'

export default function Content4 () {
    return (
        <>
        <div className='main4div'>
            <div className='div4-1'>
                 <h1> &nbsp; &nbsp; &nbsp; &nbsp;:) &nbsp; what we do:</h1> 
                 <img src={img1} alt=''/>
                 <h1 >&mdash;   visit the blog</h1>
                 </div>
                  
           
            <div className='div4-2'> 
            <img src={img3} alt=''className='img4-2'/>
            <img src={img2} alt='' className='img4-3'/>
            </div>
        </div>
     
     
      <div className='keter'>  < p className='keter'>•••</p></div>

      

      <hr className='gic'/>

        </>
    )
}