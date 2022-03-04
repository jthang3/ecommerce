import { Add, Remove } from "@material-ui/icons";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const ImageContainer = styled.div`
    flex: 1;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.h2`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`


const Product = ({product, addItemToCart, addBuyingProduct}) => {
    const [amount, setAmount] = useState(1);

    let addAmcount = () => {
        setAmount(amount + 1);
    }

    let decreaseAmount = () => {
        if(amount > 0) {
            setAmount(amount - 1);
        }
    }
    return(
        <Container>
            <Wrapper>
                <ImageContainer>
                    <Image src = {product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>Demin Jumpsuit</Title>
                    <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Modi temporibus autem architecto! Tempore beatae, amet inventore tenetur 
                         aut excepturi fugiat officia molestias repudiandae quia reprehenderit sequi 
                         saepe similique eveniet ipsum.
                    </Description>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color = "black" />
                            <FilterColor color = "darkblue" />
                            <FilterColor color = "gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick = {decreaseAmount} />
                            <Amount>{amount}</Amount>
                            <Add onClick = {addAmcount}/>
                        </AmountContainer>
                        <Button variant="contained" color="success" onClick = {() => {
                            addItemToCart(amount);
                            addBuyingProduct(product);
                            }}>
                                ADD TO CART
                        </Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default Product;