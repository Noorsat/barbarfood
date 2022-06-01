import React from 'react';
import styled from 'styled-components'
import { useHistory, useNavigate } from "react-router-dom";
import Card from './Card';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useSelector } from 'react-redux';

const Container = styled.div`
    max-width:1376px;
    margin:0 auto;  
    margin-top:48px;
    @media (max-width: 1380px){
        padding:0 20px;
    } 
    @media (max-width:475px){
        margin-top:10px;
    }
`   

const Title = styled.div`
    font-weight: 600;
    font-size: 24px;
    line-height: 24px;
    color: #000000;
    margin-bottom:24px; 
`

const CardSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width:475px){
        padding-bottom:6px;
        padding-left:6px;
        paddint-top:6px;
    }
    @media (max-width:1063px){
        flex-wrap:nowrap!important;
        overflow-x:scroll;
    }
`

const SeeAll = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #DD052E;
    @media (max-width:475px){
        display:block!important;
    }

`

const ShopSection = ({setSelectedProducts}) => {
    const navigate = useNavigate();
    const seeAllHandler = (item) => {
        scroll.scrollToTop({
            duration: 100,
            smooth: false,
        })
        setSelectedProducts(item);
        navigate("/type")
    }

    const shopData = useSelector(state => state.products.products);

    return (
        shopData.results && shopData.results.map(item => (
            <Element name={item.name}>
                <Container>
                    <div className='d-flex justify-content-between'>
                        <Title>
                            {item.name}
                        </Title>  
                        <SeeAll onClick={() => seeAllHandler(item)} style={{display:"none"}}>
                            See all
                        </SeeAll>
                    </div>
                    <CardSection>
                        {
                            item.items.map(product => (
                                <Card product={product}/>
                            ))
                        }
                    </CardSection>
                </Container>
            </Element>
        ))
    )
}
export default ShopSection