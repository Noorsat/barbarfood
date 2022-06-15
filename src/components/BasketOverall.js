import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { getToken } from '../http/userAPI';
import BasketProduct from './BasketProduct';
import BasketTotal from './BasketTotal';
import Slider from './Slider';



const BasketWrapper = styled.div`
  max-width:375px;
  width:375px;
  padding:20px;
  background: #FFFFFF;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.05);
  border-radius: 16px 16px 0px 0px;
  @media (max-width:475px){
    box-shadow:none;
    padding:0;
    max-width:100%;
    width:100%;
  }
`

const BasketTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  border-bottom: 1px solid #F5F6F7;
  padding-bottom:20px;
  margin-bottom:20px;
`

const Title = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #000000;
`

const Result = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #000000;
`

const SaleTitle = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #DD052E;
`

const SaleResult = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #DD052E;
`

const BasketStatistcs = styled.div`
  @media (max-width:475px){
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background:#fff;
    padding:16px 20px 20px!important;
    margin:0!important;
    box-shadow: 0px -4px 14px rgba(0, 0, 0, 0.05);
  }
`


const BasketOverall = ({orderInfo}) => {
  const basket = useSelector(state => state.basket.basket)
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const product = getToken(basket.uuid).then(res => {
      setProducts(res.data.data);
    })
  }, [])

  return (
    <BasketWrapper>
        <BasketTitle>
            Your Order:  
        </BasketTitle>
        <div style={{borderBottom: "1px solid #F5F6F7"}}>
          { products?.cart?.items &&
            products?.cart?.items.map(item => (
              <BasketProduct name={item.name} price={item.price} counter={item.count}/>
            ))
          }
        </div>
        <BasketStatistcs style={{marginTop:20,borderBottom: "1px solid #F5F6F7", paddingBottom:14, marginBottom:20 }}>
          <div className='d-flex justify-content-between' style={{marginBottom:14}}>  
            <Title>
              2 items
            </Title>
            <Result>
              40 AED
            </Result>
          </div>
          <div className='d-flex justify-content-between' style={{marginBottom:14}}> 
            <Title>
              2 items
            </Title>
            <Result>
              40 AED
            </Result>
          </div>
          <div className='d-flex justify-content-between' style={{marginBottom:14, paddingBottom:14, borderBottom:"1px solid #F5F6F7"}}> 
            <SaleTitle>
              Delivery
            </SaleTitle>
            <SaleResult>
              -5 AED
            </SaleResult>
          </div>
        <BasketTotal />
        <Slider orderInfo={orderInfo}/>
        </BasketStatistcs>
    </BasketWrapper>
  )
}

export default BasketOverall;