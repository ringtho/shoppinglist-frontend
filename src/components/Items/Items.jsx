import React from 'react'
import './Items.scss'
import Item from '../Item/Item'
import PropTypes from 'prop-types'


const Items = ({ 
    items, 
    setIsEditItemActive, 
    selectedItem, 
    setIsDeleteItemActive ,
    setSelectedItem,
    setItems
  }) => {

  const itemsList = items?.map((item) => (
    <Item
      key={item.id}
      {...item}
      selectedItem={selectedItem}
      setItems={setItems}
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
