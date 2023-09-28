import React, { useState } from 'react'
import './Item.scss'
import PropTypes from 'prop-types'

const Item = (props) => {
  const {
    name, id, quantity, description, completed, setIsEditItemActive, setItemId, setIsDeleteItemActive, setList, list
  } = props
  const [isComplete, setIsComplete] = useState(completed)
  const [isActive, setIsActive] = useState(false)

  const handleEditClick = () => {
    setItemId({ id, name, quantity, description, completed })
    setIsEditItemActive(true)
  }

  const handleDeleteClick = () => {
    setItemId({ id, name, quantity, description, completed })
    setIsDeleteItemActive(true)
  }

  const handleIsComplete = () => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !completed }
      }
      return item
    })
    setList(updatedList)
    setIsComplete(!isComplete)
  }

  return (
    <li className="item__container">
      <div
        className={
          !completed ? 'item__wrapper' : 'item__wrapper filled__complete'
        }
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <div
          className={isComplete ? 'circle__item circle__fill' : 'circle__item'}
          onClick={handleIsComplete}
        >
          {completed && <i className="fa fa-check icon-white" aria-hidden="true"></i>}
        </div>
        <div className="item__text-wrapper">
          <p className="item__text">
            {name} <span className="item__quantity">({quantity})</span>
          </p>
          <span className="item__description">{description}</span>
        </div>
        {isActive && (
          <span className="item__controls">
            <div className="icons__container" onClick={handleEditClick}>
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
            <div className="icons__container" onClick={handleDeleteClick}>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </span>
        )}
      </div>
    </li>
  )
}

Item.propTypes = {
  setList: PropTypes.func,
  id: PropTypes.string,
  list: PropTypes.array,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  completed: PropTypes.bool,
  setIsEditItemActive: PropTypes.func,
  setIsDeleteItemActive: PropTypes.func,
  setItemId: PropTypes.func
}

export default Item
