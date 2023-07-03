import './context7.css'
import imgco7 from './img/ValerieDenisePhotos-54.jpg'
import video from './img/v1.mp4'
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';


export default function Context7() {
   
    return(
        <>
          <img src={imgco7} className='imgco7'/>
          <div className='one23'>
             <a href='#'><p> 1. <br/> 
grab your 30 day <i>free </i> <br/>
member trial</p></a>
             <a href='#'><p> 2. <br/> 
when you’re ready to go <i> deeper</i>, <br/>
join a guidance group  </p></a>
             <a href='#'><p> 3.<br/> 
make friends & create your <br/>
<i>most</i> meaningful work  </p></a>
          </div>

          <div class="about-video">
              <Video  id='video'  
                 controls={[ 'Fullscreen']}
              >
              <source src={video}/>
              </Video>
         </div>
          
        </>
    )
}