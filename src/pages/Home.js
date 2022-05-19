import React from 'react'
import News from '../components/News'
import ShopSection from '../components/ShopSection'

const Home = ({shopData, setSelectedProducts}) => {
  return (
    <div>
      <News images={["images/promotions-1.jpg", "images/promotions-2.png"]}/>
      <ShopSection shopData={shopData} setSelectedProducts={setSelectedProducts}/>
    </div>
  )
}

export default Home