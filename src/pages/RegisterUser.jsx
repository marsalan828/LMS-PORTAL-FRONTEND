import * as Yup from "yup";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

function RegisterUser() {

  const handleSubmit = async(values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post("http://127.0.0.1:3000/admin", values);
      alert("User has been created successfully");
      setSubmitting(false);
    } catch (error) {
      console.error(error.response.data);
      setErrors("error creating user");
      setSubmitting(false);
    }
  }

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    role: Yup.string().required("Role is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long") // Add a minimum length check
      .required("Password is required"),
  });
  return (
    <div className="flex flex-col items-center">
      <h1>Signup Form</h1>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          role: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="user-creation-form w-96 flex flex-col gap-2">
            <div>
              <Field type="text" name="firstname" placeholder="First Name" />
              <ErrorMessage name="firstname" component="div" />
            </div>
            <div>
              <Field type="text" name="lastname" placeholder="Last Name" />
              <ErrorMessage name="lastname" component="div" />
            </div>
            <div>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="div" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <Field type="text" name="role" placeholder="Role" />
              <ErrorMessage name="role" component="div" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" className="border-2 bg-gray-500 rounded-sm" disabled={isSubmitting}>
              Create user
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegisterUser;
