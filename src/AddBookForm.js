import React from 'react'
import { useFormik } from 'formik';

function AddBookForm({setBooks}) {
  const formik = useFormik({
    initialValues: {
      title: '',
      quantity: 0,
    },
    onSubmit: values => {
      console.log(formik.values);
      setBooks(books => [...books, formik.values]);
    }
  });


  return (
    <div className='AddBookForm'>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">Title</label>
        <input onChange={formik.handleChange} id='title' name='title' type='text' value={formik.values.title} />
        <br />
        <label htmlFor="">Quantity</label>
        <input onChange={formik.handleChange} id='quantity' name='quantity' type='number' value={formik.values.quantity} />
        <br />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  )
}

export default AddBookForm



//
// const SignupForm = () => {
//   // Pass the useFormik() hook initial form values and a submit function that will
//   // be called when the form is submitted
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

