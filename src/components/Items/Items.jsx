import React from 'react'
import './Items.scss'
import Item from '../Item/Item'
import PropTypes from 'prop-types'

const Items = ({ list, setList }) => {
  console.log(list)
  const itemsList = list.map((item) => (
    <Item key={item.id} {...item} setList={setList} list={list} />))
  return (
    <ul className="items__container">
      {itemsList}
    </ul>
  )
}

Items.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func
}

export default Items
