import './content2.css'
import welcome from './img/welcome-image.png'
import line from './img/Line-Separator.jpg'
export default function Content2() {
    return (
        <>
        <img src={welcome} className='welcome' alt=''/>
        <h1 className='content2-txt1'>we’re changing the way women work </h1>
        <h3 className='content2-txt2'>FOR WOMEN WHO CARE NOT ONLY ABOUT WHAT <br/>
THEY’RE BUILDING, BUT WHO THEY’RE BECOMING.
</h3>
<h3 className='content2-txt3'>At Yellow Co, we care about who you are as a human being AND how you express yourself through your work. Work culture today wasn’t created by us or for us. So we’re creating our own. Spaces where our whole selves are considered and offered space to thrive. Join us and allow us to support you as you create your most meaningful work and build a life you love.</h3>
 <div className='btndiv'> <button className='btns1'>EXPLORE MEMBERSHIP</button></div>
<img  src={line} alt='' className='line'></img>
<p className='content2-txt4'>AS SEEN ON</p>

        </>
    )
}