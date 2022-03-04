import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from "react";
import { Link } from "react-router-dom";

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s ease-out;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all .1s ease-out;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1)
    }
`

const Product = ({item,addItemToCart, addProduct, finalProduct}) => {
    const [addCart, setAddCart] = useState(0);


    const favIcon = () => {
        console.log(item);
    }

    const searchIcon = () => {
        addProduct(item);
    }

    const shoppingIcon = () => {
        setAddCart(addCart+1);
        addItemToCart();
        finalProduct(item);

    }
    return(
        <Container>
            <Circle />
            <Image src = {item.img} />
            <Info>
                <Icon>
                    <ShoppingCartIcon onClick = {shoppingIcon}/>
                </Icon>
                <Link to = "/product">
                    <Icon>
                        <SearchIcon onClick = {searchIcon}/>
                    </Icon>
                </Link>
                <Icon>
                    <FavoriteIcon onClick = {favIcon}/>
                </Icon>
            </Info>
        </Container>
    )
}


export default Product;