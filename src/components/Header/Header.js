import React from "react";
import { HeaderStyled } from "./HeaderStyled";

const Header = ({ handleToggleDarkMode }) =>{
    return(
        <HeaderStyled className="header">
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
        </HeaderStyled>
    )
}

export default Header;
