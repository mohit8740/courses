import React from 'react'
import './Filter.css'
function Filters(props) {
  let filterData = props.filterData;
  // let catagory = props.catagory;
  let setcatagory = props.setcatagory;
  function filterhandler(title){
    console.log(title);
setcatagory(title);
  }
  return (
    <div className='filter'>
      {
      filterData.map((data)=>{
        return(
            <button className='btn' onClick={()=>filterhandler(data.title)} key={data.id}>{data.title}</button>
  )})      
}
    </div>
  )
}

export default Filters
