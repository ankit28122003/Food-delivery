import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Storecontext } from '../../context/Storecontext'

const Fooditem = ({ id, name, price, description, image }) => {

    
    const { cartitems, addToCart, removeFromCart } = useContext(Storecontext);

    return (
        <div className="food-item">
            <div className="food-item-image-container">
                <img className="food-item-image" src={image} alt="" />
                {!cartitems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartitems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>

                }

            </div>

            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>



    )
}

export default Fooditem
