import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function FooterComponent() {
  return (
    <>
      <div className="footer text-white bg-black flex">
        <div className="footer-left">
          <h1>Introduction:</h1>
          <h3>Hi my name is Arsalan</h3>
          <p>
            This LMS is the final project for Knowledge Streams MERN stack
            program
          </p>
        </div>
        <div className="footer-right">
          <h1>Contact Me!</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" placeholder="email"/>
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password"  placeholder="password"/>
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default FooterComponent;
