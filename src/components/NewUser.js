import React from "react";
import { useFormik } from "formik";
import data from '../data'




const NewUser = (props) => {

    const formik = useFormik({
        initialValues: {
            id: data.length,
            firstName:"",
            lastName:"",
            city:"",
            country:"",
            employer:"",
            title:"",
            favoriteMovie1:"",
            favoriteMovie2:"",
            favoritemovie3:""


        },
        onSubmit: values =>{
            props.display(false)
            console.log(props.display)
            console.log(values)
            //alert(JSON.stringify(values, null, 2));
            data.push({id: values.id,
                    name: { first: values.firstName, last: values.lastName },
                    city: values.city,
                    country: values.country,
                    employer: values.employer,
                    title: values.title,
                    favoriteMovies: [
                      values.favoriteMovie1,
                      values.favoriteMovie2,
                      values.favoritemovie3
                    ]})
        },
    });

  return (
    <form onSubmit={formik.handleSubmit } className="forms">
        <div>
        <label htmlFor="firstName">first name&nbsp;</label>
        <input style={{"margin-right":"10px"}}
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
        />
        <label htmlFor="lastName" style={{"margin-left":"79px"}}>last name&nbsp;</label>
        <input style={{"margin-right":"10px"}}
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
        />
        </div>
        <div>
        <label htmlFor="city" style={{"margin-right":"50px"}}>city</label>
        <input style={{"margin-right":"10px"}}
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
        />
        <label htmlFor="country" style={{"margin-right":"18px","margin-left":"80px"}}>country</label>
        <input style={{"margin-right":"10px"}}
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.country}
        />
        </div>
        <div>
        <label htmlFor="employer" style={{"margin-right":"8px"}}>employer</label>
        <input style={{"margin-right":"10px"}}
            id="employer"
            name="employer"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.employer}
        />
        <label htmlFor="title" style={{"margin-right":"45px","margin-left":"80px"}}>title</label>
        <input style={{"margin-right":"10px"}}
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
        />
        </div>
        <div>
        <label htmlFor="favoriteMovie1" style={{"margin-right":"23px"}}>movie1</label>
        <input style={{"margin-right":"10px","width":"115px"}}
            id="favoriteMovie1"
            name="favoriteMovie1"
            type="favoriteMovie1"
            onChange={formik.handleChange}
            value={formik.values.favoriteMovie1}
        />
        <label htmlFor="favoriteMovie2" style={{"margin-right":"5px"}}>movie2</label>
        <input style={{"margin-right":"10px","width":"115px"}}
            id="favoriteMovie2"
            name="favoriteMovie2"
            type="favoriteMovie2"
            onChange={formik.handleChange}
            value={formik.values.favoriteMovie2}
        />
        <label htmlFor="favoritemovie3" style={{"margin-right":"5px"}}>movie3</label>
        <input style={{"margin-right":"10px","width":"115px"}}
            id="favoritemovie3"
            name="favoritemovie3"
            type="favoritemovie3"
            onChange={formik.handleChange}
            value={formik.values.favoritemovie3}
        />
        <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default NewUser

// {
//     id: 1,
//     name: { first: "Waylin", last: "Lumsdon" },
//     city: "Likiep",
//     country: "Marshall Islands",
//     employer: "Twinder",
//     title: "Physical Therapy Assistant",
//     favoriteMovies: [
//       "That Night in Varennes (Nuit de Varennes, La)",
//       "Spy(ies) (Espion(s))",
//       "Klip (Clip)"
//     ]
//   },