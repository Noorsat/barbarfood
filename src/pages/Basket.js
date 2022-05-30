import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components'
import { Button, notification, Space } from 'antd';
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
    @media (max-width:475px){
        margin-bottom:0!important;
    }
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
    @media (max-width:475px){
        width:100%;
        margin-bottom:16px;
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
        opacity:0.5
    }
    @media (max-width:475px){
        width:100%!important;
        margin-bottom:16px;
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

const Flat = styled.div`
  @media (max-width:475px){
      margin-right:15px;
  }
`
const AdditionalInfo = styled.div`
  @media (max-width:475px){
        input{
            padding-bottom:32px;
        }
    }
`

const ModalButton = styled.button`
    background: #DD052E;
    color:#fff;
    font-weight:700;
    width:100%;
    border:none;
    border-radius:5px;
    padding:10px 0;
    font-size:16px;
`


const Basket = () => {
  const [selectedType, setSelectedType] = useState("takeaway")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
  }; 
  const [recentAdresses, setRecentAddresses] = useState([])

  const [addressItem, setAddressItem] = useState({
      isChoosen:true,
      city:"Sharjah",
      address:"",
      flat:"",
      floor:"",
      additional:""
  })

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
              setOrderInfo({...orderInfo, address: `${item.city}, ${item.address}, ${item.floor}, ${item.flat}`})
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
            setOrderInfo({...orderInfo, delivery: {
                ...orderInfo.delivery, timeslot: item.time
            }})
        }else{
            item.isChoosen = false;
        }
        return item;
    }))
  }

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Please fill all inputs'
    });
  };

  const submitHandler = () => {
      if (addressItem.city === "" || addressItem.flat === "" || addressItem.additional === "" || addressItem.address === "" || addressItem.floor === ""){
        openNotificationWithIcon('error')
      }else{
      setRecentAddresses((recentAdresses => [...recentAdresses, addressItem].reverse().map((item, index) => {
          if (index === 0){
              item.isChoosen = true;
          }else{
              item.isChoosen = false;
          }
          return item;
      })))
      setAddressItem({
        isChoosen:true,
        city:"Sharjah",
        address:"",
        flat:"",
        floor:"",
        additional:""
      })
      setShow(false);
      setOrderInfo({...orderInfo, address: `${addressItem.city}, ${addressItem.address}, ${addressItem.floor}, ${addressItem.flat}`})
    } 
  }

  const [orderInfo, setOrderInfo] = useState(
      {
          payment_type:"",
          address:"",
          delivery: {
              delivery_type: "",
              timeslot:""
          }
      }
  )

  const paymentTypeHandler = (type) => {
    if (type === "card"){
        setOrderInfo({...orderInfo, payment_type: "by_cart"})
    }else{
        setOrderInfo({...orderInfo, payment_type:"by_cash"})
    }
  }

  const selectedTypeHandler = (type) => {   
      setSelectedType(type)
      if (type === "delivery"){
          setOrderInfo({...orderInfo, delivery: {
              ...orderInfo.delivery, delivery_type: "delivery", timeslot: ""
          }})
      }else{ 
          setOrderInfo({
              ...orderInfo, address:"", delivery: {
                  ...orderInfo.delivery, delivery_type: "take_away"
              }
          })
      }
  }

  return (
    <Container>
        <ModalStyled show={show} onHide={handleClose}>  
        <div style={{padding:"32px 20px 20px 20px"}}>
        <ModalTitle>
            Add new delivery address: 
        </ModalTitle>
        <Select required onChange={(e) => setAddressItem({...addressItem, city: e.target.value})} value={addressItem.city}>
            <option selected disabled hidden>Choose city</option>
            <option>Sharjah</option>
            <option>Dubai</option>
        </Select>   
        <Input placeholder='Enter address' onChange={(e) => setAddressItem({...addressItem, address: e.target.value})} value={addressItem.address}/>   
        <Inputs className='d-flex' style={{marginBottom:24}}> 
            <Flat>
                <Input placeholder='Flat №' style={{width:208}} className="me-3" onChange={(e) => setAddressItem({...addressItem, flat: e.target.value})} value={addressItem.flat}/>   
            </Flat>   
            <div>
                <Input placeholder='Floor' style={{width:208}} className="me-3" onChange={(e) => setAddressItem({...addressItem, floor: e.target.value})} value={addressItem.floor}/>   
            </div>   
        </Inputs>
        <AdditionalInfo>
            <Input placeholder='Additional info' style={{width:208}} className="me-3" onChange={(e) => setAddressItem({...addressItem, additional: e.target.value})} value={addressItem.additional}/>   
        </AdditionalInfo>
        <ModalButton onClick={submitHandler}>
            Submit
        </ModalButton>
        </div>
      </ModalStyled>
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
                        <TypeButton onClick={() => selectedTypeHandler("delivery")}>
                            Delivery
                        </TypeButton>
                        </>
                        : 
                        <>
                            <TypeButton onClick={() => selectedTypeHandler("takeaway")}>
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
                                <Select required onChange={(e) => setAddressItem({...addressItem, city: e.target.value})} value={addressItem.city}>
                                    <option selected disabled hidden>Choose city</option>
                                    <option value="Sharjah">Sharjah</option>
                                    <option value="Dubai">Dubai</option>
                                </Select>   
                            </div>   
                            <div>
                                <Input placeholder='Enter address' onChange={(e) => setAddressItem({...addressItem, address: e.target.value})} value={addressItem.address}/>   
                            </div>                            
                        </Inputs>
                        <Inputs className='d-flex' style={{marginBottom:24}}>
                            <div>
                                <Input placeholder='Flat №' style={{width:208}} className="me-3" onChange={(e) => setAddressItem({...addressItem, flat: e.target.value})} value={addressItem.flat}/>   
                            </div>   
                            <div>
                                <Input placeholder='Floor' style={{width:208}} className="me-3" onChange={(e) => setAddressItem({...addressItem, floor: e.target.value})} value={addressItem.floor}/>   
                            </div>   
                            <div>
                                <Input placeholder='Additional info' style={{width:208}} className="me-3" onChange={(e) => setAddressItem({...addressItem, additional: e.target.value})} value={addressItem.additional}/>   
                            </div>   
                        </Inputs>
                        <ModalButton style={{width:"100%"}} className="mb-4" onClick={submitHandler}>
                            Submit
                        </ModalButton>
                        </DeliverySection>
                        <Recents>
                            {
                                window.screen.width <= 475
                                &&
                                <MobileRecent className='d-flex justify-content-between' onClick={handleShow}>
                                    <MobileRecentTitle>
                                        Add new delivery address
                                    </MobileRecentTitle>
                                    <MobileRecentPlus>
                                        <img src="/images/black-plus.svg"/>
                                    </MobileRecentPlus>
                                </MobileRecent>
                            }
                            {
                                recentAdresses && recentAdresses.map(item => {
                                    return (
                                        <RecentItem onClick={() => chooseHandler(item.street)}>
                                            <RecentAddress className='d-flex mb-3'>
                                                <div style={{marginRight:12}}>
                                                    <Checkbox type="checkbox" checked={item.isChoosen}  style={{ opacity: item.isChoosen ? "1.0" : "0.3" }}/> 
                                                </div>
                                                <RecentAddressTitle style={{ opacity: item.isChoosen ? "1.0" : "0.5" }}>
                                                    {item.city}, {item.address}
                                                </RecentAddressTitle>
                                            </RecentAddress>
                                            <RecentDetails>
                                                Flat {item.flat} / {item.floor} floor / {item.additional}
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
                                            <Radio type="radio" id={item.type} name="payment" value={item.type} style={{marginRight:15}} onChange={() => paymentTypeHandler(item.type)}/>
                                            <Label for={item.type}>{item.text}</Label>
                                        </Payment>
                                    ))
                                }
                            </PaymentWrapper>
                        </PaymentSection>
            </OrderType>
            <div>
                <BasketOverall orderInfo={orderInfo}/>
            </div>
        </Wrapper>
    </Container>
  )
}

export default Basket