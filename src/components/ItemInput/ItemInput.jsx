import React, { useState } from 'react'
import './ItemInput.scss'
import PropTypes from 'prop-types'

const ItemInput = ({ setParams }) => {
  const [item, setItem] = useState('')  

  const handleSubmit = async (e) => {
    e.preventDefault()
    const param = {
      item
    }
    setItem('')
    setParams(param)
  }

  return (
    <section className='input__container'>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            id='item'
            value={item}
            placeholder='Search Item'
            required
            onChange={(e) => setItem(e.target.value)} />
            <button className='search-button'>SEARCH</button>
        </form>
    </section>
  )
}

ItemInput.propTypes = {
  setList: PropTypes.func
}

export default ItemInput
