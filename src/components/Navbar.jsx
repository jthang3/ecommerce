import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from "../responsive";
import {Link} from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {

    const Container = styled.div`
        height: 60px;
        ${mobile({height: "50px"})}
    `

    const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        ${mobile({padding: "5px 0px"})};
    `

    const Left = styled.div`
        flex: 1;
        align-item: center;
        display: flex;
    `
    const Right = styled.div`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        ${mobile({justifyContent: "center", flex: 2, transform: "translateX(-65px)"})};
    `

    const Logo = styled.div`
        font-weight: bold;
        text-align: center;
        ${mobile({fontSize: "15px", transform: "translateX(-30px)"})}
    `

    const MenuItem = styled.div`
        font-size: 14px;
        cursor: pointer;
        margin-left: 25px;
        ${mobile({fontSize: "12px", marginLeft: "10px"})}
    `
    const Center = styled.div`
        flex: 1;
    `

    const Language = styled.span`
        cursor: pointer;
        font-size: 14px;
        ${mobile({display: "none"})}
    `

    const SearchContainer = styled.div`
        border: 1px solid lightgray;
        display: flex;
        align-item: center;
        margin-left: 25px;
        padding: 5px;
        transform: translateY(-5px);
        ${mobile({marginLeft: "8px"})}
    `

    const Input = styled.input`
        border: none;
        &:focus{
            outline: none;
        }
        ${mobile({width: "50px"})}
    `


    return(
        <Container>
            <Wrapper>
                <Left>
                    <Link className='link' to = "/home">
                        <Language>HOME</Language>
                    </Link>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <SearchIcon style = {{color: "gray", fontSize: "16px"}}/>
                    </SearchContainer>
                    </Left>
                <Center><Logo>LAMA.</Logo></Center>
                <Right>
                    <Link className = "link" to = "/register">
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link className = "link" to = "/sign">
                        <MenuItem>SIGN IN</MenuItem>
                    </Link>
                    <MenuItem>
                        <Link className = "link" to = "/carts">
                            <Badge badgeContent={props.addItem} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;