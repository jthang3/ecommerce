import { Send } from "@material-ui/icons"
import styled from "styled-components";
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
`
const InputContainer = styled.div`
    width: 33%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    margin: auto;
    margin: 10px 0px;
    min-width: 450px;
`
const Input = styled.input`
    border: none;
    &:focus {
        outline: none;
    }
    flex: 8;
    padding-left: 5px;
`
const Button = styled.button`
    flex: 2;
    &:hover{
        cursor: pointer;
    }
`

const Newsletter = () => {
    return(
        <Container>
            <Title>News letter</Title>
            <Description>Get timely updates from your favorite products</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}


export default Newsletter;