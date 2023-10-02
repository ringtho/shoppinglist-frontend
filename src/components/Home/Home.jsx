import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import ItemInput from '../../components/ItemInput/ItemInput'
import Items from '../Items/Items'
import './Home.scss'
import AddItem from '../AddItem/AddItem'
import EditItem from '../EditItem/EditItem'
import DeleteItem from '../DeleteItem/DeleteItem'
import ItemDashboard from '../ItemDashboard/ItemDashboard'
import { getAllItems } from '../../api'
// import Loading from '../Loading/Loading'
import NoItems from '../NoItems/NoItems'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [isAddItemActive, setIsAddItemActive] = useState(false)
  const [isEditItemActive, setIsEditItemActive] = useState(false)
  const [isDeleteItemActive, setIsDeleteItemActive] = useState(false)
  const [itemId, setItemId] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [items, setItems] = useState([])
  // const [searchParams] = useSearchParams()
  const [params, setParams] = useState({})

  // useEffect(() => {
  //   const currentParams = Object.fromEntries([...searchParams])
  //   setParams(currentParams)
  // }, [searchParams])

  console.log(params)

  useEffect(() => {
    setIsSubmitting(true)
    const getItemsList = async () => {
      try {
        const { data } = await getAllItems(params)
        setItems(data.items)
      } catch (error) {
        console.log(error)
      } finally {
        setIsSubmitting(false)
      }
    }
    getItemsList()
  }, [selectedItem, params])


  useEffect(() => {

  }, [items])

  return (
    <div className="main-container">
      <Navbar />
      <div className="home__items">
        <button
          onClick={() => setIsAddItemActive(true)}
          className="add__item-button"
        >
          <i className="fa-solid fa-plus"></i>Add Item
        </button>
        <ItemInput setItems={setItems} setParams={setParams} />
        {items.length === 0 ? (
          <NoItems setIsActive={setIsAddItemActive} />
        ) : (
          <>
            <ItemDashboard items={items} setParams={setParams} />
            <Items
              items={items}
              setIsEditItemActive={setIsEditItemActive}
              setIsDeleteItemActive={setIsDeleteItemActive}
              setItemId={setItemId}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </>
        )}
      </div>
      {isAddItemActive && (
        <AddItem
          setSelectedItem={setSelectedItem}
          setIsActive={setIsAddItemActive}
          setIsSubmitting={setIsSubmitting}
        />
      )}
      {isEditItemActive && (
        <EditItem 
          itemId={itemId} 
          setIsActive={setIsEditItemActive} 
          selectedItem={selectedItem} 
          setSelectedItem={setSelectedItem} 
        />
      )}
      {isDeleteItemActive && (
        <DeleteItem
          setIsActive={setIsDeleteItemActive}
          {...selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}
    </div>
  )
}

export default Home
