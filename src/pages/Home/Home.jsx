import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ItemInput from '../../components/ItemInput/ItemInput'
import Items from '../../components/Items/Items'
import './Home.scss'

const Home = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  )

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(list))
  }, [list])
  return (
    <div>
      <Navbar />
      <div className="home__items">
        <ItemInput setList={setList} />
        <div className="home__controls home__items">
          <h3>15 Items</h3>
          <p>Icons</p>
        </div>
        <Items list={list} />
      </div>
    </div>
  )
}

export default Home
