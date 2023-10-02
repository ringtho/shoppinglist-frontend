import React from 'react'
import './Items.scss'
import Item from '../Item/Item'
import PropTypes from 'prop-types'


const Items = ({ 
    items, 
    setList, 
    setIsEditItemActive, 
    selectedItem, 
    setIsDeleteItemActive ,
    setSelectedItem
  }) => {

  const itemsList = items?.map((item) => (
    <Item
      key={item._id}
      {...item}
      selectedItem={selectedItem}
      setList={setList}
      setIsEditItemActive={setIsEditItemActive}
      setIsDeleteItemActive={setIsDeleteItemActive}
      setSelectedItem={setSelectedItem}

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
