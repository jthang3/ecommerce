import styled from "styled-components";
import Button from '@mui/material/Button';
import "./Login.css"
import { Link } from "react-router-dom";
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255,255,255,0.5)),url("https://www.bubblestranslation.com/wp-content/uploads/Top-5-International-Fashion-E-Commerce-Websites-Featured.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    height: 40%;
    min-width: 415px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
   display: flex;
   flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    flex-wrap: wrap;
`

const Linkd = styled.a`
    cursor: pointer;
    &:hover{
        color: #0099ff;
    }
    transition: all .1s ease-out;
`

const Login = () => {
    return(
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder = "username"/>
                    <Input type = "password" placeholder = "password"/>
                    <Button className = "login-btn" variant="contained" color="success">
                         LOGIN
                    </Button>
                    <LinkWrapper className="link-wrapper">                 
                        <Linkd>FORGOT YOUR PASSWORD</Linkd>
                        <Link to = "/register" className = "create-link">CREATE AN ACCOUNT</Link>
                    </LinkWrapper>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;