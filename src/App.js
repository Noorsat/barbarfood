import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'
import {useState} from 'react';
import Basket from './pages/Basket';
import OrderDone from './pages/OrderDone';
import ProductItem from './pages/ProductItem';

const App = () => {
  const [shopData, setShopData] = useState([
    {
      title:"Shawarma",
      data: [
        {
          id:1,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1,
        },
        {
          id:2,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:3,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:4,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:5,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:6,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:7,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:8,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    {
      title:"Manakesh",
      data: [
        {
          id:9,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:10,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:11,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:12,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:13,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:14,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:15,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:16,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    {
      title:"Grills&Platters",
      data: [
        {
          id:17,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:18,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:19,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:20,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:21,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:22,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:23,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:24,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    {
      title:"Pizza",
      data: [
        {
          id:25,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:26,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:27,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:28,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:29,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:30,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:31,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:32,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    {
      title:"Sandwiches",
      data: [
        {
          id:33,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:34,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:35,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:36,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:37,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:38,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:39,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:40,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    {
      title:"Appetizers",
      data: [
        {
          id:41,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:42,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:43,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:44,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:45,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:46,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:47,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:48,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    {
      title:"Beverage",
      data: [
        {
          id:49,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:50,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:51,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:52,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:53,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:54,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:55,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:56,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    {
      title:"Juices",
      data: [
        {
          id:57,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:58,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:59,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:60,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:61,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:62,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:63,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:64,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    {
      title:"Coctails",
      data: [
        {
          id:65,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:66,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:67,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:68,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:69,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:70,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:71,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
        {
          id:72,
          img:"images/product.png",
          name: "Djej",
          tag: "Very tasty",
          description:"Consists of flat bread topped with oil and za'atar.",
          fullDescription:"Made with shredded chicken, homemade chicken stock, rice, spices, minced meat, and toasted nuts, this dish is often at the center of the table at every holiday, occasion, and celebration.",
          price:20,
          counter:1
        },
      ]
    },
    ]
  )

  const [selectedProducts, setSelectedProducts] = useState({})

  return (
    <div className="App">
      <NavBar  />
      <Routes>
        <Route path="/" element={<Home shopData={shopData} setSelectedProducts={setSelectedProducts} />} />
        <Route path="/type" element={<ProductItem selectedProducts={selectedProducts}/> } />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<OrderDone />} />
      </Routes>
    </div>
  );
}

export default App;
