import React from 'react'
import 
 {BsPersonCircle,BsJustify}
 from 'react-icons/bs'
 import { GoChevronDown } from "react-icons/go";

function Header() {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
            
        </div>
        <div className='header-right'>
           <button className='buttons'><BsPersonCircle className='icon'/>Sona Sreedhar</button>  
           <button className='buttons-two'><GoChevronDown/></button>
        </div>
    </header>
  )
}

export default Header
