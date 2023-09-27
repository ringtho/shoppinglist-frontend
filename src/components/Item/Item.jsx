import React, { useState } from 'react'
import './Item.scss'
import PropTypes from 'prop-types'

const Item = ({ item: listItem, id, setList, list }) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [item, setItem] = useState(listItem)
  const [isComplete, setIsComplete] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedList = list.map(oldItem => {
      if (oldItem.id === id) {
        return { ...oldItem, item }
      }
      return oldItem
    })
    setList(updatedList)
    setIsEditMode(false)
  }

  const handleDelete = () => {
    const updatedList = list.filter((oldItem) => oldItem.id !== id)
    setList(updatedList)
  }

  return (
    <li className="item__container">
      {/* eslint-disable-next-line multiline-ternary */}
      {!isEditMode ? (
        <div className="item__wrapper">
          <div className={isComplete ? 'circle__item circle__fill' : 'circle__item'}
            onClick={() => setIsComplete(!isComplete)}
          ></div>
          <p className="item__text" onClick={() => setIsEditMode(true)}>
            {item}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="circle__item"></div>
          <input
            className="item__input"
            type="text"
            value={item}
            name="item"
            onChange={(e) => setItem(e.target.value)}
          />
          <span className="item__controls">
            <div className="icons__container" onClick={handleSubmit}>
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
            <div className="icons__container" onClick={handleDelete}>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </span>
        </form>
      )}
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.string,
  setList: PropTypes.func,
  id: PropTypes.string,
  list: PropTypes.array
}

export default Item
