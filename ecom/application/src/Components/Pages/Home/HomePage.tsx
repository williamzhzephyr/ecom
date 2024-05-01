import Slider from "./Slider/Slider";
import Categories from "./Categories/Categories";
import Trending from "./Trending/Trending";

const Body: React.FC = (): JSX.Element => {
    return <>
        <Slider />
        <Categories />
        <Trending />
    </>
};

export default Body;