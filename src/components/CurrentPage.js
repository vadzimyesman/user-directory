import React, { useState } from 'react'

function CurrentPage(props) {

    const [currentPage, setCurrentPage]=useState(1)

  return (
    <div className='currentPage'>
        {props.pageNumber}/{props.numberOfUsers}
    </div>
  )
}

export default CurrentPage