import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import myImage from './images/me.jpg'
function Header() {

  return(
    <header>
    <nav className="nav-h close" id="nav-h">
        <div className="nav-image-h">
            <img src={myImage} alt="author image" className="nav-img-h" />
        </div>
        <div className="nav-name-h">
            Vinay Dangodra
        </div>
        <div className="nav-social-h">
            <ul className="horizontal-list textcenter social-icons nodec-list">
                <li><a href="https://www.linkedin.com/in/vinay-dangodra-4420461ba" target="_blank">
                <i className="fab fa-facebook"></i>
                </a>
            </li>
            <li><a href="https://instagram.com/_vinay_dangodra?igshid=3fo8xbifm76y" target="_blank">
                    <i className="fab fa-instagram"></i>
                </a></li>
            <li><a href="mailto:vinaydangodra28@gmail.com" target="_blank">
                    <i className="far fa-envelope"></i>
                </a></li>
            <li>
                <a href="https://api.whatsapp.com/send?phone=+917900108153&text=&app_absent=0" target="_blank">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </li>
            <li>
                <a href="https://github.com/VinayDangodra28" target="_blank">
                    <i className="fab fa-github"></i>
                </a>
            </li>
            </ul>
        </div>
        <ul className="nodec-list-h nav-list-h">
            <li className="nodec-h nav-listitem-h">
                <button onclick="myFunction()" class='header_button'> 
                    <Link to="/" className="nodec-h white-h">Home</Link>
                </button>
            </li>
            <li className="nodec-h nav-listitem-h">
                
                <button onclick="myFunction()" class='header_button'> 
                    <a href="#about" className="nodec-h white-h">About</a>
                </button>
            </li>
            <li className="nodec-h nav-listitem-h">
                
                <button onclick="myFunction()" class='header_button'> 
                    <Link to="/projects" className="nodec-h white-h">Projects</Link>
                </button>
            </li>
            <li className="nodec-h nav-listitem-h">
                
                <button onclick="myFunction()" class='header_button'> 
                    <a href="#contact" className="nodec-h white-h">Contact</a>
                </button>
            </li>
        </ul>
    </nav>
</header>
    );
}
export default Header;
function Header2() {
    return(
        <>
            <div>
                The function Header2 returns a html      
            </div>     
        </>
    );
}

