import React from 'react'
import Item from '../Item/Item'
import PropTypes from 'prop-types'
import './Items.scss'

const Items = (props) => {
  const {
    items,
    setIsEditItemActive,
    selectedItem,
    setIsDeleteItemActive,
    setSelectedItem,
    setItems
  } = props
  const itemsList = items?.map((item) => (
    <Item
      key={item.id}
      item={item}
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
  setSelectedItem: PropTypes.func,
  setItems: PropTypes.func,
  selectedItem: PropTypes.object,
  items: PropTypes.array
}

export default Items
