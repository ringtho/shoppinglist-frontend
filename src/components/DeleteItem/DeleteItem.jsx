import React, { useEffect } from 'react'
import './DeleteItem.scss'
import PropTypes from 'prop-types'
import { deleteItem } from '../../api'

const DeleteItem = ({ setIsActive, item }) => {

  const handleDelete = async() => {
    try {
      const res = await deleteItem(item.id)
      console.log(res)
    } catch (error) {
      console.log(error)
    } finally {
      setIsActive(false)
    }
  }

  return (
    <div className="add__item">
      <form 
        className="delete__item" 
        onSubmit={() => handleDelete()}
      >
        <h3>Delete Item</h3>
        <p>Are you sure you want to delete this item? This action cannot be reversed</p>
        <button 
          onClick={() => setIsActive(false)} 
          className='button-cancel'
        >Cancel</button>
        <button 
          type='submit' 
          onClick={() => handleDelete()} 
          id='button'
          className='button-delete'
        >Delete</button>
      </form>
    </div>
  )
}

DeleteItem.propTypes = {
  setIsActive: PropTypes.func,
  item: PropTypes.object
}

export default DeleteItem
