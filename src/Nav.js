import React from 'react';
import {Link} from 'react-router-dom';

    function Nav() {
        
        return(
            <nav>
                
                <ul className="nav-links">
                    <Link  to={"./About"}>
                        <li>
                            About
                        </li>
                    </Link>
                    
                    <Link to={"./Homepage"}>
                        <li>Homepage</li>
                    </Link>

                    <Link to={"./Form"}>
                        <li>Form</li>
                    </Link>
                    
                </ul>
            </nav>
        );

    }
      

export default Nav;