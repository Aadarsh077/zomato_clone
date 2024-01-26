import React, { useState } from 'react'
import { Button, CloseButton } from 'react-bootstrap'
import restaurantList from '../data/foodCards'

const Filters = ({ setFilteredItems }) => {
  const handleApplyFilter = () => {
    const newFilteredItems = restaurantList.filter((item) =>
      item?.info?.name.toLowerCase().includes('chicken')
    );
    setFilteredItems(newFilteredItems);
  };
  return (
    <>
        <div className='container my-3' data-bs-theme="dark" >
            <Button onClick={handleApplyFilter} variant='secondary mx-2' >Pure Veg</Button><CloseButton style={{ fontSize: '0.7rem', color: 'red' }}/>
            <Button variant='secondary mx-2'>Rating : 4.0+</Button><CloseButton style={{ fontSize: '0.7rem' }}/>
            <Button variant='secondary mx-2'>Cuisines</Button><CloseButton style={{ fontSize: '0.7rem' }}/>
        </div>
    </>
  )
}

export default Filters
