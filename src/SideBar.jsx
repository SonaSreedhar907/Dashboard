import React from 'react'
import {BsCart3} from 'react-icons/bs'
import { MdOutlineDashboard } from "react-icons/md";
import { PiFlowerTulip } from "react-icons/pi";
import { MdOutlinePostAdd } from "react-icons/md";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
// import { BiLogOutCircle } from "react-icons/bi";

function SideBar() {
  return (
   <aside id='sidebar'>
    {/* title */}
       <div className="sidebar-title">
        <div className="sidebar-brand">
            <BsCart3 className='icon_header'>SHOP</BsCart3>
        </div>
        <span className='icon close_icon'>X</span>
       </div>

       <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
           <a href="">
           <MdOutlineDashboard className='icon'/>Dashboard
           </a>
        </li>

        <li className='sidebar-list-item'>
           <a href="">
           <PiFlowerTulip className='icon'/>Perks
           </a>
        </li>

        <li className='sidebar-list-item'>
           <a href="">
           <MdOutlinePostAdd className='icon'/>Addons
           </a>
        </li>

        <li className='sidebar-list-item'>
           <a href="">
           <BiSolidMessageSquareAdd className='icon'/>FAQ
           </a>
        </li>

        <li className='sidebar-list-item'>
           <a href="">
           <MdOutlineSupportAgent className='icon'/>Support
           </a>
        </li>
       </ul>

{/* <br/>
<br/>
<br/>
<br/>
       <div className="sidebar-title">
        <div className="sidebar-brand">
            Logout <BiLogOutCircle/>
        </div>
     
       </div> */}
   </aside>
  )
}

export default SideBar