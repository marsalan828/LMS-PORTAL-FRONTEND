import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/authSlice"; // this is the state from redux
import image from "../assets/react.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (values, {setSubmitting, setErrors}) => {
        try {
            const response = await axios.post("http://localhost:3000/login", values, {
                withCredentials: true // this includes the cookie in request
            })

            const { user, token } = response.data;
            dispatch(login(user));
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            setErrors("error logging in");
        } finally {
            setSubmitting(false);            
        }
    }
    const validationSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })
    return (
      <>
        <div className="login bg-image-frontend flex flex-col items-center">
          <div className="login-container bg-white mt-8 w-96 flex flex-col items-center">
            <img src={image} alt="" />
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field type="text" name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="div" />
                  <Field
                    type="password"
                    name="password"
                    placeholder="password"
                  />
                  <ErrorMessage name="password" component="div" />
                  <button
                    type="submit"
                    className="border-2 bg-gray-500 rounded-sm"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </>
    );
}

export default Login;