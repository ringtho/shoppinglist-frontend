import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import ItemInput from '../../components/ItemInput/ItemInput'
import Items from '../Items/Items'
import AddItem from '../AddItem/AddItem'
import EditItem from '../EditItem/EditItem'
import DeleteItem from '../DeleteItem/DeleteItem'
import ItemDashboard from '../ItemDashboard/ItemDashboard'
import { getAllItems } from '../../api'
import NoItems from '../NoItems/NoItems'
import Loading from '../Loading/Loading'
import UserDetails from '../UserDetails/UserDetails'
import './Home.scss'

const Home = () => {
  const [isAddItemActive, setIsAddItemActive] = useState(false)
  const [isEditItemActive, setIsEditItemActive] = useState(false)
  const [isDeleteItemActive, setIsDeleteItemActive] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [filteredItems, setFilteredItems] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isViewUserActive, setIsViewUserActive] = useState(false)
  const [user, setUser] = useState('')
  const [userInitials, setUserInitials] = useState('')

  useEffect(() => {
    // setIsSubmitting(true)
    setIsLoading(true)
    const getItemsList = async () => {
      try {
        const { data } = await getAllItems()
        setItems(data)
        if (filteredItems.length > 0) {
          // eslint-disable-next-line array-callback-return
          const updated = filteredItems.map((oldItem) => {
            const newItem = data.find(
              (updatedItem) => updatedItem.id === oldItem.id
            )
            if (newItem !== undefined) {
              return newItem
            }
          })
          setFilteredItems(updated)
        }
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getItemsList()
  }, [selectedItem])

  useEffect(() => {
    if (searchValue) {
      const filtered = items.filter(
        (item) => (item.item.toLowerCase().includes(searchValue)))
      setFilteredItems(filtered)
    }
  }, [searchValue])

  useEffect(() => {
    const tokenObject = window.localStorage.getItem('token')
    const user = JSON.parse(tokenObject).user
    setUser(user)
    const userInitials = user.split(' ')[0][0] + user.split(' ')[1][0]
    setUserInitials(userInitials.toUpperCase())
  }, [])

  return (
    <div className="main-container">
      <Navbar
        setIsViewUserActive={setIsViewUserActive}
        userInitials={userInitials}
        user={user}
      />
      <div className="home__items">
        <p className="greeting">
          Hello, <span>{user.split(' ')[0]}</span>
          👋🏼
        </p>
        <button
          onClick={() => setIsAddItemActive(true)}
          className="add__item-button"
        >
          <i className="fa-solid fa-plus"></i>Add Item
        </button>

        {isLoading && items?.length === 0
          ? <Loading />
          : (!isLoading && items?.length === 0)
              ? (<NoItems setIsActive={setIsAddItemActive} />)
              : (
          <>
            <ItemInput setSearchValue={setSearchValue} />
            <ItemDashboard
              items={!searchValue ? items : filteredItems}
              setItems={setItems}
            />
            <Items
              items={!searchValue ? items : filteredItems}
              setIsEditItemActive={setIsEditItemActive}
              setIsDeleteItemActive={setIsDeleteItemActive}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              setItems={setItems}
            />
          </>
                )}
      </div>
      {isAddItemActive && (
        <AddItem
          setSelectedItem={setSelectedItem}
          setIsActive={setIsAddItemActive}
        />
      )}
      {isEditItemActive && (
        <EditItem
          setIsActive={setIsEditItemActive}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}
      {isDeleteItemActive && (
        <DeleteItem
          setIsActive={setIsDeleteItemActive}
          id={selectedItem.id}
          setSelectedItem={setSelectedItem}
        />
      )}
      {isViewUserActive && <UserDetails user={user} />}
    </div>
  )
}

export default Home
