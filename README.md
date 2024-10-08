# React + Vite

Registration Form with Formik and Yup
This project is a simple registration form built with React, Formik, and Yup for form management and validation. The form includes fields for name, email, password, and password confirmation. Validation is performed using Yup to ensure proper formatting and data integrity.

Table of Contents
Features
Installation
Usage
Project Structure
Form Validation
Available Scripts
License
Features
Form management using Formik.
Validation using Yup.
Displays error messages under input fields for invalid inputs.
Reset form after successful submission.
Tailwind CSS for responsive styling.
 Fill the form: Open http://localhost:3000 in your browser and fill in the registration form with the following fields:

Name
Email
Password
Confirm Password
Validation:

Email field requires a valid email format.
Password field requires at least 8 characters.
Confirm Password must match the Password field.
Submit:

If all validations pass, the form will be submitted, and the values will be logged to the console.
The form will reset after successful submission.Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

npm run build
Builds the app for production to the build folder.

License
This project is licensed under the MIT License.
