import './App.scss'
import {  createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

//pages
import Home from './componets/pages/Home/Home'
import About from './componets/pages/About/About '
import Blog from './componets/pages/Blog/Blog'
import Section2 from './componets/pages/Blog/Section2'

//Layouts
import RootLayout from './componets/Layouts/RootLayout'
import Section3 from './componets/pages/Blog/Section3'


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path="/" element={<RootLayout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  
    <Route path='blog' element={<Blog />} />
    <Route path='section3' element={<Section3 />} />
  <Route path="section2" element={<Section2 />} />
</Route>

  )
)

function App() {
  return (
  
    
   <RouterProvider  router={router}/>
  );
}

export default App
