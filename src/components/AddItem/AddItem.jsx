import React, { useEffect, useState } from 'react'
import './AddItem.scss'
import PropTypes from 'prop-types'
// import { addItem } from '../../actions/authActions'
import { addItem } from '../../api'
import { useDispatch } from 'react-redux'

const AddItem = ({ setList, setIsActive }) => {
  const [item, setItem] = useState({
    item: '',
    quantity: 0,
    notes: '',
    is_completed: false
  })

  const [jwt, setJwt] = useState('')


  const dispatch = useDispatch()

  const handleChange = (e) => {
    const itemName = e.target.name
    const value = e.target.value
    setItem(prev => {
      return { ...prev, [itemName]: value }
    })
  }

  useEffect(() => {
    setJwt(localStorage.getItem('shoppingToken'))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await addItem(item)
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
        <h3>Add Item</h3>
        <div className="add__item-wrapper">
          <label htmlFor="name">Item</label>
          <input
            type="text"
            id="item"
            name="item"
            value={item.item}
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
            id="notes"
            name="notes"
            value={item.notes}
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
