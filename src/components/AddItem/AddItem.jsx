import React, { useState } from 'react'
import './AddItem.scss'
import { addItem } from '../../api'

const AddItem = ({ setIsActive, setSelectedItem }) => {
  const [item, setItem] = useState({
    item: '',
    quantity: '',
    notes: '',
    is_completed: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value
    const id = e.target.id
    setItem((prev) => ({
      ...prev,
      [e.target.name]: id === 'quantity' ? Number(value) : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await addItem(item)
      setSelectedItem(res)
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
        <h3>Add Item</h3>
        <div className="add__item-wrapper">
          <label htmlFor="name">Item</label>
          <input
            type="text"
            id="item"
            name="item"
            value={item.item}
            onChange={handleChange}
            placeholder="e.g Oreos"
            required
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
            placeholder="eg 2"
            required
          />
        </div>
        <div className="add__item-wrapper">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="notes"
            name="notes"
            value={item.notes}
            onChange={handleChange}
            placeholder="eg For Smith and Ethan"
            required
          />
        </div>
        <button onClick={() => setIsActive(false)} className="button-cancel">
          Cancel
        </button>
        <button type="submit" disabled={isSubmitting? true : false }>
          {isSubmitting ? 'Adding Item' :'Add Item'}
        </button>
      </form>
    </div>
  )
}

export default AddItem
