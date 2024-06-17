import React from 'react'
import './Spinner.css'
function Spinner() {
  return (
    <div className='loading'>
      <span className='loader'></span>
      <p className='para'>loading....</p>
    </div>
  )
}

export default Spinner
