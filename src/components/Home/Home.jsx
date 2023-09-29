import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
// import ItemInput from '../../components/ItemInput/ItemInput'
import Items from '../Items/Items'
import './Home.scss'
import AddItem from '../AddItem/AddItem'
import EditItem from '../EditItem/EditItem'
import DeleteItem from '../DeleteItem/DeleteItem'
import ItemDashboard from '../ItemDashboard/ItemDashboard'

const Home = () => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('shoppingList')) || []
  )
  const [isAddItemActive, setIsAddItemActive] = useState(false)
  const [isEditItemActive, setIsEditItemActive] = useState(false)
  const [isDeleteItemActive, setIsDeleteItemActive] = useState(false)
  const [itemId, setItemId] = useState([])

  useEffect(() => {
    localStorage.setItem('shoppingList', JSON.stringify(list))
  }, [list])

  return (
    <div className='main-container'>
      <Navbar />
      <div className="home__items">
        <button
          onClick={() => setIsAddItemActive(true)}
          className='add__item-button'
        >Add Item</button>
        {/* <ItemInput setList={setList} /> */}
        <ItemDashboard list={list} setList={setList} />
        <Items
          list={list}
          setList={setList}
          setIsEditItemActive={setIsEditItemActive}
          setIsDeleteItemActive={setIsDeleteItemActive}
          setItemId={setItemId}
        />
      </div>
      {isAddItemActive && (
        <AddItem setList={setList} setIsActive={setIsAddItemActive} />
      )}
      {isEditItemActive && (
        <EditItem
          setList={setList}
          itemId={itemId}
          setIsActive={setIsEditItemActive}
          list={list}
        />
      )}
      {isDeleteItemActive && (
        <DeleteItem
          setIsActive={setIsDeleteItemActive}
          list={list}
          setList={setList}
          id={itemId.id}
        />
      )}
    </div>
  )
}

export default Home