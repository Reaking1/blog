import { NavLink, Outlet } from "react-router-dom"
import '../../App.scss'
import {Analytics} from '@vercel/analytics'



const RootLayout = () => {
   return (
    <div className="rootLayout">
        <header>
         <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/blog" >Blog</NavLink>
            <NavLink to="/about">About</NavLink>
           
         </nav>
        </header>
       <main>
         <Analytics />
         <Outlet />
       </main>
    </div>
   )
 }
 
 export default RootLayout