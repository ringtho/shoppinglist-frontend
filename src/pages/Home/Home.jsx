import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ItemInput from '../../components/ItemInput/ItemInput'
import Items from '../../components/Items/Items'
import './Home.scss'
import AddItem from '../../components/AddItem/AddItem'
import EditItem from '../../components/EditItem/EditItem'
// import Todos from '../../components/comp/Comp'

const Home = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  )
  const [isAddItemActive, setIsAddItemActive] = useState(false)
  const [isEditItemActive, setIsEditItemActive] = useState(false)
  const [itemId, setItemId] = useState([])

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(list))
  }, [list])

  return (
    <div>
      <Navbar />
      <div className="home__items">
        <button onClick={() => setIsAddItemActive(true)}>Add Item</button>
        <ItemInput setList={setList} />
        <div className="home__controls home__items">
          <h3>{list.length} Items</h3>
          <p>Icons</p>
        </div>
        <Items
          list={list}
          setList={setList}
          setIsEditItemActive={setIsEditItemActive}
          setItemId={setItemId}
        />
      </div>
      {isAddItemActive && (
        <AddItem setList={setList} setIsActive={setIsAddItemActive} />
      )}
      {isEditItemActive && (
        <EditItem setList={setList} itemId={itemId} setIsActive={setIsEditItemActive} list={list} />
      )}
    </div>
  )
}

export default Home
