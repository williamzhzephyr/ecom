import latestWomen1 from "./latest1.jpg";
import latestWomen2 from "./latest2.jpg";
import latestWomen3 from "./latest3.jpg";
import latestWomen4 from "./latest4.jpg";
import latestMen1 from "./latestmen1.jpg";
import latestMen2 from "./latestmen2.jpg";
import latestMen3 from "./latestmen3.jpg";
import latestMen4 from "./latestmen4.jpg";
import "./Trending.css";
import { useEffect, useState } from "react";
import SliderButtonLeft from "../Slider/SliderButton/SliderButtonLeft";
import SliderButtonRight from "../Slider/SliderButton/SliderButtonRight";

interface Props {
    num: number;
};

const imagesMen: string[] = [latestMen1, latestMen2, latestMen3, latestMen4];
const imagesWomen: string[] = [latestWomen1, latestWomen2, latestWomen3, latestWomen4];
const imagesBaby: string[] = [];
const imagesFashion: string[] = [];

const TrendingSlider: React.FC<Props> = ({ num }): JSX.Element => {

    const [imagesToDisplay, setImagesToDisplay] = useState<string[]>(imagesWomen);

    useEffect(() => {
        switch (num) {
            case 0:
                setImagesToDisplay(imagesWomen);
                break;
            case 1:
                setImagesToDisplay(imagesMen);
        }
    }, [num]);


    return <section className="trending" style={{ marginTop: "60px", justifyContent: "space-between" }}>
        {imagesToDisplay.map((image, index) => {
            return <div key={index}>
                <img src={image} id={`image-${index}`} />
            </div>
        })}
    </section>
};

export default TrendingSlider;