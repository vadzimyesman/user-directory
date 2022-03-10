import React, { useState } from 'react'
import CurrentPage from './CurrentPage'
import data from '../data'
import NewUser from './NewUser'
import UpdateUser from './UpdateUser'
import useForceUpdate from 'use-force-update';



function InfoField() {

    const previousText ="< Previous"
    const nextText ="Next >"
    const [currentUserId, setCurrentUserId]=useState(0)
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
        return <li className='infoText2' key={index}>{element}</li>
      })



    

  return (
    <div>
      <header className='header'>Home</header>
    <div className='blackCont'>
      
      <div className='whiteCont'>
      <CurrentPage pageNumber={currentUserId+1} numberOfUsers={data.length} />
      <div>
      <h4></h4>
      <h5 className='names'>{data[currentUserId].name.first} {data[currentUserId].name.last}</h5>
      <div className='userInfo1'>
        <div className='flexText'><h5 className='infoText3'>From:&nbsp;</h5><h5 className='infoText2'>{data[currentUserId].city}, {data[currentUserId].country}</h5></div>
        <div className='flexText'><h5 className='infoText3'>Job Title:&nbsp;</h5><h5 className='infoText2'>{data[currentUserId].title}</h5></div>
        <div className='flexText'><h5 className='infoText3'>Employer:&nbsp;</h5><h5 className='infoText2'>{data[currentUserId].employer}</h5></div>
      </div>

      <div ><h5 className='infoText3 favMovies' >Favourite Movies:</h5>
        <ol className='movieList'>
          {favoriteMoviesList}
        </ol>
      </div>
      </div>  
      </div>
      <div className='allButtons'>
      <button
        className='routing'
        onClick={buttonPrevious}
        >{previousText}</button>
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
        >{nextText}</button>
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