import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup'

const formValidationSchema=yup.object({
    email:yup.string()
    .min(5,"enter a proper email").required()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "pattern not matched"),
    password:yup.string()
    .min(8,"enter a proper password")
    .max(12,"too longer password")
    .required(),
    
})
export function BasicForm() {
    const {handleSubmit,values,touched,errors,handleChange,handleBlur}=
    useFormik({
        initialValues:{ email: "", password: "" },
        validationSchema:formValidationSchema,
        onSubmit:(values) => {
          console.log("onSubmit", values);
    }
});
  return (
              <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
            />

            {errors.email && touched.email && errors.email}
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
            />
            {errors.password &&
              touched.password &&
              errors.password}
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
  






        // const validateForm = (values) => {
            //   console.log("validateForm", values);
            //   const errors = {};
            //   if (values.email.length < 5) {
            //     errors.email = "Please provide a proper email";
            //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            //     errors.email = " Invalid email";
            //   }
            //   if (values.password.length < 8) {
            //     errors.password = "Please provide a longer password";
            //   } else if (values.password.length > 12) {
            //     errors.password = "Please provide a shorter password";
            //   }
            //   return errors;
            // };

    //     const {handleSubmit,values,touched,errors,handleChange,handleBlur}=
    //     useFormik({
    //         initialValues:{ email: "", password: "" },
    //         validate:validateForm,
    //         onSubmit:(values) => {
    //           console.log("onSubmit", values);
    //     }
    // });



    //     <form onSubmit={handleSubmit}>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={values.email}
    //       onChange={handleChange}
    //       onBlur={handleBlur}
    //       placeholder="Enter your email"
    //     />

    //     {errors.email && touched.email && errors.email}
    //     <input
    //       type="password"
    //       id="password"
    //       name="password"
    //       value={values.password}
    //       onChange={handleChange}
    //       onBlur={handleBlur}
    //       placeholder="Enter your password"
    //     />
    //     {errors.password &&
    //       touched.password &&
    //       errors.password}
    //     <br />
    //     <button type="submit">Submit</button>
    //   </form>

