import React from 'react'
import './DeleteItem.scss'
import PropTypes from 'prop-types'

const DeleteItem = ({ setIsActive, list, setList, id }) => {
  const handleDelete = () => {
    const updatedList = list.filter((oldItem) => oldItem.id !== id)
    setList(updatedList)
    setIsActive(false)
  }

  return (
    <div className="add__item">
      <div className="delete__item">
        <h3>Delete Item</h3>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={() => setIsActive(false)}>Cancel</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

DeleteItem.propTypes = {
  setIsActive: PropTypes.func,
  list: PropTypes.array,
  setList: PropTypes.func,
  id: PropTypes.string
}

export default DeleteItem
