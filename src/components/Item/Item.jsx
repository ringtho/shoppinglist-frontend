import React, { useState } from 'react'
import './Item.scss'
import PropTypes from 'prop-types'

const Item = (props) => {
  const {
    name, id, quantity, description, completed, setList, list, setIsEditItemActive, setItemId
  } = props
  const [isEditMode, setIsEditMode] = useState(false)
  const [item, setItem] = useState(name)
  const [isComplete, setIsComplete] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedList = list.map(oldItem => {
      if (oldItem.id === id) {
        return { ...oldItem, name: item }
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

  const handleClick = () => {
    setItemId({ id, name, quantity, description, completed })
    setIsEditItemActive(true)
  }
  // useEffect(() => {
  // }, [])

  return (
    <li className="item__container">
      {/* eslint-disable-next-line multiline-ternary */}
      {!isEditMode ? (
        <div
          className="item__wrapper"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <div
            className={
              isComplete ? 'circle__item circle__fill' : 'circle__item'
            }
            onClick={() => setIsComplete(!isComplete)}
          ></div>
          <div className="item__text-wrapper">
            <p className="item__text" onClick={() => setIsEditMode(true)}>
              {name} <span className="item__quantity">({quantity})</span>
            </p>
            <span className="item__description">{description}</span>
          </div>
          {isActive && (
            <span className="item__controls">
              <div className="icons__container" onClick={handleClick}>
                <i className="fa-regular fa-pen-to-square"></i>
              </div>
              <div className="icons__container" onClick={handleDelete}>
                <i className="fa-regular fa-trash-can"></i>
              </div>
            </span>
          )}
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
  list: PropTypes.array,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  completed: PropTypes.bool,
  setIsEditItemActive: PropTypes.func,
  setItemId: PropTypes.func
}

export default Item
