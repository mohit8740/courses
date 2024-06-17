import React from 'react'
import Card from './Card'
import './Card.css'
function Cards(props) {
   let courses  = props.courses;
   let catagory = props.catagory;
   function getcourses(){
    if(catagory === 'All'){
    let allcourses = [];
    Object.values(courses).forEach(array=>{
      array.forEach(courseData=>{
        allcourses.push(courseData);
      })
    })
    return allcourses
   }
   else{
    return courses[catagory]
   }

  }

  return (
    <div className='card'>
     {
      getcourses().map((course)=>
      (
        <Card key  = {course.id} course = {course}/>
      ))}
    
    </div>
  )
}

export default Cards
