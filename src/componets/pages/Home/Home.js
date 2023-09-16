
import './index.scss'
import Pic from '../../images/pic1.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons'
import  { Link } from 'react-router-dom'
import { faBook } from '@fortawesome/free-solid-svg-icons'



const Home = () => {
   return (
    <>
    <div className="main-header">
      <div className="second-header">
      <div className="header-info">
      <h1>Welcome to my Blog</h1>
     
        <h2>So these questions have been going through my mind lately:</h2>
       <Link to="./section2">
         <h3>
          Is it possible to become a twicth streamer and a devloper at the same time?
        </h3>
        </Link>
       <Link to='./blog'> 
       <h3>What's more challenging: streaming or becoming a developer?</h3>
        </Link>
       <Link to="./section3">
       <h3>Is taking a gap year a good idea to improve your skills as a developer?</h3> 
       </Link>
    
    </div>
      </div>
       <div className="image-section">
        <img src={Pic} alt="gjost time" />
         </div>
          
          <div className='my-links'>
          <a href='https://www.twitch.tv/theghostking2003'>
            <h2>Follow  me on Twicth<FontAwesomeIcon icon={faTwitch}  beatFade   size="lg"/></h2>
            
           </a>

         <a href='https://www.instagram.com/reabetswetheghost/'>
          <h2>Follow me on Instagram<FontAwesomeIcon icon={faInstagram} beatFade size="lg"/></h2>
         </a>

         </div>
    <div className='blog link'>
         <Link to='/blog'>
         <h2> Read Blog Now<FontAwesomeIcon icon={faBook} beatFade  size='lg'/></h2>
         </Link>
    </div>
      
</div>

 </>

     )
 
}

export default Home