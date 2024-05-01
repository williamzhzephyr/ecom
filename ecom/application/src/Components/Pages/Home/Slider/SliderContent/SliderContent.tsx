import "./SliderContent.css";
import hero1 from "./hero1.jpg";
import hero2 from "./hero2.jpg";
import SliderButtonLeft from "../SliderButton/SliderButtonLeft";
import SliderButtonRight from "../SliderButton/SliderButtonRight";
import { useState } from "react";

const SliderContent: React.FC = (): JSX.Element => {

    const [image, setImage] = useState<number>(0);
    const length = 2;

    const nextImage = (): void => {
        if (image < length - 1) {
            setImage(prevState => prevState+1);
        } else {
            setImage(0);
        }
    };

    const previousImage = (): void => {
        if (image === 0) {
            setImage(length - 1);
        }
        else {
            setImage(prevState => prevState-1);
        }
    }
    
    return <>
        <div>
            {
                image === 1 ? <img src={hero2} alt="hero-image2" className="slider-image"/> : <img src={hero1} alt="hero-image" className="slider-image"/>
            }
            <div className="arrow-left" onClick={previousImage}><SliderButtonLeft /></div>
            <div className="arrow-right" onClick={nextImage}><SliderButtonRight /></div>
        </div>
    </>
};

export default SliderContent;