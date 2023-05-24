import { NavLink, Outlet } from "react-router-dom"
import '../../App.scss'



const RootLayout = () => {
   return (
    <div className="rootLayout">
        <header>
         <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/blog" >Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Conatct</NavLink>
         </nav>
        </header>
       <main>
         <Outlet />
       </main>
    </div>
   )
 }
 
 export default RootLayout