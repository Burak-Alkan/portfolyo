
import "./navbar.css";
import useDarkMode from "../hooks/useDarkMode";
import { useContext } from "react";

const Navbar = () => {
  const [isDarkMode,setIsDarkMode]=useDarkMode();

  const {dilDegistir,content}=useContext(ContextLanguage)
  
  const changeLanguage=()=>
  {
    dilDegistir("tr")
  }
  return (
    <div className="navbar">
      <div className="navbar-name">A</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link-item">{content.skils}</a>
        <a href="#" className="navbar-link-item">Projects</a>
        <a href="#" className="navbar-link-item">Hire me</a>

        <button onClick={()=>setIsDarkMode(!isDarkMode)}>
        on/of
        </button>

        <button onClick={changeLanguage}>
          dili değistir
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;