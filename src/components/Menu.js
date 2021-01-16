import React from 'react';
import { Link } from "react-router-dom";
  


const Menu = () => {
    return ( 
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/technologies">Technologies</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/github">Github</Link>
                    </li>
                    <li>
                        <Link to="/songs">Songs</Link>
                    </li>
                </ul>

            </nav>
        </header>
     );
}
 
export default Menu;