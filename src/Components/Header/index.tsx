import { faBars, faBell, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Nav from "react-bootstrap/esm/Nav";
import NavDropdown from "react-bootstrap/esm/NavDropdown";
import User from '../../assets/images/user.png'
import Sidebar from "../Sidebar";
import "./index.scss";

let Header = () => {

  // activate sidebar function
  let [toggled, setToggled] = React.useState(false)
  function toggleSidebar() {
    let sideBar = document.querySelector(".sidebar") as HTMLElement
    console.log(sideBar)
    if(sideBar != null){
      sideBar.style.marginLeft = toggled? '0rem' : '-15rem'
      setToggled(prev => !prev)
      
    }
  }

  return (
    <header className="d-flex justify-content-between align-items-center w-100 sticky-top py-0 px-4">
      {/* Search Bar, Menu Toggle */}
      <div className="search d-flex align-items-center">
        <FontAwesomeIcon icon={faBars} className="bars me-3 rounded-circle" onClick={toggleSidebar} />
        <input
          type="text"
          name="search"
          placeholder="Search..."
          className="search-bar rounded"
        />
      </div>
      {/* Nav Links */}
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li" className='d-flex align-items-center'>
        {/* <FontAwesomeIcon icon={faBell} className='me-1'/> */}
        <NavDropdown title="Notification" id="nav-dropdown" className="pe-4 py-3">
        <Dropdown.Item>
          <p className="note-title ">Profile Updated</p>
          <p className="note-time ">15 minuts ago</p>
        </Dropdown.Item>
        <Dropdown.Item>
          <p className="note-title ">New User Joind</p>
          <p className="note-time ">20 minuts ago</p>
        </Dropdown.Item>
        <Dropdown.Item>
          <p className="note-title ">Profile Updated</p>
          <p className="note-time ">22 minuts ago</p>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <p className="see-all d-flex justify-content-center align-items-center p-0 m-0">See All</p>
        </Dropdown.Item>
        </NavDropdown>
        </Nav.Item>
        <Nav.Item as="li" className="d-flex align-items-center ">
          {/* <FontAwesomeIcon icon={faMessage} className='me-1' /> */}
          <NavDropdown title="Messages" id="nav-dropdown" className="pe-4 py-3">
          <Dropdown.Item className='d-flex align-items-center'>
          <img src={User} alt="user" className="sent-img"/>
          <div className="info">
          <p className="sent-name">Abdullrahman sent you a message</p>
          <p className="sent-time ">10 minuts ago</p>
          </div>
          
        </Dropdown.Item>
        <Dropdown.Item className='d-flex align-items-center'>
          <img src={User} alt="user" className="sent-img"/>
          <div className="info">
          <p className="sent-name">Abdullrahman sent you a message</p>
          <p className="sent-time ">13 minuts ago</p>
          </div>
          
        </Dropdown.Item>
        <Dropdown.Item className='d-flex align-items-center'>
          <img src={User} alt="user" className="sent-img"/>
          <div className="info">
          <p className="sent-name">Abdullrahman sent you a message</p>
          <p className="sent-time ">30 minuts ago</p>
          </div>
          
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <p className="see-all d-flex justify-content-center align-items-center p-0 m-0">See All</p>
        </Dropdown.Item>
      </NavDropdown>
        </Nav.Item>
        <Nav.Item as="li" className="d-flex align-items-center ">
        
        <NavDropdown title="Settings" id="nav-dropdown" className="pe-4 py-3 text-white">
        <Dropdown.Item className='text-white'>My Profile</Dropdown.Item>
        <Dropdown.Item className='text-white'>Settings</Dropdown.Item>
        <Dropdown.Item className='text-white'>Log Out</Dropdown.Item>
      </NavDropdown>
        </Nav.Item>
      </Nav>
    </header>
  );
};

export default Header;
