import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import AppDownload from '../../Components/Appdownload/AppDownload'

const Home = () => {

    const [category, setcategory] = useState("All");


    return (
        <div>
            <Header />
            <Exploremenu category={category} setcategory={setcategory} />
            <FoodDisplay category={category} />
            <AppDownload />

        </div>
    )
}

export default Home
