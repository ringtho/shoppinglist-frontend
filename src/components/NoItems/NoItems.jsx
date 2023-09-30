import React from 'react'
import './NoItems.scss'

const NoItems = ({ setIsActive }) => {
  return (
    <div className="no-items-container">
      <div className="no-items-wrapper">
        <p className="text-no-items">
          Oops, you haven't added an item to this shopping list
        </p>
        <p className="start-no-text">Start now by clicking the button below</p>
        <button onClick={() => setIsActive(true)}>
          <i class="fa-solid fa-plus"></i>Add Item
        </button>
      </div>
    </div>
  )
}

export default NoItems
