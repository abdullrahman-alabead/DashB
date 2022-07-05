import "./index.scss";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarChart,
  faChartPie,
  faDashboard,
  faKeyboard,
  faTable,
  faTachometer,
  faTachometerAlt,
  faTh,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import User from "../../assets/images/user.png";

let Sidebar = () => {
    // activation funciton
  function activateLink(link: EventTarget) {
    console.log(link)
    // remove class 'active' from all links
    let links = document.querySelectorAll(".side-link");
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    // add class 'active' to pressed link
    if (link instanceof HTMLLIElement){
      link.classList.add("active");
    }
  }

  return (
    <div className="sidebar d-flex flex-column pt-3  vh-100 position-sticky">
      <div className="logo d-flex align-items-center fs-3 mb-4 ps-4">
        <FontAwesomeIcon icon={faChartPie} className="me-2" />
        <h3 className="mb-0 fw-bold">DarkPan</h3>
      </div>
      <div className="user d-flex align-items-center mb-4 ps-4">
        <div className="user-img me-3 h-100">
          <img src={User} alt="user" className="rounded-circle" />
        </div>
        <div className="user-info">
          <h6 className="user-name text-white fw-bold mb-1">John Doe</h6>
          <h6 className="user-title">Owner</h6>
        </div>
      </div>
      <div className="side-nav">
        <ul className="side-links p-0">
          <li className="side-link" onClick={(e) => activateLink(e.currentTarget)}>
            <FontAwesomeIcon icon={faDashboard} />
            <p className="h5">Dashboard</p>
          </li>
          <li className="side-link" onClick={(e) => activateLink(e.currentTarget)}>
            <FontAwesomeIcon icon={faTh} />
            <p className="h5">Widgets</p>
          </li>
          <li className="side-link" onClick={(e) => activateLink(e.currentTarget)}>
            <FontAwesomeIcon icon={faKeyboard} />
            <p className="h5">Forms</p>
          </li>
          <li className="side-link" onClick={(e) => activateLink(e.currentTarget)}>
            <FontAwesomeIcon icon={faTable} />
            <p className="h5">Tables</p>
          </li>
          <li className="side-link"onClick={(e) => activateLink(e.currentTarget)}>
            <FontAwesomeIcon icon={faBarChart} />
            <p className="h5">Charts</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
