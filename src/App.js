import './App.scss'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

//pages
import Home from './componets/pages/Home/Home'
import About from './componets/pages/About/About '
import Blog from './componets/pages/Blog/Blog'

//Layouts
import RootLayout from './componets/Layouts/RootLayout'
//Sections
import Section2 from './componets/pages/Blog/Section2'
import Section3 from './componets/pages/Blog/Section3'
import Section4 from './componets/pages/Blog/Section4'
import Section5 from './componets/pages/Blog/Section5'
import Section6 from './componets/pages/Blog/Section6'


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<RootLayout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  
    <Route path='blog' element={<Blog />} />
    <Route path="section2" element={<Section2 />} />
    <Route path='section3' element={<Section3 />} />
  <Route path="section4" element={<Section4 />} />
  <Route path="section5" element={<Section5 />} />
  <Route path="section6" element={<Section6 />} />
</Route>

  )
)

function App() {
  return (
  
    
   <RouterProvider  router={router}/>
  );
}

export default App
