import React, { useState } from 'react'
import './AddItem.scss'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

const AddItem = ({ setList, setIsActive }) => {
  const [item, setItem] = useState({
    id: nanoid(),
    name: '',
    quantity: 0,
    description: '',
    completed: false
  })

  const handleChange = (e) => {
    const itemName = e.target.name
    const value = e.target.value
    setItem(prev => {
      return { ...prev, [itemName]: value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setList(prev => (
      [item, ...prev]
    ))
    setItem({
      id: nanoid(),
      name: '',
      quantity: 0,
      description: '',
      completed: false
    })
    setIsActive(false)
  }

  return (
    <div className="add__item">
      <form className="add__form" onSubmit={handleSubmit}>
        <h3>Add Item</h3>
        <div className="add__item-wrapper">
          <label htmlFor="name">Item</label>
          <input
            type="text"
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
            placeholder='e.g Oreos'
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            min={0}
            id="quantity"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
            placeholder='eg 2'
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={item.description}
            onChange={handleChange}
            placeholder='eg For Smith and Ethan'
          />
        </div>
        <button onClick={() => setIsActive(false)} className='button-cancel'>Cancel</button>
        <button type="submit">Add Item</button>
      </form>
    </div>
  )
}

AddItem.propTypes = {
  setList: PropTypes.func,
  setIsActive: PropTypes.func
}

export default AddItem
