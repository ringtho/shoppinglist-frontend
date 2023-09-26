import React from 'react'
import './Items.scss'
import Item from '../Item/Item'
import PropTypes from 'prop-types'

const Items = ({ list }) => {
  const itemsList = list.map((item) => <Item key={item.id} {...item} />)
  return (
    <ul className="items__container">
      {itemsList}
    </ul>
  )
}

Items.propTypes = {
  list: PropTypes.array
}

export default Items
