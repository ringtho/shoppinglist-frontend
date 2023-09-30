import React from 'react'
import './Loading.scss'
import { PuffLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="loader-container">
      <PuffLoader color={'#3A7CFD'} size={150} />
    </div>
  )
}

export default Loading
