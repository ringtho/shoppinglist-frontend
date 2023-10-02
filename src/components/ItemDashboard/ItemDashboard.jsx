import React from 'react'
import PropTypes from 'prop-types'
import './ItemDashboard.scss'

const ItemDashboard = ({ items, setParams }) => {
  const handleDescending = () => {
    setParams({sort: '-item' })
  }

  const handleAscending = () => {
    setParams({ sort: 'item' })
  }

  return (
    <div className="sort__controls">
      <h3>{items.length} Items</h3>
      <div className="sort__icon">
        <p className='sorting-title'>Sorting</p>
        <i
          className="fa fa-chevron-circle-up"
          aria-hidden="true"
          onClick={handleDescending}
        ></i>
        <i
          className="fa fa-chevron-circle-down"
          aria-hidden="true"
          onClick={handleAscending}
        ></i>
      </div>
    </div>
  )
}

ItemDashboard.propTypes = {
  items: PropTypes.array
}

export default ItemDashboard
