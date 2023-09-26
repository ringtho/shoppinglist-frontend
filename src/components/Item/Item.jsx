import React, { useState } from 'react'
import './Item.scss'
import PropTypes from 'prop-types'

const Item = ({ item: listItem }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [item, setItem] = useState(listItem)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsEditMode(false)
  }

  return (
    <li className="item__container">
      {!isEditMode
        ? (
        <p className="item__text" onClick={() => setIsEditMode(true)}>
          {item}
        </p>
          )
        : (
        <form onSubmit={handleSubmit}>
          <input
            className='item__input'
            type="text"
            value={item}
            name="item"
            onChange={(e) => setItem(e.target.value)}
          />
        </form>
          )}
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.any
}

export default Item
