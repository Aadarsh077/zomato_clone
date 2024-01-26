import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Cards from './Cards';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import restaurantList from '../data/foodCards';

const Cuisines = () => {
  const [filteredItems, setFilteredItems] = useState(restaurantList);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link to="/"><img src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png" className='navbar-logo' alt="img" /></Link>
        <div className="col-lg-8 mx-4">
          <div className="search-local">
            <FaSearch id="search-icon" />
            <input type="text" className="form-control" placeholder="Search for restaurantLists, cuisine or a dish..." />
          </div>
        </div>
        <div>
          <a className="btn btn-outline-secondary mx-2" href="/" role="button">Login</a>
        </div>
        <div>
          <a className="btn btn-outline-secondary mx-2" href="/" role="button">Sign Up</a>
        </div>
      </nav>
      <Filters setFilteredItems={setFilteredItems} />
      <Cards filteredItems={filteredItems} />
    </>
  )
}

export default Cuisines;
