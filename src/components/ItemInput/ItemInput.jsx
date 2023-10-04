import React, { useState } from 'react'
import './ItemInput.scss'
import PropTypes from 'prop-types'

const ItemInput = ({ setSearchValue }) => {
  const [item, setItem] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSearchValue(item)
    setItem('')
  }

  return (
    <section className='input__container'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='item'
          value={item}
          placeholder='Search Item'
          onChange={(e) => setItem(e.target.value)}
        />
        <button className='search-button'>SEARCH</button>
      </form>
    </section>
  )
}

ItemInput.propTypes = {
  setSearchValue: PropTypes.func
}

export default ItemInput
