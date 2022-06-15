import React from 'react'
import styled from 'styled-components'

const AdditivesMinus = styled.div`
    margin-left:12px;
`

const AdditivesCounter = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #DD052E;
`

const AdditivesPlus = styled.div`
    margin-right:11px;
`


const Title = styled.div`
    font-weight: 800;
    font-size: 18px;
    line-height: 30px;
    color: #000000;
    margin-bottom:6px;
`


const Text = styled.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 14px;
    color: #000000;
    opacity: 0.6;
    margin-bottom:12px;
`

const Price = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #000000;
`

const Wrapper = styled.div`
    @media (max-width:475px){
        box-shadow: 0px 2px 9px rgba(18, 18, 18, 0.07);
        border-radius: 8px;
        margin-bottom:16px;
        padding:12px;
    }

`


const BasketProduct = ({name,price,counter}) => {
  return (
    <Wrapper className='d-flex align-items-center' style={{paddingBottom:20}}>
        {/* <div style={{marginRight:20}}>  
            <img src={img} width={140}/>
        </div>    */}
        <div>
            <Title>
                {name}
            </Title>
            {/* <Text>
                {descr}
            </Text> */}
            <div className='d-flex justify-content-between'>
                <Price>
                    {price} AED
                </Price>
                <div className='d-flex align-items-center justify-content-between' style={{background:" rgba(222, 95, 90, 0.06)", borderRadius:6, width:71, height:24}}>
                    <AdditivesMinus>
                        <img src="images/minus.svg"/>
                    </AdditivesMinus>
                    <AdditivesCounter>
                        {counter}
                    </AdditivesCounter>
                    <AdditivesPlus>
                    <img src="images/plus.svg"/>
                    </AdditivesPlus>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default BasketProduct