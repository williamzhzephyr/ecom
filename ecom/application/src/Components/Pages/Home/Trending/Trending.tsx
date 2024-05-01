import { useState } from "react";
import "./Trending.css";
import TrendingSlider from "./TrendingSlider";

const Trending: React.FC = (): JSX.Element => {

    const items: string[] = ["Women", "Men", "Baby", "Fashion"];

    const [underline, setUnderline] = useState<number>(0);

    const addUnderlineClass = (index: number): void => {
        setUnderline(index);
    };
    
    return <><section className="trending">
        <div className="container">
            <div className="nav-items">
                <h1>Trending this Week</h1>
                <div className="items">
                    {items.map((item, index) => {
                        return <p key={index}
                            onClick={() => addUnderlineClass(index)}
                            className={underline === index ? "underline" : ""}
                        >
                            {item}
                        </p>
                    })}
                </div>
            </div>
        </div>
    </section>
        <TrendingSlider num={underline} />
    </>
};

export default Trending;