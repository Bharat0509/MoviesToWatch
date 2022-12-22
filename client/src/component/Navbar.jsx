import "./Navbar.css"
import { AiOutlineSetting, AiFillSetting } from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { MdSearch } from "react-icons/md"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="navbar__container">
                <div className="navbar__left">

                    <div className="navbar__settings"><GoThreeBars /></div>
                    <div className="navbar-logo">
                        <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt="" />
                    </div>
                    <div className="navbar-links">
                        <ul>
                            <li ><NavLink className="white" to="/tv">TV</NavLink></li>
                            <li><NavLink className="white" to="/movies">Movies</NavLink></li>
                            <li><NavLink className="white" to="/sports">Sports</NavLink></li>
                            <li><NavLink className="white" to="/disney">Disney+</NavLink></li>
                            <li><img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar__right">
                    <div className="navbar-search">
                        <input type="text" placeholder="Search" />
                        <MdSearch />
                    </div>
                    <div className="navbar-buttons">
                        <button className="btn btn-primary">SUBSCRIBE</button>
                        <button className="btn btn-secondary">LOGIN</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar