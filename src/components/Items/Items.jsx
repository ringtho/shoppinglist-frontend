import React from 'react'
import './Items.scss'
import Item from '../Item/Item'
import PropTypes from 'prop-types'


const Items = ({ 
    items, 
    setList, 
    setIsEditItemActive, 
    setItemId, 
    setIsDeleteItemActive 
  }) => {

  const itemsList = items?.map((item) => (
    <Item
      key={item.id}
      {...item}
      setList={setList}
      setIsEditItemActive={setIsEditItemActive}
      setItemId={setItemId}
      setIsDeleteItemActive={setIsDeleteItemActive}
    />
  ))
  return (
    <ul className="items__container">
      {itemsList}
    </ul>
  )
}

Items.propTypes = {
  setIsEditItemActive: PropTypes.func,
  setIsDeleteItemActive: PropTypes.func,
  setItemId: PropTypes.func
}

export default Items
