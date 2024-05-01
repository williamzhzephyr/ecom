import logo from "./logo.png";
import "./HeaderMiddle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faMagnifyingGlass, 
    faUser, 
    faCartShopping 
} from "@fortawesome/free-solid-svg-icons";

interface Props { }

const HeaderMiddle: React.FC = (props: Props): JSX.Element => {
    return <>
        <div className="mid-nav">
            <div>
                <img src={logo} />
            </div>
            <div className="nav-items">
                <h4>Home</h4>
                <h4>Men</h4>
                <h4>Women</h4>
                <h4>Baby Collection</h4>
                <h4>Pages</h4>
                <h4>Blog</h4>
                <h4>Contact</h4>
            </div>
            <div>
                <FontAwesomeIcon className="icon-mid" icon={faMagnifyingGlass} />
                <FontAwesomeIcon className="icon-mid" icon={faUser} />
                <FontAwesomeIcon className="icon-mid" icon={faCartShopping} />
            </div>
        </div>
    </>
}

export default HeaderMiddle;