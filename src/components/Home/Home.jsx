import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
// import ItemInput from '../../components/ItemInput/ItemInput'
import Items from '../Items/Items'
import './Home.scss'
import AddItem from '../AddItem/AddItem'
import EditItem from '../EditItem/EditItem'
import DeleteItem from '../DeleteItem/DeleteItem'
import ItemDashboard from '../ItemDashboard/ItemDashboard'
import { getItems } from '../../api'

const Home = () => {
  const [isAddItemActive, setIsAddItemActive] = useState(false)
  const [isEditItemActive, setIsEditItemActive] = useState(false)
  const [isDeleteItemActive, setIsDeleteItemActive] = useState(false)
  const [itemId, setItemId] = useState([])

  const [items, setItems] = useState([])

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const itemsList = await getItems()
          .then((items) => setItems(items))
        return itemsList
      } catch (error) {
        console.log(error)
      }
    }
    getItemsList()
  }, [])

  useEffect(() => {

  }, [items])

  return (
    <div className='main-container'>
      <Navbar />
      <div className="home__items">
        <button
          onClick={() => setIsAddItemActive(true)}
          className='add__item-button'
        >Add Item</button>
        {/* <ItemInput setList={setList} /> */}
        <ItemDashboard items={items} />
        <Items
          items={items}
          setIsEditItemActive={setIsEditItemActive}
          setIsDeleteItemActive={setIsDeleteItemActive}
          setItemId={setItemId}
        />
      </div>
      {isAddItemActive && (
        <AddItem setIsActive={setIsAddItemActive} />
      )}
      {isEditItemActive && (
        <EditItem
          itemId={itemId}
          setIsActive={setIsEditItemActive}
        />
      )}
      {isDeleteItemActive && (
        <DeleteItem
          setIsActive={setIsDeleteItemActive}
          item={itemId}
        />
      )}
    </div>
  )
}

export default Home
