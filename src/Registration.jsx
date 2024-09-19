import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Registration = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log("Form Submitted", values);
        action.resetForm();
      },
    });
  console.log("Form Errors", errors);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-center">Welcome!</h1>
          <p className="text-center text-gray-600">
            To the Thapa Technical website for programmers.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {errors.name && touched.name ? (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {errors.email && touched.email ? (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {errors.password && touched.password ? (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirm_password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              autoComplete="off"
              placeholder="Confirm Password"
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="mt-1 text-sm text-red-500">{errors.confirm_password}</p>
            ) : null}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Register
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="#" className="text-indigo-600">Sign In now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
