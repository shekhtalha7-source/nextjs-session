"use client"


import React, { createContext, useEffect, useState } from 'react';


export const OurContext = createContext();

const ContProvider = ({children}) => {

    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(date => setProducts(date))
        .catch(err => console.log(err));
        
    },[])
    
    
    return (
        <OurContext.Provider value={{products}}>{children}</OurContext.Provider>
    );
};

export default ContProvider;