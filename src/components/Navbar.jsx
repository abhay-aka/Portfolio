import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import logo from "../assets/croppedLogo.png"; 
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            {/* <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={80} height={200}/>
                </a>
            </div>  */}
            <div className="flex flex-shrink-0 items-center">
              <a href="/" aria-label="Home" className="text-decoration-none">
                <div className="flex items-center justify-center">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">A</span>
                    <span className="text-5xl font-bold text-white mx-1">K</span>
                    <span className="text-4xl font-bold text-white">A</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/abhay" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn">
                        <FaLinkedin />
                </a>
                <a href="https://www.github.com/abhay-aka" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    aria-label="GitHub">
                        <FaGithub />
                </a>
                <a href="https://www.instagram.com/abhayyy139" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn">
                        <FaInstagram />
                </a>
                <a href="https://leetcode.com/u/abhay13901/" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    aria-label="Leetcode">
                        <SiLeetcode />
                </a>
            </div>
        </nav>
    )
}
export default Navbar;