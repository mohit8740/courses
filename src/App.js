import logo from './logo.svg';
import './App.css';
import { Example } from './component/Example';
import Navbar from './component/Navbar';
import Filters from './component/Filters';
import { FilterData,apiUrl } from './data';
import { useEffect, useState } from 'react';
import Cards from './component/Cards'
import Spinner from './component/Spinner';
function App() {
  // fetch the url and get the data

  const [courses,setcourses]  = useState(null);
  const [loading,setloading] = useState(true);
  const [catagory,setcatagory] = useState(FilterData[0].title);
    async function fetchData(){

     try{
     const res  = await fetch(apiUrl);
     const output  = await res.json();
   
        setcourses(output.data);
        console.log(output.data);
     } 
     catch(error){
      alert("something went wrong")
     }
     setloading(false);
  }


  useEffect(()=>{
     fetchData();
  },[])
  return (
    <div className="App">
      <div>
      <Navbar/>
      </div>
      <div>
      <Filters filterData = {FilterData} catagory = {catagory} setcatagory = {setcatagory}/>
      </div>
      <div className='cards'>
        {
          loading?(<Spinner/>) : ( <Cards courses = {courses} catagory = {catagory}/>)
        }
      </div>

    </div>
  );
}

export default App;
