import React from 'react'
import styled from 'styled-components'

const TotalTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
`

const TotalResult = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
`

const BarbarTitle = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
`

const BarbarResult = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #000000;
`

const BasketTotal = () => {
  return (
    <div>
        <div className='d-flex justify-content-between' style={{marginBottom:14}}>
            <TotalTitle>
                Total price
            </TotalTitle>
            <TotalResult>
                45 AED
            </TotalResult>
        </div>
        <div className='d-flex justify-content-between' style={{marginBottom:20}}>
            <BarbarTitle>
                BARBAR coins    
            </BarbarTitle>
            <BarbarResult>
                2 AED                             
            </BarbarResult>
        </div>
    </div>
  )
}

export default BasketTotal