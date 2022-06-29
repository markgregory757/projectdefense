import React from "react";
import { Formik, Field, Form, ErrorMessage, useField } from "formik";
import * as Yup from "yup";


const MyTextInput = ({ label, ...props}) => {
    // Make a reusable prop based input

    const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <input {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div>{meta.error}</div>
                ) : null}
            </>
        )
}

const SignupForm = () => {
  return (
   <div className="Signup">
    <h2>Signup to add your blogs.</h2>
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(15, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid Email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First Name..."
        />
        <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last Name..."
        />
        <MyTextInput
            label="Email"
            name="email"
            type="email"
            placeholder="Email..."
        />

        <button type="submit"> Submit</button>
      </Form>
    </Formik>
    </div>
  );
};

export default SignupForm;