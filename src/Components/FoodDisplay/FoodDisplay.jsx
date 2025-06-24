import React, { useContext } from 'react'
import './FoodDisplay.css'
import { Storecontext } from '../../context/Storecontext'
import Fooditem from '../Fooditem/Fooditem'

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(Storecontext)

    return (
        <div className='FoodDisplay' id='FoodDisplay'>
            <h2>Top dishes near you</h2>
            <div className="Food-display-list">
                {food_list.map((item, index) => {
                    return <Fooditem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
                })
                }
            </div>

        </div>
    )
}

export default FoodDisplay
