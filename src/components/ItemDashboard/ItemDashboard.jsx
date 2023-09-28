import React from 'react'
import PropTypes from 'prop-types'

const ItemDashboard = ({ list, setList }) => {
//   const [sort, setSort] = useState(false)
  const sortList = () => {
    const updatedList = list.sort((a1, a2) => {
      return a1.name - a2.name
    })
    console.log(updatedList)
    setList(updatedList)
  }
  return (
    <div className="home__controls home__items">
      <h3>{list.length} Items</h3>
      <div className="sort__icon" onClick={sortList}>
        <i
          className="fa-solid fa-sort"
          title="Ascending or Descending Sort"
        ></i>
      </div>
    </div>
  )
}

ItemDashboard.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func
}

export default ItemDashboard
