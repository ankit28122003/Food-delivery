import { createContext } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null)

const StorecontextProvider = (props) => {



    const contextValue = {
        food_list
    }
    
    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )

}

export default StorecontextProvider;

// begin from 1hr 33min in this file