import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)

const StorecontextProvider = (props) => {

    const [cartitems, setCartitems] = useState({});

    const addToCart = (itemId) => {
        if (!cartitems[itemId]) {
            setCartitems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }


    const removeFromCart = (itemId) => {
        setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = {
        food_list,
        cartitems,
        setCartitems,
        addToCart,
        removeFromCart
    }

    useEffect(() => {
        console.log(cartitems);

    }, [cartitems])

    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )

}

export default StorecontextProvider;

// restart from 1hr33min