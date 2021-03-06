import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;

`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopBottom = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"}
`

const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radisu: 10px;
    padding: 20px;
    height: 50vh;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.div``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};

`
const ProductSize = styled.span``
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    padding: 10px;
    cursor: pointer;
    margin-top: 5px;
    width: 100%;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = ({finalProduct}) => {

    let finalPrice = 0;
    finalProduct.forEach(price => {
        finalPrice = finalPrice + price.price;
    })

    const finalProductSummary = () => {
        return(
            finalProduct.map(product => {
                return(
                        <Product key = {product.id}>
                                <ProductDetail>
                                    <Image src = {product.img}/>
                                    <Details>
                                        <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                                        <ProductId><b>ID: </b>{product.id}</ProductId>
                                        <ProductColor color = "#8A2BE2"/>
                                        <ProductSize><b>Size: </b>37.5</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    {/* <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>2</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer> */}
                                    <ProductPrice> ${product.price} </ProductPrice>
                                </PriceDetail>
                            </Product>
                )
            })
        )
    }
    return(
        <Container>
                <Wrapper>
                    <Title>YOUR BAG</Title>
                    <Top>
                        <Link to = "/products">
                            <TopBottom>CONTINUE SHOPPING</TopBottom>
                        </Link>
                            <TopTexts>
                                <TopText>Shopping Bag(2)</TopText>
                                <TopText>Your Wishlist (0)</TopText>
                            </TopTexts>
                        <TopBottom type = "filled">CHECKOUT NOW</TopBottom>
                    </Top>
                    <Bottom>
                        <Info>
                            {finalProductSummary()}
                        </Info>
                        <Summary>
                            <SummaryTitle>
                                Order Summary
                            </SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>${finalPrice}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>$5.90</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>- $5.9</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem  type = "total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>${finalPrice}</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryButton>CHECKOUT NOW</SummaryButton>
                        </Summary>
                    </Bottom>
                </Wrapper>
        </Container>
    )
}

export default Cart;