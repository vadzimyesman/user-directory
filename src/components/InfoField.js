import React, { useState } from 'react'
import CurrentPage from './CurrentPage'
import data from '../data'
import NewUser from './NewUser'
import UpdateUser from './UpdateUser'
import useForceUpdate from 'use-force-update';



function InfoField() {


    const [currentUserId, setCurrentUserId]=useState(5)
    //const [deletedUsers, setDeletedUsers]=useState([])
    const [displayFormStatus, setDisplayFormStatus]=useState(false)
    const [updateFormStatus, setUpdateFormStatus]=useState(false)

    const buttonPrevious=()=>{
      if (currentUserId!==0){
        setCurrentUserId(currentUserId-1)
    }
        
      } 

    const buttonNext=()=>{
        if (currentUserId!==data.length-1){
          setCurrentUserId(currentUserId+1)
      }
      
    }

    const buttonDelete=()=>{

      data.splice(currentUserId,1)
      currentUserId<=data.length-1 ? setCurrentUserId(currentUserId+1) : setCurrentUserId(currentUserId-1)
      // let array = deletedUsers
      // array.push(currentUserId)
      // setDeletedUsers(array)
      // console.log(deletedUsers)
      // setCurrentUserId(currentUserId+1)
    }

    const refresh=useForceUpdate()
    
      //console.log(data[currentUserId].favoriteMovies)
      let  favoriteMoviesList=data[currentUserId].favoriteMovies.map((element, index)=>{
        return <li key={index}>{element}</li>
      })



    

  return (
    <div>
      <header className='header'>Home</header>
    <div className='blackCont'>
      
      <div className='whiteCont'>
      <CurrentPage pageNumber={currentUserId+1} numberOfUsers={data.length} />
      <div>
      <h4></h4>
      <h5>{data[currentUserId].name.first} {data[currentUserId].name.last}</h5>
      <h5>From: {data[currentUserId].city}, {data[currentUserId].country}</h5>
      <h5>Job Title: {data[currentUserId].title}</h5>
      <h5>Employer: {data[currentUserId].employer}</h5>
      <h5>Favourite Movies:
        <ol>
          {favoriteMoviesList}
        </ol>
      </h5>
      </div>  
      </div>
      <div className='allButtons'>
      <button
        className='routing'
        onClick={buttonPrevious}
        >Previous</button>
      <div className='modify'>
        <button
        className='modifyButtons'
        onClick={()=>{setUpdateFormStatus(true)
          console.log(currentUserId)
          }
        }
        >Edit</button>
        <button
        className='modifyButtons'
        onClick={buttonDelete}
        >Delete</button>
        <button
        className='modifyButtons'
        onClick={()=>setDisplayFormStatus(true)}
        >New</button>
      </div>
      <button
        onClick={buttonNext}
        className='routing'
        > Next ></button>
      </div>

      {displayFormStatus && <NewUser display={setDisplayFormStatus}/>}
      {updateFormStatus && <UpdateUser update={setUpdateFormStatus} currentId={currentUserId} rerender={refresh}/>}
      
    </div>
    </div>
    
  )
}

export default InfoField


// {
//   id: 1,
//   name: { first: "Waylin", last: "Lumsdon" },
//   city: "Likiep",
//   country: "Marshall Islands",
//   employer: "Twinder",
//   title: "Physical Therapy Assistant",
//   favoriteMovies: [
//     "That Night in Varennes (Nuit de Varennes, La)",
//     "Spy(ies) (Espion(s))",
//     "Klip (Clip)"
//   ]
// }