import "./SliderButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SliderButtonRight: React.FC = (): JSX.Element => {
    return <>
        <FontAwesomeIcon icon={faAngleRight} className="slider-arrow" />
    </>
};

export default SliderButtonRight;