
import './content13.css'
import gic from './img/Line-separator-2.png'
import {FaInstagram,FaFacebookF} from 'react-icons/fa'
import {FiLink2} from 'react-icons/fi'

export default  function Content13() {
    return(
        <>
        <div className='hooter'> 
         <div className='div13'>
            <p className='hoot-mu'>Podcast </p>
            <p className='hoot-mu'> Blog</p>
            <p className='hoot-mu'> Events</p>
            <p className='hoot-mu'>EventsOur Story</p>

            
         </div>
         <div className='div13'>
            <p className='hoot-mu'> Guidance Groups</p>
            <p className='hoot-mu'> Core Values</p>
            <p className='hoot-mu'>What We Do </p>
            <p className='hoot-mu'> Our Impact</p>
            <p className='hoot-mu'> Our Vision</p>
         </div>
         <div className='div13'>
            <p className='hoot-mu1'> YELLOW CONFERENCE 2023</p>
            <p className='hoot-mu'> Terms & Conditions</p>
            <p className='hoot-mu'> Privacy Policy</p>
            <p className='hoot-mu'> Disclaimer</p>
            <p className='hoot-mu'>Contact </p>
         </div>
        </div>
        <div className='btn13div'> <button className='btn13'>MEMBER LOGIN</button></div>
        <div><img src={gic} alt='' className='lastgic'/></div>
      <h1 className='book'>BOOK OUR FOUNDER, JOANNA WATERFALL TO SPEAK AT YOUR NEXT <br/>EVENT! LEARN MORE HERE.</h1>
     < div className='icons2'><FaInstagram/> <FaFacebookF/> <FiLink2/> </div>
       <div className='last2'>
       <p> INSTAGRAM  •••  FACEBOOK •••  LOGIN ••• CONTACT</p>
       <p>SPREAD GOODNESS AND BLOOM &lt;3 YOU GOT THIS.</p> 
     </div>
     <p className='lastp'> COPYRIGHT YELLOW CO. 2023</p>
        </>
    )
}