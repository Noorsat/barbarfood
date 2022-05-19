import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  color: #30475E;
  margin-bottom:24px;
  padding-bottom:24px;
  border-bottom: 1px solid #F5F6F7;
  @media (max-width:475px){
    font-size: 18px;
    line-height: 24px;
    margin-bottom:21px;
    padding-bottom:21px;
  }
`

const Text = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  color: #30475E;
  margin-bottom:24px;
  @media (max-width:475px){
    font-size: 18px;
    line-height: 24px;
  }
`

const Minutes = styled.span`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #DD052E;
  background: rgba(222, 95, 90, 0.08);
  border-radius: 6px;
  padding:6px 20px;
  @media (max-width:475px){
    font-size: 16px;
    line-height: 20px;
  }
`

const Container = styled.div`
  width:413px;
  margin:0 auto;
  padding-top:200px;
  @media (max-width:475px){
    padding-top:50px;
    padding-right:20px;
    padding-left:20px;
    width:100%;
  }
`

const Button = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #F5F5F5;
  background: #DD052E;
  box-shadow: 0px 2px 14px rgba(222, 95, 90, 0.4);
  border-radius: 6px;
  padding: 8px 0;
  text-align:center;
  width:100%;
`

const ButtonSection = styled.div`
  position:absolute;
  bottom:20px;
  left:0;
  width:100%;
  padding:0 20px; 
`


const OrderDone = () => {
  return (
    <Container>
          <div className='text-center' style={{marginBottom:70}}>
            <img src="images/burrito.png"/>
          </div>
          <Title>
            Well done!<br></br>You've successfuly order food from us 
          </Title>
          <Text>
            Estimated time of arrival:          
          </Text>
          <div className='text-center'>
            <Minutes >
              25 minutes
            </Minutes>
          </div>
          {
            window.screen.width <= 475 &&
            <ButtonSection>
              <Button>
                Go to main page 
              </Button>  
              </ButtonSection>
          }
    </Container>
  )
}

export default OrderDone