import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './PageScreens/LoginScreen';
import HomeScreen from './PageScreens/HomeScreen';
import AboutScreen from './PageScreens/AboutScreen';
import BlogScreen from './PageScreens/BlogScreen';
import ProductDetail from './PageScreens/ProductDetail';
import { Logininfo } from '../App';
import AddtoCart from './PageScreens/AddtoCart';

export const CartContext = createContext();

export const CartCounter = createContext();

const NavigationStack = () => {
    const loginflag = useContext(Logininfo);

    const [cart, setCart] = useState([]);


    const addItemsToCart = (item) => {
        setCart([...cart, item]);
    }



    const [cartCount, setCartCount] = useState(0);

    const IncrementCount = () => {
        setCartCount(cartCount + 1);
    }

    return (
        <BrowserRouter>
            {loginflag.login
                ?
                <CartContext.Provider value={{ cart, addItemsToCart}}>
                    <CartCounter.Provider value={{ cartCount, IncrementCount }}>
                        <Routes>
                            <Route path="/" element={<HomeScreen />} />
                            <Route path="/about" element={<AboutScreen />} />
                            <Route path="/blog" element={<BlogScreen />} />
                            <Route path="/addtocart" element={<AddtoCart />} />
                            <Route path="/product/:id" element={<ProductDetail />} />
                            <Route path="/cart" element={<AddtoCart />} />
                        </Routes>
                    </CartCounter.Provider>
                </CartContext.Provider>
                :
                <Routes>
                    <Route path="/" element={<LoginScreen />} />
                </Routes>
            }
        </BrowserRouter>
    );
};

export default NavigationStack;


