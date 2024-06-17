import React from 'react'
import './Card.css'
function Card(props) {
  let course = props.course;
  return (
    <div className=' container'>
      <div>
         <img src={course.image.url} />
      </div>
      <div className='description'>
        <p className='cardtitile'>{course.title}</p>
        <p className='cardpara'>{course.description}</p>
      </div>
      
    </div>
  )
}

export default Card
