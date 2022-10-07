import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(value, formikBag) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, value.email, value.password)
          .then((res) => {
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            formikBag.setFieldError("email", err.message);
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("Email is required").email(),
        password: Yup.string().required("Password is required").min(8),
      })}
    >
      {(formik) => (
        <div className="flex h-screen">
          <div className="m-auto w-1/3 p-3 rounded bg-gradient-to-br from-indigo-900 to-indigo-300">
            <h1 className="text-3xl text-white p-1">Sign Up Here</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="p-1">
                <Field
                  className="w-full border rounded shadow p-2"
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                />
                <ErrorMessage name="email" />
              </div>
              <div className="p-1">
                <Field
                  className="w-full border rounded shadow p-2"
                  type="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                <ErrorMessage name="password" />
              </div>
              <div className="p-1 float-right">
                <button
                  className="rounded text-white p-2 bg-gradient-to-tr from-yellow-600 to-yellow-400"
                  type="submit"
                >
                  "Sign Up"
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
