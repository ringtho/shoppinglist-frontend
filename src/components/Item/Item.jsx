import React, { useState, useEffect } from 'react'
import './Item.scss'
import PropTypes from 'prop-types'
import { editItem } from '../../api'

const Item = (props) => {
  const {
    id, 
    item, 
    quantity, 
    notes, 
    is_completed, 
    setIsEditItemActive,
    setIsDeleteItemActive,
    setSelectedItem,
    setItems
  } = props

  const [isComplete, setIsComplete] = useState(is_completed)
  const [isActive, setIsActive] = useState(false)

  const handleEditClick = () => {
    setSelectedItem({ id, item, quantity, notes, is_completed })
    setIsEditItemActive(true)
  }

  const handleDeleteClick = () => {
    setSelectedItem({ id, item, quantity, notes, is_completed })
    setIsDeleteItemActive(true)
  }

  const handleIsComplete = async () => {
    try {
      const res = await editItem({
        id,
        item,
        quantity,
        notes,
        is_completed: !isComplete,
      })
      setIsComplete(!isComplete)
      setItems(prev => {
        const updated = prev.map(item => {
          if (item.id === res.id) {
            return res
          } else {
            return item
          }
        })
        return updated
      })
    } catch (error) {
      console.log(error)
    } finally {
      setSelectedItem(null)
    }
  }

  return (
    <li className="item__container">
      <div
        className={
          !is_completed ? 'item__wrapper' : 'item__wrapper filled__complete'
        }
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <div
          className={is_completed ? 'circle__item circle__fill' : 'circle__item'}
          onClick={handleIsComplete}
        >
          {is_completed && (
            <i className="fa fa-check icon-white" aria-hidden="true"></i>
          )}
        </div>
        <div className="item__text-wrapper">
          <p className={is_completed ? 'item__text text-lined' : 'item__text'}>
            {item} <span className="item__quantity">({quantity})</span>
          </p>
          <span className="item__description">{notes}</span>
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

export default Item
