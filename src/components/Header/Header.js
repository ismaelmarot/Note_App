import React from 'react';
import { HeaderStyled } from './HeaderStyled';
import { ButtonToggleStyled } from './ButtonToggleStyled';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ handleToggleDarkMode, icon }) =>{
    
    return(
        <HeaderStyled className="header">
            <h1>Notes App</h1>
            <ButtonToggleStyled 
                onClick={()=> 
                    handleToggleDarkMode(
                        (previousDarkMode)=> !previousDarkMode
                    )
                }
                className="toggle-btn"
            >
            {icon}   
            </ButtonToggleStyled>
        </HeaderStyled>
    )
}

export default Header;
