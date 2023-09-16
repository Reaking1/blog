import horror from "../../images/pic12.jpg"
import '../Blog/index.scss'
import {faInstagram, faTwitch} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.scss'


const About = () => {
  return (
  <>
  <h1>So you decided to know me well come on</h1>
  <div class="info blog text">
    
    <p>I am a streamer and developer who is eager to share my journey during these challenging times. I stream on Fridays and dedicate my time to coding from Monday to Thursday. Personally, I am interested in collaborating with clients and potential sponsors for channel content. There's more to me than just typing away, so I invite you to join me on my next stream, which is scheduled for Fridays.</p>
    
  </div>
  <img src={horror} alt="streaming icon"  />
  <div className='my-link'>
          <a href='https://www.twitch.tv/theghostking2003'>
            <h2>Follow  me on Twicth<FontAwesomeIcon icon={faTwitch}  beatFade   size="lg"/></h2>
            
           </a>

         <a href='https://www.instagram.com/reabetswetheghost/'>
          <h2>Follow me on Instagram<FontAwesomeIcon icon={faInstagram} beatFade size="lg"/></h2>
         </a>

         </div>
  </>
   
  )
}

export default About