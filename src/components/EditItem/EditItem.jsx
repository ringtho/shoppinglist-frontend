import React, { useState } from 'react'
import './EditItem.scss'
import PropTypes from 'prop-types'

const EditItem = ({ setList, setIsActive, itemId, list }) => {
  const { id, name, quantity, description, completed } = itemId
  const [item, setItem] = useState({
    id,
    name,
    quantity,
    description,
    completed
  })

  const handleChange = (e) => {
    const itemName = e.target.name
    const value = e.target.value
    const checked = e.target.checked
    setItem((prev) => {
      return { ...prev, [itemName]: e.target.id === 'completed' ? checked : value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedList = list.map((oldItem) => {
      if (oldItem.id === id) {
        return {
          ...oldItem,
          name: item.name,
          quantity: item.quantity,
          description: item.description,
          completed: item.completed
        }
      }
      return oldItem
    })
    setList(updatedList)
    setIsActive(false)
  }

  console.log(itemId)

  return (
    <div className="add__item">
      <form className="add__form" onSubmit={handleSubmit}>
        <h3>Edit Item</h3>
        <div className="add__item-wrapper">
          <label htmlFor="name">Item</label>
          <input
            type="text"
            id="name"
            name="name"
            value={item.name}
            onChange={handleChange}
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
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="completed">Completed</label>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            checked={item.completed}
            onChange={handleChange}
          />
        </div>
        <button onClick={() => setIsActive(false)}>Cancel</button>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

EditItem.propTypes = {
  setList: PropTypes.func,
  setIsActive: PropTypes.func,
  itemId: PropTypes.object,
  list: PropTypes.array
}

export default EditItem
