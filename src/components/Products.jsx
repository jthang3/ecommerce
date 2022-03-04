import styled from "styled-components";
import {popularProducts} from "../data";
import Product from "./Product";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = (props) => {
    return(
        <Container>
            {popularProducts.map(item => {
                return(
                    <Product finalProduct = {props.addBuyingProduct} addProduct = {props.addProduct} addItemToCart = {props.addItemToCart} item = {item} key = {item.id} />
                )
            })}
        </Container>
    )
}


export default Products;