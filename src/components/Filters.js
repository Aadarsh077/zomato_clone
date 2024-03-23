import React, { useState } from 'react';
import { Button, CloseButton } from 'react-bootstrap';
import restaurantList from '../data/foodCards';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Filters = () => {
  const [ratingFilter, setRatingFilter] = useState(null);

  const handleRatingFilter = (rating) => {
    setRatingFilter(rating);
  };

  // Filter restaurants based on the selected rating
  const filteredRestaurants = ratingFilter
    ? restaurantList.filter((restaurant) => parseFloat(restaurant.info.rating.aggregate_rating) > ratingFilter)
    : restaurantList;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png"
            className="navbar-logo"
            alt="img"
          />
        </Link>
        <div className="col-lg-8 mx-4">
          <div className="search-local">
            <FaSearch id="search-icon" />
            <input type="text" className="form-control" placeholder="Search for restaurantLists, cuisine or a dish..." />
          </div>
        </div>
        <div>
          <a className="btn btn-outline-secondary mx-2" href="/" role="button">
            Login
          </a>
        </div>
        <div>
          <a className="btn btn-outline-secondary mx-2" href="/" role="button">
            Sign Up
          </a>
        </div>
      </nav>
      <div className="container my-3" data-bs-theme="dark">
        <Button variant="secondary mx-2" onClick={() => handleRatingFilter(4)}>
          Rating : 4.0+
        </Button>
        <CloseButton
          style={{ fontSize: '0.7rem' }}
          onClick={() => setRatingFilter(null)}
        />
        <Cards restaurantList={filteredRestaurants} />
      </div>
    </>
  );
};

export default Filters;
