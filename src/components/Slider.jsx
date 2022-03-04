import { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from "../data";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform:translateX(${props => props.slideIndex * -100}vw);
    transition: all .5s ease-out;
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    margin-left: 50px;
`

const Image = styled.img`
    height: 80%;
`
const InfoCOntainer = styled.div`
    flex: 1;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 500;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            if(slideIndex > 0) {
                setSlideIndex(slideIndex - 1);
            }
            else {
                setSlideIndex(0);
            }
        }
        else {
            if(slideIndex >= 2){
                setSlideIndex(2);
            }
            else {
                setSlideIndex(slideIndex + 1);
            }
        }
    }

    return(
        <Container>
            <Arrow direction = "left" onClick={() => handleClick("left")}>
                <ArrowLeftIcon />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item,index) => {
                    return (
                    <Slide key = {index}bg = {item.bg}>
                        <ImgContainer>
                            <Image src = {item.img} />
                        </ImgContainer>
                        <InfoCOntainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to = "/products">
                                <Button>SHOW NOW</Button>
                            </Link>
                        </InfoCOntainer>
                    </Slide>
                    )
                })}
            </Wrapper>
            <Arrow direction = "right" onClick={() => handleClick("right")}>
                <ArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default Slider;