import React, { useState, useEffect } from 'react'
import './Item.scss'
import PropTypes from 'prop-types'
import { editItem } from '../../api'

const Item = (props) => {
  const {
    _id, 
    item, 
    quantity, 
    notes, 
    completed, 
    setIsEditItemActive,
    setIsDeleteItemActive,
    setSelectedItem
  } = props

  const [isComplete, setIsComplete] = useState(completed)
  const [isActive, setIsActive] = useState(false)

  // console.log(completed)
  // console.log(isComplete)

  const handleEditClick = () => {
    setSelectedItem({ _id, item, quantity, notes, completed })
    setIsEditItemActive(true)
  }

  const handleDeleteClick = () => {
    setSelectedItem({ _id, item, quantity, notes, completed })
    setIsDeleteItemActive(true)
  }

  // useEffect(() => {
  //   const editComplete = async () => {
  //     try {
  //       const res = await editItem({
  //         _id,
  //         item,
  //         quantity,
  //         notes,
  //         completed: isComplete,
  //       })
  //       setSelectedItem(null)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   editComplete()
  // }, [isComplete])

  const handleIsComplete = async () => {
    setIsComplete(!isComplete)
    console.log('completed:', isComplete)
    try {
      const res = await editItem({
        _id,
        item,
        quantity,
        notes,
        completed: isComplete,
      })
      setIsComplete(!isComplete)
      setSelectedItem(null)
    } catch (error) {
      console.log(error)
    }
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
          className={completed ? 'circle__item circle__fill' : 'circle__item'}
          onClick={handleIsComplete}
        >
          {completed && (
            <i className="fa fa-check icon-white" aria-hidden="true"></i>
          )}
        </div>
        <div className="item__text-wrapper">
          <p className={completed ? 'item__text text-lined' : 'item__text'}>
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
