import React from "react";
import './Header.css';

const Header = ({ handleToggleDarkMode }) =>{
    return(
        <div className="header">
            <h1>Notes App</h1>
            <button 
                onClick={()=> 
                    handleToggleDarkMode(
                        (previousDarkMode)=> !previousDarkMode
                    )
                }
                className="toggle-btn"
            >
                Toggle Mode
            </button>
        </div>
    )
}

export default Header;
