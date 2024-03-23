import React, { useState } from 'react'
import restaurantList from '../data/foodCards';
import { FaSearch } from "react-icons/fa";
import Carousel from './Carousel';
import Cards from './Cards';


const Navbar = () => {
    
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = restaurantList.filter((restaurant) => {
                return Object.values({
                    resName: restaurant?.info?.name,
                    cuisines:restaurant?.info?.cuisine?.map((item) => item.name).slice(0, 3)}).join('').toLowerCase().includes(searchValue.toLowerCase());
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(restaurantList)
        }
    }
    const showCarousel = searchInput.length <= 1;
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png" className='navbar-logo' alt="img" />
                <div className="col-lg-8 mx-4">
                    <div className="search-local">
                        <FaSearch id="search-icon" />
                        <input onChange={(e) => searchItems(e.target.value)} type="text" className="form-control" placeholder="Search for restaurantLists, cuisine or a dish..." />
                    </div>
                </div>
                <div>
                    <a className="btn btn-outline-secondary mx-2" href="/" role="button">Login</a>
                </div>
                <div>
                    <a className="btn btn-outline-secondary mx-2" href="/" role="button">Sign Up</a>
                </div>
            </nav>
            {showCarousel && <Carousel />}
            <Cards searchInput={searchInput} filteredResults={filteredResults} />
            
        </>
    )
}

export default Navbar
