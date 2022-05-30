import React, {useState} from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../http/cartAPI';
import { useSelector } from 'react-redux';

const InputStyled = styled.input`
    width:100%;
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    background: rgba(222, 95, 90, 0.08);
    border-radius: 6px;
    height:32px;
    &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        background:url("/images/slider.png");
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        width:40px;
        height:40px;
        position:relative;  
        z-index:300;
    }
`

const Text = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: #DD052E;
    opacity: 0.5;
    position:absolute;
    bottom:12px;    
    left:50%;
    transform: translateX(-50%);
    z-index:1;
`

const Slider = ({orderInfo}) => {
    const [value, setValue] = useState(0);
    const basket = useSelector(state => state.basket.basket);

    const navigate = useNavigate()
    const rangeHandler  = (e) => {
        setValue(e.target.value)
        if (e.target.value === "100"){
            navigate("/order")       
            const submit = createOrder(basket.uuid, orderInfo)     
        }
    }

    console.log(orderInfo);


  return (
    <div style={{position:"relative"}}>
        <InputStyled type="range" onChange={(e) => rangeHandler(e)} value={value}/> 
        <Text>slide to confirm</Text>
    </div>
  )
}

export default Slider