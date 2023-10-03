import React from 'react'
import PropTypes from 'prop-types'
import './ItemDashboard.scss'

const ItemDashboard = ({ items, setItems }) => {
  const handleDescending = () => {
    const sortedItems = items.sort((a, b) => {
      if (a.item.toLowerCase() < b.item.toLowerCase()) {
        return -1
      }
      if (a.item.toLowerCase() > b.item.toLowerCase()) {
        return 1
      }
      return 0
    })
    setItems([...sortedItems])
  }

  const handleAscending = () => {
    const sortedItems = items.sort((a, b) => {
      if (a.item.toLowerCase() < b.item.toLowerCase()) {
        return 1
      }
      if (a.item.toLowerCase() > b.item.toLowerCase()) {
        return -1
      }
      return 0
    })
    setItems([...sortedItems])
  }

  return (
    <div className="sort__controls">
      <h3>{items?.length} Items</h3>
      <div className="sort__icon">
        <p className="sorting-title">Sorting</p>
        <i
          className="fa fa-chevron-circle-up"
          aria-hidden="true"
          onClick={() => handleAscending()}
        ></i>
        <i
          className="fa fa-chevron-circle-down"
          aria-hidden="true"
          onClick={() => handleDescending()}
        ></i>
      </div>
    </div>
  )
}

ItemDashboard.propTypes = {
  items: PropTypes.array
}

export default ItemDashboard
