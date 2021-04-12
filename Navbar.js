import React,{useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import  './Navbar.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import {SidebarData} from './SidebarData'
import { IconContext } from 'react-icons/lib';
// import useThemeSwitcher from './components/useThemeSwitcher';


function Navbar(){ 
    // const ThemeSwitcher = useThemeSwitcher();  
        const [sidebar, setSidebar] = useState(false);
        const showSidebar = () => setSidebar(!sidebar);
        return(

            <div>   
         <IconContext.Provider value={{color:'#fff'}} > 
          <div className="navbar">
              <Link to="#" className="menu-bars" onClick={showSidebar}>
                  <FaIcons.FaBars />
           
              </Link>
            
              </div>
       
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      
          <ul className="nav-menu-items" onClick={showSidebar}>
              
              <li className="navbar-toggle">
                  
                  <Link to="#" className="menu-bars">
                  
                      <AiIcons.AiOutlineClose/>
                      
                  </Link>
                  
              </li>
              
              {SidebarData.map((item, index) =>{
                  
                  return(
                      
                      <li key={index} className={item.classname}>
                          
                          <Link to={item.path}>
                              
                              {item.icon}
                              
                              <span>{item.title} </span>
                             
                          </Link>
                           {/* {ThemeSwitcher} */}
                      </li>
                      
                  )
                  
              })}
              
          </ul>
          
      </nav>
      
      </IconContext.Provider>
      
      </div> 
        );
    }
export default Navbar;

