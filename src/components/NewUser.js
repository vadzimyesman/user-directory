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
            alert(JSON.stringify(values, null, 2));
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
    <form onSubmit={formik.handleSubmit } >
        <label htmlFor="firstName">first name</label>
        <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
        />
        <label htmlFor="lastName">last name</label>
        <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
        />
        <label htmlFor="city">city</label>
        <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
        />
        <label htmlFor="country">country</label>
        <input
            id="country"
            name="country"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.country}
        />
        <label htmlFor="employer">employer</label>
        <input
            id="employer"
            name="employer"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.employer}
        />
        <label htmlFor="title">title</label>
        <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
        />
        <label htmlFor="favoriteMovie1">favoriteMovie1</label>
        <input
            id="favoriteMovie1"
            name="favoriteMovie1"
            type="favoriteMovie1"
            onChange={formik.handleChange}
            value={formik.values.favoriteMovie1}
        />
        <label htmlFor="favoriteMovie2">favoriteMovie2</label>
        <input
            id="favoriteMovie2"
            name="favoriteMovie2"
            type="favoriteMovie2"
            onChange={formik.handleChange}
            value={formik.values.favoriteMovie2}
        />
        <label htmlFor="favoritemovie3">favoritemovie3</label>
        <input
            id="favoritemovie3"
            name="favoritemovie3"
            type="favoritemovie3"
            onChange={formik.handleChange}
            value={formik.values.favoritemovie3}
        />


        <button type="submit">Submit</button>
        
        
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