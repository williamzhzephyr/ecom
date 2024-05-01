import "./Header.css";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import HeaderMiddle from "./HeaderMiddle/HeaderMiddle";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header: React.FC = () => {

    return <>
        <header className="container-outer">
                <div className="container-inner">
                    <HeaderTop />
                    <HeaderMiddle />
                    <HeaderBottom />
                </div>
        </header>
    </>
}

export default Header;