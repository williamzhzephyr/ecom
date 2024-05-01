import item1 from "./items1.jpg";
import item2 from "./items2.jpg";
import item3 from "./items3.jpg";
import "./Categories.css";

const Categories: React.FC = (): JSX.Element => {

    return <>
        <section className="categories">
            <div className="category">
                <div className="mens-category">
                    <div>
                       Men's Fashion
                    </div>
                </div>
                <img src={item1} alt="mens-category" />
            </div>
            <div className="category">
                <div className="womens-category">
                    <div>
                        Women's Fashion
                    </div>
                </div>
                <img src={item2} alt="womens-category" />
            </div>
            <div className="category">
                <div className="baby-category">
                    <div>
                        Baby Fashion
                    </div>
                </div>
                <img src={item3} alt="baby-category" />
            </div>
        </section>
    </>
};

export default Categories;