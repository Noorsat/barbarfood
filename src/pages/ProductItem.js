import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #000000;
`


const CardFooter = styled.div`
    @media (max-width:475px){
        display:block!important;  
    }
`

const CardHeader = styled.div`
    @media (max-width:475px){
        margin-bottom:6px!important;
    }
`


const CardContent = styled.div`
    margin:16px 20px;
    @media (max-width:475px){
        margin:0;
        img{
            max-width:100%;
        }    
    }
    
`

const CardTitle = styled.div`
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    @media (max-width:475px){
        font-size: 16px;
        line-height: 18px;
    }
`

const CardTag = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 10px;
    color: #DD052E;
    background: rgba(221, 5, 46, 0.08);
    border-radius: 2px;
    padding:3px 10px 2px 10px;
    margin-top:3px;
    @media (max-width:475px){
        font-size: 8px;
        line-height: 10px;
        padding: 2px 6px 1px 6px;
        white-space: nowrap;
    }
`

const CardDescr = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
    opacity: 0.6;
    @media (max-width:475px){
        font-size: 10px;
        line-height: 14px;
        margin-bottom:12px!important;
    }
`

const CardPrice = styled.div`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    @media (max-width:475px){
        font-size: 14px;
        line-height: 14px;
    }
`

const CardButton = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    padding:4px 12px;
    background: #DD052E;
    border-radius: 4px;
    @media (max-width:475px){
        font-size: 12px;
        line-height: 24px;
        margin-bottom:12px!important;
        width:128px;
        text-align:center;
        padding:0;
    }
`

const ProductWrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(18, 18, 18, 0.07);
    border-radius: 8px;
    padding:12px;
    margin-bottom:16px;
`

const ProductItem = ({selectedProducts}) => {
  return (
    <div style={{padding:"0 20px"}}>
        <Title className='mb-3'>
            {selectedProducts.title}
        </Title>
        <div>
          {
            selectedProducts.data.map(product => (
              <ProductWrapper className='d-flex align-items-center' >
              <div className='me-3'>
                    <img src={product.img} width={121}/>
                </div>
              <div>
                  <CardHeader className='d-flex align-items-center mb-2'> 
                      <CardTitle style={{marginRight:12}}>
                          {product.name}
                      </CardTitle>
                      <CardTag>
                          {product.tag}
                      </CardTag>
                  </CardHeader>
                  <CardDescr className='mb-3'>
                      {product.description}
                  </CardDescr>
                  <CardFooter className='d-flex align-items-center justify-content-between'>
                      <CardPrice>
                          {product.price} AED
                      </CardPrice>
                  </CardFooter>
              </div>
            </ProductWrapper>
            ))
          }
        </div>
    </div>
  )
}

export default ProductItem