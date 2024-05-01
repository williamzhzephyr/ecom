import "./HeaderBottom.css";

interface Props { }

const HeaderBottom: React.FC = (props: Props): JSX.Element => {

    return <>
        <div className="bottom-nav">
            <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer <span><a href="#">Shop Now</a></span></p>
        </div>
    </>
}

export default HeaderBottom;