import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import BasketOverall from '../components/BasketOverall';

const Container = styled.div`
    max-width:1376px;
    margin:0 auto;  
    margin-top:164px;
    @media (max-width:1376px){
        padding:0 20px!important;
    }
    @media (max-width:475px){
        margin-top:0;   
    }
`   

const Wrapper = styled.div`
    display:flex;
    @media (max-width:1176px){
        display:flex;
        justify-content:space-between;
    }
    @media (max-width:1080px){
        display:flex;
        flex-direction: column-reverse; 
    }
`

const Link = styled.div`
    opacity:0.5;
    cursor:pointer;
    @media (max-width:475px){
        display:none!important;
    }
`

const LinkText = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #30475E;
    position:relative;
    top:1px;
`

const Title = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    margin-top:20px;
    margin-bottom:28px;
    @media (max-width:475px){
        display:none!important;
    }
`

const DeliveryTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom:16px;
    @media (max-width:475px){
        margin-top:16px;
    }
`

const TypeButtons =  styled.div`
    background: rgba(222, 95, 90, 0.06);
    border-radius: 6px;
    display:flex;
    max-width:379px;
    cursor:pointer;
    margin-bottom:24px;
    @media (max-width:475px){
        display:block!important;
        div{
            margin-right:0!important;
        }
    }
`
const TypeButton = styled.div`
    padding:6px;
    font-weight: 600;
    font-size: 16px;
    line-height: 32px;
    text-align:center;
    width:184px;  
    color: rgba(222, 95, 90, 0.5);
    &.active{
        color:#fff;
        background: #DD052E;
        border-radius: 4px;
    }
    @media (max-width:475px){
        line-height: 26px;  
        font-size: 14px;
    }
`

const Inputs = styled.div`
    max-width:656px;
`

const Select = styled.select`
    background: #FCFCFC;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    outline:none;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding-left:20px;
    padding-top:10px;
    padding-bottom:10px;
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
    width:320px;
    background-image: url("./images/dropdown.svg");
    background-repeat: no-repeat;
    background-position-x: 94%;
    background-position-y: 19px;
    option{
        background: #FCFCFC;
        border:none;
        outline:none;
        padding:10px 0; 
    }
`

const Input = styled.input`
    background: #FCFCFC;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    outline:none;
    width:320px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding:10px 20px;
    ::placeholder{
        opacity:0.3
    }
` 

const Recents = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(18, 18, 18, 0.07);
    border-radius: 8px;
    padding:20px;
    margin-bottom:24px;
`;

const RecentItem = styled.div`
    border-bottom: 1px solid #F5F6F7;
    padding-bottom:20px;
    margin-bottom:20px;
    &:last-child{
        border-bottom: none;
        padding-bottom:0;
        margin-bottom:0;
    }
`;

const RecentAddress = styled.div``;

const Checkbox = styled.input`
    -webkit-appearance: none;
    border: 2px solid #000000;
    border-radius: 2px;
    width:16px;
    height:16px;
    opacity:0.3;
    &:checked{
        background:url("images/checked.svg");
        backgrond-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-position-y: 2px;
    }
`;

const RecentAddressTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    position:relative;
    bottom:2px;
    opacity:0.5;
`

const RecentDetails = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    color: #000000;
    opacity: 0.6;
`;

const PaymentTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom:12px;
`

const PaymentWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(18, 18, 18, 0.07);
    border-radius: 8px;
    padding:20px;
` 

const Label = styled.label`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    position:relative;
    bottom:1px;
`

const Radio = styled.input`
    -webkit-appearance:none;
    width:14px;
    height:14px;
    border:1px solid #000;
    border-radius:50%;
    &:checked:after{
        background:#000;
        width:8px;
        height:8px;
        content:"";
        display:block;
        border-radius:50%;
        position:relative;
        left:2.3px;
        top:2px;
    }
  
`

const Payment = styled.div`
    &:first-child{
        margin-bottom:20px;
    }
`

const Time = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    background: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(18, 18, 18, 0.07);
    border-radius: 4px;
    padding:10px 0;
    text-align:center;
    cursor:pointer;
    margin-bottom:16px;
    &.active{
        background: #DD052E;
        color:#fff; 
    }
    @media (max-width:475px){
        width:76px!important;
        margin-right:10px;
        padding:8px 0!important;
        white-space: nowrap;
        font-size:13px!important;
    }
    @media (max-width:383px){
        flex: 1 0 21%;
    }
  
`
const OrderType = styled.div`
    @media (max-width:1180px){
        margin-right:0!important;
    }
`

const Times = styled.div`
    max-width:487px;
    @media (max-width:487px){
        max-width:100%!important;
        display:flex;
    }
    @media (max-width:383px){
        justify-content:flex-start!important;
    }
`

const DeliverySection = styled.div`
    @media (max-width:695px){
        display:none!important;
    }
`

const PaymentSection = styled.div`
    max-width:686px;
    width:686px;
    @media (max-width:732px){
        max-width:468px;
        width:100%; 
    }
    @media (max-width:475px){
        padding-bottom:280px;        
    }
`

const MobileRecentTitle = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
    opacity: 0.5;

`

const MobileRecentPlus = styled.div``

const MobileRecent = styled.div`
    border-bottom: 1px solid #F5F6F7;
    padding-bottom:14px;
    margin-bottom:14px;
`



const Basket = () => {
  const [selectedType, setSelectedType] = useState("takeaway")
  const [recentAdresses, setRecentAddresses] = useState([
      {
          street:"Almaty, Dostyk 180a",
          isChoosen:false,
          info:"Flat 30 / 2 floor / left flat"
      },
      {
        street:"Almaty, Esenova 22",
        isChoosen:false,
        info:"Flat 12 / 9 floor / right flat"
    }
  ])

  const [payment, setPayment] = useState([
      {
          isChoosen:false,
          text: "By card on delivery",
          type:"card"
      },
      {
        isChoosen:false,
        text: "By cash on delivery",
        type:"cash"
    }
  ])

  const [time, setTime] = useState(
      [
          {
              time: "9:00 am",
              id:1,
              isChoosen:false
          },
          {
            time: "10:00 am",
            id:2,
            isChoosen:false
          },
          {
            time: "11:00 am",
            id:3,
            isChoosen:false
          },
          {
            time: "12:00 am",
            id:4,
            isChoosen:false
          },
          {
            time: "13:00 am",
            id:5,
            isChoosen:false
          },
          {
            time: "14:00 am",
            id:6,
            isChoosen:false
          },
          {
            time: "15:00 am",
            id:7,
            isChoosen:false
          },
          {
            time: "16:00 am",
            id:8,
            isChoosen:false
          },
          {
            time: "17:00 am",
            id:9,
            isChoosen:false
          },
          {
            time: "18:00 am",
            id:10,
            isChoosen:false
          },
          {
            time: "19:00 am",
            id:11,
            isChoosen:false
          },
          {
            time: "20:00 am",
            id:12,
            isChoosen:false
          },
          
      ]
    )

  const chooseHandler = (street) => {
      setRecentAddresses(recentAdresses.map(item => {
          if (item.street === street){
              item.isChoosen = true;
          }else{
              item.isChoosen = false;
          }
          return item;
      }))
  }

  const timeHandler = (id) => {
    setTime(time.map(item => {
        if (item.id === id){
            item.isChoosen = true;
        }else{
            item.isChoosen = false;
        }
        return item;
    }))
  }

  return (
    <Container>
        <Wrapper>
            <OrderType style={{maxWidth:656, marginRight:139,}}>
            <NavLink to="/">
                <Link className='d-flex align-items-center'>
                    <div style={{marginRight:11}}>
                        <img src="images/back.svg"/>
                    </div>
                    <LinkText>
                        Main page
                    </LinkText>
                </Link>
            </NavLink>
            <Title>
                My Busket
            </Title>
            <DeliveryTitle>
                Delivery:
            </DeliveryTitle>
            <TypeButtons>
                <div className='d-flex' style={{padding:6}}> 
                    {
                        selectedType === "takeaway" ?
                        <>
                        <TypeButton className='active'>
                            Take away
                        </TypeButton>
                        <TypeButton onClick={() => setSelectedType("delivery")}>
                            Delivery
                        </TypeButton>
                        </>
                        : 
                        <>
                            <TypeButton onClick={() => setSelectedType("takeaway")}>
                                Take away
                            </TypeButton>
                            <TypeButton className='active'>
                                Delivery
                            </TypeButton> 
                        </>
                    }
                </div>
            </TypeButtons>
            {
                selectedType === "delivery" ? 
                    <>
                        <DeliverySection>
                        <DeliveryTitle>
                            New delivery address:
                        </DeliveryTitle>
                        <Inputs className="d-flex mb-3">
                            <div className='me-3'>
                                <Select required>
                                    <option selected disabled hidden>Choose city</option>
                                    <option>Almaty</option>
                                    <option>Nur-Sultan</option>
                                </Select>   
                            </div>   
                            <div>
                                <Input placeholder='Enter address'/>   
                            </div>                            
                        </Inputs>
                        <Inputs className='d-flex' style={{marginBottom:24}}>
                            <div>
                                <Input placeholder='Flat №' style={{width:208}} className="me-3" />   
                            </div>   
                            <div>
                                <Input placeholder='Floor' style={{width:208}} className="me-3" />   
                            </div>   
                            <div>
                                <Input placeholder='Additional info' style={{width:208}} className="me-3" />   
                            </div>   
                        </Inputs>
                        </DeliverySection>
                        <Recents>
                            {
                                window.screen.width <= 475
                                &&
                                <MobileRecent className='d-flex justify-content-between'>
                                    <MobileRecentTitle>
                                        Add new delivery address
                                    </MobileRecentTitle>
                                    <MobileRecentPlus>
                                        <img src="/images/black-plus.svg"/>
                                    </MobileRecentPlus>
                                </MobileRecent>
                            }
                            {
                                recentAdresses.map(item => {
                                    return (
                                        <RecentItem onClick={() => chooseHandler(item.street)}>
                                            <RecentAddress className='d-flex mb-3'>
                                                <div style={{marginRight:12}}>
                                                    <Checkbox type="checkbox" checked={item.isChoosen}  style={{ opacity: item.isChoosen ? "1.0" : "0.3" }}/> 
                                                </div>
                                                <RecentAddressTitle style={{ opacity: item.isChoosen ? "1.0" : "0.5" }}>
                                                    {item.street}
                                                </RecentAddressTitle>
                                            </RecentAddress>
                                            <RecentDetails>
                                                {item.info}
                                            </RecentDetails>
                                        </RecentItem>
                                        )
                                })
                            }
                        </Recents>
                      
                    </> : 
                    <>
                        <div>
                            <DeliveryTitle>
                                Pick up time:
                            </DeliveryTitle>
                            <Times className='d-flex flex-wrap justify-content-between' >
                                {
                                    time.map(item => (
                                       <Time key={item.id} style={{width:112}} onClick={() => timeHandler(item.id)} className={item.isChoosen && "active"}>
                                           {item.time}
                                       </Time>     
                                    ))
                                }
                            </Times>
                        </div>                    
                    </>
            }
                        <PaymentSection>
                            <PaymentTitle>
                                Payment:
                            </PaymentTitle>
                            <PaymentWrapper>
                                {
                                    payment.map(item => (
                                        <Payment>
                                            <Radio type="radio" id={item.type} name="payment" value={item.type} style={{marginRight:15}} />
                                            <Label for={item.type}>{item.text}</Label>
                                        </Payment>
                                    ))
                                }
                            </PaymentWrapper>
                        </PaymentSection>
            </OrderType>
            <div>
                <BasketOverall />
            </div>
        </Wrapper>
    </Container>
  )
}

export default Basket