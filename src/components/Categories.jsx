import { categories } from "../data";
import "./categories.css";
import { Link } from "react-router-dom";
const Categories = () => {

    const catData = () => {
        return(
            categories.map(item => {
                return(
                    <div className = "category-item" key = {item.id}>
                        <img src = {item.img} className = "category-wear" alt = "categories"/>
                        <h2 className = "category-title">{item.title}</h2>
                        <Link to = "/products">
                            <button className="category-button">SHOP NOW</button>
                        </Link>
                    </div>
                )
            })
        )
    }
    return(
        <div className="categories-list">
            {catData()}
        </div>
    )
}

export default Categories;