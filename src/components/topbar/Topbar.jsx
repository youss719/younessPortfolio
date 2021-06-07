import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import GitHubIcon from '@material-ui/icons/GitHub';
import { createMuiTheme } from '@material-ui/core/styles';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <GitHubIcon className="icon" color="#b00020" />
          <div className="itemContainer">
           <span><a href="https://github.com/youss719" className="logo">
            youss719
          </a></span>
            <Person className="icon" />
            <span>+212 6 12 44 78 57 </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>lhassaniyouness@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}