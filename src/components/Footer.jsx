import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`

`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    align-items: center;
    justify-content: center;
    margin: 20px;
    
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`
const Payment = styled.img`
    height: 100px;
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Footer = () => {
    return(
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Description>
                    There are many vairations of passages of Lorem Ipsum available, but 
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't lok even sllightly believable. 
                </Description>
                <SocialContainer>
                    <SocialIcon color = "#3B5999">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon color = "#E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color = "#55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color = "#E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style = {{marginRight: "10px"}} />
                    622 Didie Path, South TObinchester 98336
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style = {{marginRight: "10px"}}/>
                    +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <EmailIcon style = {{marginRight: "10px"}} />
                    contact@lama.dev
                </ContactItem>
                <Payment src = "https://freepikpsd.com/file/2019/10/visa-mastercard-paypal-png-Transparent-Images.png"/>
            </Right>
        </Container>
    )
}


export default Footer;