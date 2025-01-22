import { FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"
import logo from "../assets/NK_logo_1.png"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={60} height={33} alt="Logo" />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
            <FaLinkedin/>
          </a>
          <a href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github">
            <FaGithub/>
          </a>
          <a href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
            <FaInstagram/>
          </a>
          <a href="/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram">
            <FaSquareXTwitter/>
          </a>
        </div>
    </nav>
  )
}

export default Navbar