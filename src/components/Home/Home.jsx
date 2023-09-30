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
import Loading from '../Loading/Loading'
import NoItems from '../NoItems/NoItems'

const Home = () => {
  const [isAddItemActive, setIsAddItemActive] = useState(false)
  const [isEditItemActive, setIsEditItemActive] = useState(false)
  const [isDeleteItemActive, setIsDeleteItemActive] = useState(false)
  const [itemId, setItemId] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    setIsSubmitting(true)
    const getItemsList = async () => {
      try {
        const itemsList = await getItems()
          .then((items) => setItems(items))
        return itemsList
      } catch (error) {
        setItems([])
        console.log(error)
      } finally {
        setIsSubmitting(false)
      }
    }
    getItemsList()
  }, [])

  useEffect(() => {

  }, [items])

  return (
    <div className="main-container">
      <Navbar />
      {isSubmitting ? (
        <Loading />
      ) : (
        <div className="home__items">
          <button
            onClick={() => setIsAddItemActive(true)}
            className="add__item-button"
          >
            <i className="fa-solid fa-plus"></i>Add Item
          </button>
          {/* <ItemInput setList={setList} /> */}
          {items.length === 0 ? (
            <NoItems setIsActive={setIsAddItemActive} />
          ) : (
            <>
              <ItemDashboard items={items} />
              <Items
                items={items}
                setIsEditItemActive={setIsEditItemActive}
                setIsDeleteItemActive={setIsDeleteItemActive}
                setItemId={setItemId}
              />
            </>
          )}
        </div>
      )}
      {isAddItemActive && (
        <AddItem
          setIsActive={setIsAddItemActive}
          setIsSubmitting={setIsSubmitting}
        />
      )}
      {isEditItemActive && (
        <EditItem itemId={itemId} setIsActive={setIsEditItemActive} />
      )}
      {isDeleteItemActive && (
        <DeleteItem setIsActive={setIsDeleteItemActive} item={itemId} />
      )}
    </div>
  )
}

export default Home
