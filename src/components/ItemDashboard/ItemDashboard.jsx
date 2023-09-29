import React from 'react'
import PropTypes from 'prop-types'

const ItemDashboard = ({ items }) => {
  return (
    <div className="home__controls home__items">
      <h3>{items.length} Items</h3>
      <div className="sort__icon">
        <i
          className="fa-solid fa-sort"
          title="Ascending or Descending Sort"
        ></i>
      </div>
    </div>
  )
}

ItemDashboard.propTypes = {
  items: PropTypes.array
}

export default ItemDashboard
