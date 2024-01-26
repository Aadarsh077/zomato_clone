import React from 'react';
import restaurantList from '../data/foodCards';

const Cards = (props) => {
    const {searchInput, filteredResults} = props;
  return (
    <>
      <div className="container">
                <h3>Best Food in Bengaluru</h3>
                <div className='explore-grid'>
                    {searchInput && searchInput.length > 1 ? (
                        filteredResults.map((restaurant) => {
                            const rating = restaurant?.info?.rating?.rating_text;
                            const offers = restaurant?.bulkOffers ?? [];
                            const approxPrice = restaurant?.info?.cfo?.text;
                            const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0, 3);
                            return (
                                <div key={restaurant.info.resId} className='explore-card'>
                                    <div className="explore-card-cover">
                                        <img src={restaurant?.info?.image?.url} className='explore-card-image' alt={restaurant?.info?.name ?? ""} />
                                        <div className="delivery-time">{restaurant?.order?.deliveryTime}</div>
                                        {offers.length > 1 && <div className='pro-off'>{offers[0].text}</div>}
                                        {restaurant?.gold?.text && <div className='gold-off'>{restaurant.gold.text}</div>}
                                        {offers.length > 1 && <div className="discount">{offers[1].text}</div>}
                                    </div>
                                    <div className="res-row">
                                        <div className="res-name">{restaurant?.info?.name ?? ""}</div>
                                        {rating && (
                                            <div className="res-rating">
                                                {rating}
                                            </div>
                                        )}
                                    </div>
                                    <div className="res-row">
                                        {cuisines.length > 0 && (
                                            <div className="res-cuisine">
                                                {cuisines.map((item, i) => (
                                                    <span key={i} className="res-cuisine-tag">
                                                        {item}{i !== cuisines.length - 1 && ","}
                                                    </span>
                                                ))}
                                                {approxPrice && <div className='approx-price'>{approxPrice}</div>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        restaurantList.map((restaurant) => {
                            const rating = restaurant?.info?.rating?.rating_text;
                            const offers = restaurant?.bulkOffers ?? [];
                            const approxPrice = restaurant?.info?.cfo?.text;
                            const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0, 3);
                            return (
                                <div key={restaurant.info.resId} className='explore-card'>
                                    <div className="explore-card-cover">
                                        <img src={restaurant?.info?.image?.url} className='explore-card-image' alt={restaurant?.info?.name ?? ""} />
                                        <div className="delivery-time">{restaurant?.order?.deliveryTime}</div>
                                        {offers.length > 1 && <div className='pro-off'>{offers[0].text}</div>}
                                        {restaurant?.gold?.text && <div className='gold-off'>{restaurant.gold.text}</div>}
                                        {offers.length > 1 && <div className="discount">{offers[1].text}</div>}
                                    </div>
                                    <div className="res-row">
                                        <div className="res-name">{restaurant?.info?.name ?? ""}</div>
                                        {rating && (
                                            <div className="res-rating">
                                                {rating}
                                            </div>
                                        )}
                                    </div>
                                    <div className="res-row">
                                        {cuisines.length > 0 && (
                                            <div className="res-cuisine">
                                                {cuisines.map((item, i) => (
                                                    <span key={i} className="res-cuisine-tag">
                                                        {item}{i !== cuisines.length - 1 && ","}
                                                    </span>
                                                ))}
                                                {approxPrice && <div className='approx-price'>{approxPrice}</div>}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        }))}
                </div>
        </div>
    </>
  )
}

export default Cards
