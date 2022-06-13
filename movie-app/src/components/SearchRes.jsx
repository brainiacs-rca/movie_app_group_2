import React from 'react'
import { useParams } from 'react-router-dom'

const SearchRes = () => {
  const search = useParams()
  const query = search.movie  

  return (
    <div>SearchRes</div>
  )
}

export default SearchRes