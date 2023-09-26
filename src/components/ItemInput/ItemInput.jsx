import React, { useState } from 'react'
import './ItemInput.scss'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

const ItemInput = ({ setList }) => {
  const [item, setItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setList(prev => (
      [{ id: nanoid(), item, completed: false }, ...prev]
    ))
    setItem('')
  }

  return (
    <section className='input__container'>
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            id='item'
            value={item}
            placeholder='Create Item'
            onChange={(e) => setItem(e.target.value)} />
        </form>
    </section>
  )
}

ItemInput.propTypes = {
  setList: PropTypes.func
}

export default ItemInput
