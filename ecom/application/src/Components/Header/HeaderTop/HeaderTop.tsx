import "./HeaderTop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';

interface Props { }

const HeaderTop: React.FC = (props: Props): JSX.Element => {
    return <>
        <div className="top-nav">
            <div className="top-nav-left">
                <div>About Us</div>
                <div>Privacy</div>
                <div>FAQ</div>
                <div>Careers</div>
            </div>
            <div className="top-nav-right">
                <div>My Wishlist</div>
                <div>Track Your Order</div>
                <FontAwesomeIcon className="icon" icon={faFacebook} />
                <FontAwesomeIcon className="icon" icon={faInstagram} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                <FontAwesomeIcon className="icon" icon={faYoutube} />
            </div>
        </div>
    </>
}

export default HeaderTop;