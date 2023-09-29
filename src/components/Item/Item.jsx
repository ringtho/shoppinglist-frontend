import React, { useState, useEffect } from 'react'
import './Item.scss'
import PropTypes from 'prop-types'
import { editItem } from '../../api'

const Item = (props) => {
  const {
    item, id, quantity, notes, is_completed, setIsEditItemActive, setItemId, setIsDeleteItemActive,
  } = props
  const [isComplete, setIsComplete] = useState(is_completed)
  const [isActive, setIsActive] = useState(false)

  const handleEditClick = () => {
    setItemId({ id, item, quantity, notes, is_completed })
    setIsEditItemActive(true)
  }

  const handleDeleteClick = () => {
    setItemId({ id, item, quantity, notes, is_completed })
    setIsDeleteItemActive(true)
  }

  useEffect(() => {
    console.log(is_completed)
    console.log({ id, item, quantity, notes, is_completed: isComplete })
    console.log(isComplete)
    const editComplete = async () => {
      try {
        const res = await editItem({
          id,
          item,
          quantity,
          notes,
          is_completed: isComplete,
        })
        // setIsComplete((prev) => !prev)
      } catch (error) {
        console.log(error)
      }
    }

    editComplete()
    

  }, [isComplete])

  const handleIsComplete = async () => {
    // console.log(is_completed)
    setIsComplete(prev => !prev)
    // console.log({ id, item, quantity, notes, is_completed: isComplete })
    // e.preventDefault()
    
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
          className={isComplete ? 'circle__item circle__fill' : 'circle__item'}
          onClick={handleIsComplete}
        >
          {isComplete && <i className="fa fa-check icon-white" aria-hidden="true"></i>}
        </div>
        <div className="item__text-wrapper">
          <p className="item__text">
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

Item.propTypes = {
  id: PropTypes.number,
  title: PropTypes.array,
  description: PropTypes.string,
  quantity: PropTypes.number,
  is_completed: PropTypes.bool,
  setIsEditItemActive: PropTypes.func,
  setIsDeleteItemActive: PropTypes.func,
  setItemId: PropTypes.func
}

export default Item
