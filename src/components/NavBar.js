import React, {useState} from 'react'
import styled from 'styled-components'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Modal} from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useSelector } from 'react-redux';


const Container = styled.div`
    max-width:1376px;
    margin:0 auto;  
    padding:25px 0;
    @media (max-width:1376px){
      display:flex;
      justify-content:space-between;
      padding:25px 10px;
    }
`   
const Wrapper = styled.div`
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 16px 16px;
  background:#fff;
  position:fixed;
  width:100%;
  top:0;
  left:0;
  z-index:1;
  @media (max-width:475px){
    display:none;
  }
` 

const Nav = styled.div`
  ul{
    list-style:none;
    padding-left:0;
    margin-bottom:0;
  }
  li{
    margin-right:29px;
  }
  a{
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    cursor:pointer;
    text-decoration:none;
  }
  @media (max-width:1376px){
    li{
      margin-right:15px;
    }
    ul{
      display:flex;
    }
  }
  @media (max-width:1227px){
    li{
      margin-right:8px;
    }
  }
  @media (max-width:1140px){
    display:none;
  }
`

const SecondNav = styled.div`
ul{
  list-style:none;
  padding-left:0;
  margin-bottom:0;
  overflow-x:scroll;
  width:100%;
}
a{
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  cursor:pointer;
  text-decoration:none;
}

@media (max-width:1140px){
  display:block!important;
}

@media (max-width:770px){
  li{
    margin-right:20px;
  }
}
@media (max-width:475px){
  ul{
    margin-bottom:0!important;
  }
  li{
    background: rgba(54, 70, 93, 0.04);
    border-radius: 5px;
    padding:2px 12px;
    &.active{
      background: #DD052E;
    }
    &.active a{
      color: #F5F5F5!important; 
    }
  }
  a{
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: rgba(54, 70, 93, 0.6); 
  }
}

`

const LocationText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  color: #DD052E;
  margin-right:34px;  
  @media (max-width:1376px){
    margin-right:0;
  }
`;

const Button = styled.div`
a{
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #F5F5F5;
  background: #DD052E;
  box-shadow: 0px 2px 14px rgba(222, 95, 90, 0.4);
  border-radius: 6px;
  padding:8px 20px; 
}
span{
  background: #DD052E;
  border-radius:50%;
  color:#fff;
  font-weight:700;
  padding:6px 8px 5px 8px;
  position:relative;
  bottom:15px;
  right:15px;
}
`; 

const Logo = styled.div`
margin-right:34px;
@media (max-width:1376px){
  margin-right:0;
}
a{
  font-weight: 600;
  font-size: 22px;
  line-height: 22px;
  color: #000000;
}
`

const MobileHeader = styled.div`
  border-bottom: 1px solid #F5F6F7;
  margin-bottom:16px;
  @media (max-width:475px){
    display:flex!important;
  }
`

const MobileTitle = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 28px;
  text-transform: uppercase;
  color: #000000;
`

const SecondTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom:12px;
`

const ModalStyled = styled(Modal)`
.modal-dialog {
  position: fixed;
  bottom: 0;
  left: 0%;
  right: 0%;
  transform: translate(-50%, -50%);
  margin:0;
}
.modal-content{
  border:none;
  border-radius: 16px 16px 0px 0px;
}
`

const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom:16px;
`

const ModalLocation = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #000000;
  margin-bottom:16px;
`

const ModalMap = styled.div``

const MobileButton = styled.div`
  span{
    background: #DD052E;
    border-radius:50%;
    color:#fff;
    font-weight:700;
    padding:3px 5px 2px 5px;
    font-size:12px;
    position:relative;
    bottom:10px;
    right:10px;
  }
`

const NavBar = () => {
  const [active, setActive] = useState("Shawarma");
  const [show, setShow] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
  }; 

  const shopData = useSelector(state => state.products.products)
  const basket = useSelector(state => state.basket.basket)


  return (
    <>
 
    <Wrapper>
    <Container className='d-flex align-items-center'>
      <Logo>
        <NavLink to="/"><img src="/images/logo.svg" width={120} /> </NavLink>
        {/* <NavLink to="/">BarBarFood</NavLink> */}
      </Logo>
      <Nav>
        <ul className='d-flex align-items-center'>
          {
            shopData.results && shopData.results.map(item => (
              <li><Link activeClass='active' className={item.name} to={item.name} spy={true} offset={-180} duration={500}>{item.name}</Link></li>
            ))
          }
        </ul> 
      </Nav>
      <div className='d-flex align-items-center' >
        <div className='me-2'>
          <img src="images/ci_location.svg" />          
        </div>
        <LocationText>
          Our locations 
        </LocationText>
      </div>
      <Button>
        <NavLink to="/basket">My Busket</NavLink>   
        <span>{basket.cart && basket.cart.items.length}</span>
      </Button>
    </Container>
    </Wrapper>
    <MobileHeader style={{padding:"15px 20px", display:"none"}} className="justify-content-between align-items-center">
        {
          location.pathname === "/" ? <div onClick={handleShow}> 
          <img src="images/location.png"/>
        </div> : <div style={{position:"relative", bottom:2}} onClick={() => navigate("/") }>
        <img src="images/return.svg"/>
        </div>  
        }
        <MobileTitle>
          <NavLink to="/"><img src="/images/logo.svg" width={100}/></NavLink>
        </MobileTitle>
        <MobileButton>
          <NavLink to="/basket"><img src="images/red-cart.png" /></NavLink>      
          <span>{basket.cart && basket.cart.items.length}</span>    
        </MobileButton>
    </MobileHeader> 
      {
        location.pathname === "/" && <SecondNav style={{display:"none",paddingLeft:20}}>
        <SecondTitle>
          Category
        </SecondTitle>
        <ul className='d-flex align-items-center justify-content-between'>
        {
            shopData.results && shopData.results.map(item => (
              <li><Link activeClass='active' className={item.name} to={item.name} spy={true} offset={-180} duration={500}>{item.name}</Link></li>
            ))
          }
        </ul> 
      </SecondNav>
      }
      <ModalStyled show={show} onHide={handleClose}>  
        <div style={{padding:"32px 20px 20px 20px"}}>
        <ModalTitle>
          Our address:  
        </ModalTitle>
        <ModalLocation className='d-flex align-items-center'>
          <div style={{marginRight:10}}>
            <img src="images/ci_location.svg"/>
          </div>
          <div>
            Almaty, Kazakhstan, Dostyk 180a
          </div>
        </ModalLocation>
        <ModalMap>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.91676826607!2d76.95756551524218!3d43.232204679138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f01993a97b7%3A0xc5c5e331851e6707!2sDostyk%20Ave%20180%2C%20Almaty%20050000!5e0!3m2!1sen!2skz!4v1652341807991!5m2!1sen!2skz" width="100%" height="182" style={{border:0, boxShadow: "0px 2px 9px rgba(18, 18, 18, 0.07)", borderRadius: 8}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </ModalMap>
        </div>
      </ModalStyled>
    </>
  )
}

export default NavBar