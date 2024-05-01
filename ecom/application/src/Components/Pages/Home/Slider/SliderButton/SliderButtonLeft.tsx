import "./SliderButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SliderButtonLeft: React.FC = (): JSX.Element => {
    return <>
        <FontAwesomeIcon icon={faAngleLeft} className="slider-arrow"/>
    </>
};

export default SliderButtonLeft;