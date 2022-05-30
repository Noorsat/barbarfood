import React, {useState} from 'react';
import styled from 'styled-components'
import { Modal } from 'antd';
import 'antd/dist/antd.css'; 
import { NavLink } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, minusCounter, plusCounter } from '../redux/actions/basketActions';
import { getItemDetails } from '../http/productsAPI';
import { counterMinus, counterPlus } from '../redux/actions/productsActions';
import { addToCart } from '../http/cartAPI';
import { getToken } from '../http/userAPI';

const CardSection = styled.div`
    max-width:308px;
    height:397px;
    background: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(18, 18, 18, 0.07);
    border-radius: 8px;
    margin-bottom:24px;
    margin-right:36px;  
    @media (max-width:475px){
        min-width:152px;
        height:min-content!important;
        padding:12px;
        margin-right:12px;
        margin-bottom:0;
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
        margin-bottom:16px;
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
    cursor:pointer;
    @media (max-width:475px){
        font-size: 12px;
        line-height: 24px;
        margin-bottom:12px!important;
        width:128px;
        text-align:center;
        padding:0;
    }
`

const ModalTitle = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin-bottom:10px;
    @media (max-width:475px){
        font-weight:800;
        letter-spacing: 0.01em;
        line-height: 24px;
    }
`

const ModalPrice = styled.div`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin-bottom:20px;
    @media (max-width:475px){
        font-size: 16px;
        line-height: 14px;
        margin-bottom:0;
    }
`

const ModalDescr = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    color: rgba(54, 70, 93, 0.6);
    margin-bottom:40px;
    @media (max-width:475px){
        border-top: 1px solid #F5F6F7;
        border-bottom: 1px solid #F5F6F7;
        padding-top:16px;
        padding-bottom:16px;
        margin-right:20px!important;
        margin-bottom:20px!important;   
    }
`

const ModalAdditivesTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    margin-bottom:12px;
`

const AdditivesTitle = styled.div`
    font-weight: 800;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin-top:16px;
    margin-bottom:12px;
    span{
        font-weight: 600;
        font-size: 8px;
        line-height: 10px;
        color: #FFFFFF;
        background: #DD052E;
        border-radius: 2px;
        padding:2px 6px;
        margin-left:8px;
        position:relative;
        bottom:1.5px;
    }
    @media (max-width:475px){
        span{
            padding:2px 4px;
        }
    }
`

const AdditivesPrice = styled.div`
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: #000000;
    margin-bottom:20px; 
`

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

const CounterMinus = styled.div`
    margin-left:17px;
    cursor:pointer;
`

const Counter = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #DD052E;
`

const CounterPlus = styled.div`
    margin-right:17px;
    cursor:pointer;
`

const Button = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #F5F5F5;
    padding:8px 0;
    background: #DD052E;
    box-shadow: 0px 2px 14px rgba(222, 95, 90, 0.4);
    border-radius: 6px;
    width:100%;
    cursor:pointer;
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

const ModalContent = styled.div`
    @media (max-width:980px){
        width:45%!important;
    }
    @media (max-width:847px){
        padding-right:50px!important;
    }
    @media (max-width:750px){
        background:#fff!important;
        box-shadow: 0px -4px 14px rgba(0, 0, 0, 0.05);
        border-radius: 16px 16px 0px 0px;
        width:100%!important;
    }
    @media (max-width:475px){
        padding-left:20px!important;
        padding-right:0px!important;
    }
`
const AddiviteSection = styled.div`
    overflow-x:scroll;
    @media (max-width:475px){
        padding:5px;
    }
`

const Wrapper = styled.div`
    @media (max-width:750px){
        display:block!important;
    }
`

const ModalStyled = styled(Modal)`
    @media (max-width:750px){
        width:100%!important;
        top:0!important;
    }
` 

const ImageDiv = styled.div`
    @media (max-width:750px){
        margin:0!important; 
        text-align:center;
        margin-bottom:16px!important; 
    }
`

const ModalTag = styled.span`
    color: #DD052E;
    font-weight: 600;
    font-size: 12px;
    line-height: 10px;
    background: rgba(221, 5, 46, 0.08);
    border-radius: 3px;
    padding:4px 6px;
` 

const AdditivesItem = styled.div`
    box-shadow: 0px 2px 9px rgba(18, 18, 18, 0.07);
    border-radius: 8px;    
    @media (max-width:475px){
        margin-right:12px;
        min-width:min-content;
    }
`

const ModalFooter = styled.div`
    @media (max-width:475px){
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        background:#fff;
        z-index:100;
        padding:20px;
    }
`
const AdditivitePhone = styled.div`
    @media (max-width:475px){
        padding-bottom:80px;
    }
`

const ConfirmModal = styled(Modal)`
    width:145px!important;
    position:absolute;
    right:15px;
    .ant-modal-content{
        border-radius:4px!important;
    }
    .arrow-up {
        width: 0; 
        height: 0; 
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 12px solid #fff;
        position:absolute;
        top:-9px;
        right:11px; 
    }
`

const ConfirmText = styled.div`
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #000000;
    padding-top:8px;
    padding-bottom:8px;
    padding-left:20px;
`

const Card = ({product}) => {
    const dispatch = useDispatch() 

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isConfirmModal, setConfirmModal] = useState(false);
    const [additivesData, setAdditivesData] = useState([]);

    const basket = useSelector(state => state.basket.basket)


    const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

    const handleConfirmModal= () => {
        //dispatch(addProduct(product))
        try{
        const addCart = addToCart(basket.uuid,
            {
            item_id:product.id,
            count: product.counter
            }    
        ).then((res) => {
            console.log(res);
        })
        } catch(e) {
            console.log(e);
        }
        additivesData.offered_items.map(category => {
            category.items.map(product => {
                if (product.counter >= 1){
                    const addCart = addToCart(basket.uuid, 
                        {
                            item_id: product.id,
                            count: product.counter
                        })
                }
            })
        }) 
        setIsModalVisible(false);
        scroll.scrollToTop({
            duration: 100,
            smooth: false,
        })
        window.screen.width <= 475 &&
            setTimeout(() => {
                setConfirmModal(true)
        }, 300)

    }   
    
    const closeConfirmModal = () => {
        setConfirmModal(false)
    }

    const minusHandler = (id) => {
        if (product.counter === 1){
            setIsModalVisible(false)
        }else{
            dispatch(counterMinus(id));
        }
    } 

    const plusHandler = (id) => {
        dispatch(counterPlus(id));
    }

    const openCardModal = (id) => {
        setIsModalVisible(true)
        const additives = getItemDetails(id).then((res) => {
            setAdditivesData({...res.data.data, offered_items: res.data.data.offered_items.map(category => {
                return {...category, items: category.items.map(product => {
                    return {...product, counter:0}
                })}
            })});
        });
    }

    const additiveCounterMinus = (id) => {
        setAdditivesData({...additivesData, offered_items: additivesData.offered_items.map(category => {
            return {...category, items: category.items.map(product => {
                if (product.id === id && product.counter !== 1){
                    product.counter = product.counter - 1;
                }
                return product;
            })}
        })})
    }
    
    const additiveCounterPlus = (id) => {
        setAdditivesData({...additivesData, offered_items: additivesData.offered_items.map(category => {
            return {...category, items: category.items.map(product => {
                if (product.id === id){
                    product.counter = product.counter + 1;
                }
                return product;
            })}
        })})
    }

  return (
      <>
        <ConfirmModal
            onOk={handleConfirmModal} 
            onCancel={closeConfirmModal}
            visible={isConfirmModal}
            width={145}
            style={{top:58}}
        >
            <ConfirmText>
                Added to your cart
            </ConfirmText>
            <div className="arrow-up"></div>
        </ConfirmModal>
        <ModalStyled
            visible={isModalVisible}
            width={975}
            style={{ top:100 }}
            footer={[]}
            onOk={handleOk} 
            onCancel={handleCancel}

        >
            <Wrapper className="d-flex">
                <ImageDiv style={{marginTop:29,marginLeft:36, marginRight:36}}>
                    {
                        window.screen.width <= 475 ?
                            <div className=''>
                                <div style={{position:"absolute", left:20, top:46}} onClick={handleCancel}>
                                    <img src="images/return.svg"/>
                                </div>
                                <div>
                                    <img src={product.image} width={355}/>    
                                </div>
                                <div style={{position:"absolute",right:20, top:46}}>
                                    <NavLink to="/basket"><img src="images/red-cart.png"/></NavLink>
                                </div>
                            </div>                        
                        : <img src={product.image} width={375}/>    

                    }
                    
                </ImageDiv>
                <ModalContent style={{width:528,background: "rgba(241, 242, 244, 0.2)", paddingTop:20, paddingLeft:24, paddingRight:24, paddingBottom:20}}>
                    {
                        window.screen.width <= 475 ? 
                        <>
                            <div className='d-flex justify-content-between align-items-center mb-2' style={{paddingRight:20}}>
                                  <ModalTitle>
                                        {product.name}
                                    </ModalTitle>
                                    <ModalPrice>
                                        {product.price} AED
                                    </ModalPrice>
                            </div>
                            <div className='mb-3'>
                            <ModalTag>
                                {product.tag}
                            </ModalTag>
                            </div>
                        </>
                        :  <>
                        <ModalTitle>
                              {product.name}
                          </ModalTitle>
                          <ModalPrice>
                              {product.price} AED
                          </ModalPrice>
                        </>
                    }
                  
                    <ModalDescr>
                        {product.fullDescription}
                    </ModalDescr>
                    {
                        additivesData.offered_items && additivesData.offered_items.map(addivites => (
                            <div style={{marginBottom:20}}>
                            <ModalAdditivesTitle>
                                {addivites.name}
                            </ModalAdditivesTitle>
                            <AddiviteSection className='d-flex justify-content-between'>
                                {
                                    addivites.items.map(additive => (
                                        <AdditivesItem style={{background:"white", padding:"8px 12px 12px 12px"}}>
                                            <div>
                                                <img src={additive.image} width={128}/>
                                            </div>  
                                            <AdditivesTitle>
                                                {additive.name} { additive.tags.length > 0 && <span>{additive.tags[0]}</span> }
                                            </AdditivesTitle>
                                            <AdditivesPrice>
                                                {additive.price} AED
                                            </AdditivesPrice>
                                            <div className='d-flex align-items-center justify-content-between' style={{background:" rgba(222, 95, 90, 0.06)", borderRadius:6, width:71, height:24}}>
                                                <AdditivesMinus style={{position:"relative", bottom:2}} onClick={() => additiveCounterMinus(additive.id)}>
                                                    <img src="images/minus.svg" />
                                                </AdditivesMinus>
                                                <AdditivesCounter>
                                                    {additive.counter}
                                                </AdditivesCounter>
                                                <AdditivesPlus style={{position:"relative", bottom:2}} onClick={() => additiveCounterPlus(additive.id)}>
                                                    <img src="images/plus.svg"/>
                                                </AdditivesPlus>
                                            </div>
                                        </AdditivesItem>
                                    ))
                                }
                            </AddiviteSection>
                        </div>
                        ))
                    }
                    <ModalFooter className='d-flex'>
                        <div className='d-flex align-items-center justify-content-between' style={{background:" rgba(222, 95, 90, 0.06)", borderRadius:6, width:110, height:36, marginRight:12}}>
                            <CounterMinus style={{position:"relative", bottom:1}} onClick={() => minusHandler(product.id)}>
                                <img src="images/minus.svg" width={10}/>  
                            </CounterMinus>
                            <Counter>
                                {product.counter}
                            </Counter>
                            <CounterPlus style={{position:"relative", bottom:1}} onClick={() => plusHandler(product.id)}>
                                <img src="images/plus.svg" width={10}/>   
                            </CounterPlus>
                        </div>
                        <Button onClick={handleConfirmModal}>
                            Add to busket for 20 dhm
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Wrapper>    
        </ModalStyled>
        <CardSection onClick={() => openCardModal(product.id)}>
            <CardContent>
                <div className='mb-3'>
                    <img src={product.image} width={273}/>
                </div>
                <CardHeader className='d-flex align-items-center mb-2'> 
                    <CardTitle style={{marginRight:12}}>
                        {product.name}
                    </CardTitle>
                    <CardTag>
                        {product.tags && product.tags[0]}
                    </CardTag>
                </CardHeader>
                {/* <CardDescr className='mb-3'>
                    {product.description}
                </CardDescr> */}
                <CardFooter className='d-flex align-items-center justify-content-between'>
                    <CardPrice>
                        {product.price} AED
                    </CardPrice>
                    <CardButton>
                        Add to cart
                    </CardButton>
                </CardFooter>
            </CardContent>
        </CardSection>
    </>
  )
}

export default Card;