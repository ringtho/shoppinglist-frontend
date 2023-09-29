import React, { useState } from 'react'
import './EditItem.scss'
import PropTypes from 'prop-types'
import { editItem } from '../../api'

const EditItem = ({ setList, setIsActive, itemId }) => {
  const { id, item, quantity, notes, is_completed } = itemId
  const [newItem, setNewItem] = useState({
    id,
    item,
    quantity,
    notes,
    is_completed
  })

  const handleChange = (e) => {
    const itemName = e.target.name
    const value = e.target.value
    const checked = e.target.checked
    setNewItem((prev) => {
      return { ...prev, [itemName]: e.target.id === 'completed' ? checked : value }
    })
  }

  const handleSubmit = async () => {
    try {
      const res = await editItem(newItem)
      console.log(res)
    } catch (error) {
      console.log(error)
    } finally {
      setIsActive(false)
    }
  }

  return (
    <div className="add__item">
      <form className="add__form" onSubmit={handleSubmit}>
        <h3>Edit Item</h3>
        <div className="add__item-wrapper">
          <label htmlFor="item">Item</label>
          <input
            type="text"
            id="item"
            name="item"
            value={newItem.item}
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
            value={newItem.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="notes">Description</label>
          <input
            type="text"
            id="notes"
            name="notes"
            value={newItem.notes}
            onChange={handleChange}
          />
        </div>
        <div className="edit__item-wrapper">
          <input
            type="checkbox"
            id="completed"
            name="is_completed"
            checked={newItem.is_completed}
            onChange={handleChange}
          />
          <label htmlFor="completed">Completed</label>
        </div>
        <button onClick={() => setIsActive(false)} className='button-cancel'>Cancel</button>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

EditItem.propTypes = {
  setIsActive: PropTypes.func,
  itemId: PropTypes.object
}

export default EditItem
