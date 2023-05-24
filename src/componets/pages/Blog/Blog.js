import Stream from '../../images/pic6.jpg'
import './index.scss'
import Dev from '../../images/pic7.jpg'
import {Link} from 'react-router-dom'

import Dog from '../../images/The dog.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faBook } from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faTwitch} from  '@fortawesome/free-brands-svg-icons'

const Blog = () => {
  
 return (
  <>
  <div className='blog contanier'>
    <h1>What's more challenging: streaming or becoming a developer?</h1>
      <div className='blog-info1 text '>
        <p>Before we delve into the first question in detail, let's start by defining what a developer and a streamer are, and provide a proper description of the roles and responsibilities of both parties.</p>
        <p>Streamer: A streamer refers to someone who live-streams content, typically through platforms like Twitch, YouTube, or similar platforms. Streamers engage with their audience in real-time, broadcasting various activities such as gaming, creative arts, music, or just chatting. They often build a community of viewers who interact through chat, donations, subscriptions, and other forms of engagement. Streamers may entertain, educate, or provide a glimpse into their daily lives, depending on their chosen content niche.</p>
        <p>Developer: A developer, also known as a software developer or programmer, is an individual who creates software applications, websites, or other digital solutions. Developers write code using programming languages such as JavaScript, Python, Java, C++, or others, to build software that performs specific functions. They work with frameworks, libraries, and development tools to design, implement, test, and maintain software systems. Developers may specialize in various areas, such as front-end development, back-end development, full-stack development, mobile app development, or specialized domains like data science or artificial intelligence.</p>
        <p>While these roles may seem different, there can be overlap between being a streamer and developer. Some developers may choose to stream their coding sessions or create content related to programming and technology. In such cases, they combine their expertise in development with the streaming platform to share knowledge, engage with viewers, and create a community around programming.

It's worth noting that both roles require different skill sets, but they both offer opportunities for creativity, collaboration, and connecting with others who share similar interests in technology and entertainment.</p>
      </div>
      <img src={Dev} alt="developer" />
      <h1>The difficulties of being a developer:</h1>
      <div className='blog-info2 text'>
          <p>Honestly, the path to becoming a developer is quite challenging. There are several reasons why I say this. Firstly, the process of getting a job can be tough, whether you choose to be self-taught or pursue a university degree (although, if you have the resources and time, university can be a good starting point). Secondly, I have personally experienced the struggles of finding employment, and things have become even more difficult with the rise of AI technology. It's hard to believe that the demand for developers will remain high.
          As a student taking a gap year, I have been focusing on honing my skills and working on projects to gain recognition from recruiters. However, I have received numerous rejection emails from the companies I applied to. This has been a discouraging experience that pushed me to the point of giving up. Imposter syndrome is a real phenomenon that many individuals, including myself, have faced.
          So why did I give up? The main reason is a lack of confidence in applying to companies. Each day, I was bombarded with job requirements that included dreaded keywords that everyone dislikes:</p>
          <ul>
            <li>Must have at least…</li>
            <li>Has knowledge of the latest trends in…</li>
            <li>Experience using…</li>
          </ul>
          <p>Now, don't get me started on the years of experience. Companies have a peculiar way of testing potential employees in their job postings. As a victim of this trap, I realized that companies aren't really interested in hiring juniors. This is because it takes time and money to train juniors, and thus the trend is that companies prefer to hire seniors who are already comfortable in their current positions. It's frustrating that not going to university denies me the benefits of working in a graduate program or internship.

Hold on, someone might ask this seemingly silly question: 'But you live in South Africa, which has the highest demand for developers.' Unfortunately, in my case, that question is misleading. The reason behind it is related to the fact that I am in South Africa. As I say this, South Africa is a failed system that favors the rich rather than the poor. Even if you didn't attend a top-notch university, you lack privilege and connections. You and I don't stand a chance of getting a job.</p>
       <p>This brings me to another astonishing question that I recently came across. 80% of developers in the country are self-taught, and 10% have taken the moral high ground.

As I become more burdened by imposter syndrome, I am realizing that I have been acting strangely, demanding real-world projects. This career path can be demanding. Similarly, I have been trying to apply for certain job positions, which, in turn, have led me to start slacking off. It's hard being a developer without a job or support. All I have left is my title as a developer.

So, you might be thinking that this type of career is an immense challenge. Well, not exactly. I have come to realize that it has its ups and downs, primarily the downs that deal with its requirements.</p>
      <p>Well, what's the only solution for this? It's quite simple, really. I will continue working on my projects, seeking jobs that will help me host my projects, focusing on my streaming, and building my skills as a developer. This might sound strange to you, but I have truly come to see that this is one of the most challenging career paths to enter, with a high risk of unemployment. So, what about being a streamer?</p>
      </div>
      <img src={Stream} alt="streamer" />
      <h1>Difficulties of being a streamer:</h1>
      <div className='blog-info3  text'>
        <p>Now, when it comes to being a streamer, I have come to realize that it can be quite time-consuming, especially for those who are impatient. Just like developers who strive to stay updated with the latest tech trends, streamers need to play the latest games. However, it requires a significant amount of resources to get started. As a mobile gamer myself (which many streamers don't consider as 'real' gamers), I probably have the worst gear of all time. I've noticed that other streamers have high-quality microphones, record 1080p videos, and engage with their loyal followers. This has caused me a lot of frustration because I don't have the financial means to afford the same streaming equipment as other streamers.</p>
        <p>Now, I anticipate your questions (which may seem obvious): 'Why don't you get a job in the first place?' Well, sorry to burst your bubble, but I am from South Africa, a country where a significant number of young people are unemployed. And it doesn't stop there. The prices of tech in this country are often unreasonable. I mean, the cost of a proper gaming microphone, console, and don't even get me started on the price of a fully-built custom PC. Just thinking about it sends shivers down my spine due to the financial burden it would impose.</p>
        <p>Now that we've discussed the financial aspect, let's delve into the challenges of streaming. Streaming itself may seem simple: choose a game and play it. However, there is a peculiar feature on Twitch where they consider you to have one viewer or a new follower (although they may not actually watch the stream). What becomes problematic for most streamers, including myself, is the lack of recognition. No matter how many videos I stream, I fail to generate the same level of engagement as other channels. Even though I have my own streaming style for games like Fortnite and Call of Duty Mobile, I still face the following issues:</p>
        <ul>
          <li>I often have only one viewer, with a ratio of at least 10 unique viewers to one follower.</li>
          <li>The average follower rarely interacts or returns to watch my stream again (I refer to them as non-followers).</li>
          <li>Another frustration is that I can never stream a game at 720p because many viewers prefer watching streams at 4K.</li>
          <li>Most of my streamed videos receive a maximum of 10 views, and the highest number of views I've ever reached is around 24 (if my stream wasn't interrupted by poor internet connections). By the way, I use the Rain network for my Wi-Fi.</li>
        </ul>
       <p>Aside from these challenges, it is quite irritating when a follower wants to chat but only wants to discuss becoming a content creator. Please, for the love of God, do not fall for these types of followers who are only interested in scamming you or me for their own financial gain. They are truly disruptive and can sometimes be viewed as hackers intentionally targeting small content creators. Trust me when I say that the easy road is not worth it.</p>
      </div>
      <img src={Dog} alt="dog" />
      <h1>So, what’s harder:</h1>
      <div className='blog-info4 text'>
        <p>So, the big question is: which is more difficult, streaming or being a developer? Throughout my years as a developer and streamer, I have come to the realization that being a streamer is way more challenging than being a developer. Let me explain. When I started streaming, I quickly realized that no one would actually stay and chat with me. The sad reality is that it takes a lot of effort to grab the audience's attention and even get a simple "hi" from them. Now, moving on to another aspect, without a decent microphone and 1080p/720p video quality, I can understand why people might ignore my stream. I dislike the fact that I'm constantly trying to be like other streaming channels. What's even worse is that many times it comes down to what you can offer and how fully invested you are in this field.</p>
        <p>That being said, I want to focus more on the development side of things. So, I decided to explore the challenges and analyze my results. The path of a developer is more focused on building large project-based industry skills, which could provide better job opportunities if the world was not experiencing such great inflation. I must say, it's not an easy road to embark on, especially when the world is trying to push many people (including myself) into get-rich-quick schemes.</p>
      </div>
      <div className='next page'>
        <h3>If you enjoyed reading this please dont forgot to follow me on: <FontAwesomeIcon icon={faArrowAltCircleDown} beatFade /></h3> 
        <a href='https://www.instagram.com/reabetswetheghost/'><h3>Instagram <FontAwesomeIcon icon={faInstagram}  beatFade/></h3></a>
        <a href='https://www.twitch.tv/theghostking2003'><h3>Twitch <FontAwesomeIcon icon={faTwitch}  beatFade/></h3></a>
        <Link to='../section2' className='ink'><h3>Is it possible to become a twicth streamer and a devloper at the same time?<FontAwesomeIcon icon={faBook}  beatFade/></h3></Link>
      </div>
  </div>
  </>
 )

}

export default Blog