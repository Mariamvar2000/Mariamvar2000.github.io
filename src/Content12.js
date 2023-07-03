import './content12.css'
import imm1 from './last4/image-asset(1).jpeg'
import imm2 from './last4/image-asset(2).jpeg'
import imm3 from './last4/image-asset(3).jpeg'
import imm4 from './last4/image-asset.jpeg'
import {FaPlay} from 'react-icons/fa'
import {FaInstagram,FaFacebookF,} from 'react-icons/fa'
import {FiLink2} from  'react-icons/fi'
import im102 from './last4/image-asset2.jpeg'


export default function content12 () {
    return (
        <>
           
           <p className='ptex'>—  HANG OUT WITH US ON THE GRAM</p>
           
        <div className='last4'> 
        <div><img alt='' src={imm4} /></div>
        <div className='second4'><img alt='' src={imm1} />
      < p className='btn4'><FaPlay/></p>
        
        </div>
        <div><img alt='' src={imm2} /></div>
        <div><img alt='' src={imm3} /></div>
        
        </div>
        
        <div className='c12btnn'><button className='c12btn'> HOP ON OUR EMAIL LIST </button></div>
        <div className='icons'><FaInstagram/> <FaFacebookF/> <FiLink2/> </div>
        <div><img alt='' className='img12gi' src={im102}/></div>
        <hr className='gic'/>
        </>
    )
}