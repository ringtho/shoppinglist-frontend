/* eslint-disable camelcase */
import React, { useState } from 'react'
import './EditItem.scss'
import PropTypes from 'prop-types'
import { editItem } from '../../api'

const EditItem = ({ setIsActive, selectedItem, setSelectedItem }) => {
  const { id, item, quantity, notes, is_completed } = selectedItem
  const [updatedItem, setUpdatedItem] = useState({
    id,
    item,
    quantity,
    notes,
    is_completed
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const itemName = e.target.name
    const value = e.target.value
    const checked = e.target.checked
    setUpdatedItem((prev) => {
      return { ...prev, [itemName]: e.target.id === 'completed' ? checked : value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await editItem(updatedItem)
      setSelectedItem(null)
    } catch (error) {
      console.log(error)
    } finally {
      setIsActive(false)
      setIsSubmitting(false)
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
            value={updatedItem.item}
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
            value={updatedItem.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="notes">Description</label>
          <input
            type="text"
            id="notes"
            name="notes"
            value={updatedItem.notes}
            onChange={handleChange}
          />
        </div>
        <div className="edit__item-wrapper">
          <input
            type="checkbox"
            id="completed"
            name="is_completed"
            checked={updatedItem.is_completed}
            onChange={handleChange}
          />
          <label htmlFor="completed">Completed</label>
        </div>
        <button
          onClick={() => setIsActive(false)}
          className='button-cancel'
        >Cancel</button>
        <button type="submit">
          {isSubmitting ? 'Saving' : 'Save Changes'}
        </button>
      </form>
    </div>
  )
}

EditItem.propTypes = {
  setIsActive: PropTypes.func,
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func
}

export default EditItem
