import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width:1376px;
    margin:0 auto;  
    margin-top:154px;
    position:relative;
    @media (max-width: 1380px){
        padding:0 20px;
        margin-top:20px!important;
    } 
   
`   


const Title = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    @media (max-width:475px){
        border-top: 1px solid #F5F6F7;
        padding-top:20px;   
    }
`

const Image = styled.img`
    @media (max-width: 475px){
        width:104%!important;
    }
`

const News = ({images}) => {
  return (
    <Container>
        <Title className='mb-4'>
            Promotions and news
        </Title>
        <div className='d-flex flex-wrap' style={{position:"relative", left:-10}}>
        {
            images.map(item => (
               <Image src={item} width={460}/>     
            ))
        }
        </div>
    </Container>
  )
}

export default News