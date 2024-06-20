
About The Project

User Form Validation. React js cookie Library import for user stored data (name, age, email) to ensure browser compatibility, provide built-in security features. DOM updating with re-rendering in function components in responses to changes in state with useEffect. UI Animation features.



Video
https://www.linkedin.com/feed/update/urn:li:activity:7209386338901458944/
https://www.linkedin.com/feed/update/urn:li:activity:7209387589630390274/
https://www.linkedin.com/feed/update/urn:li:activity:7209388593151115264/






Usage
Here is an example of how to import the useEffect hook that runs the code once the function component renders. Contains an Array denpendency 
that updates the state varaiables ( name, password, confirmPassword, age, email ) once it re-renders.

Basic Usuage.
import React, { useState , useEffect, useRef } from 'react';





function FormApp() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const input = useRef(null)    
    const formRef = useRef(null) 
      useEffect(() => {      
          if(input.current) {   
            input.current.focus()
          }
      }, [])                  
        useEffect(() => {
            localStorage.setItem('name', JSON.stringify(name));
        }, [name])      // second argument to re-render once the value changes.
        useEffect(() => {
            localStorage.setItem('password', JSON.stringify(password));
        }, [password])
        useEffect(() => {
          localStorage.setItem('confirm-password', JSON.stringify(confirmPassword))
        }, [confirmPassword])
        useEffect(() => {
            localStorage.setItem('age', JSON.stringify(age))
        }, [age])
        useEffect(() => {
            localStorage.setItem('email', JSON.stringify(email))
        }, [email])
        




REACTjs Cookie Library
The Reactjs Cookie Library Import assist with the browser compatibility with built secuirty features. 


Usuage

import Cookies from 'js-cookie'
Import the Reactjs library in your component.



    // function to set cookies. use remove method to delete the password cookie from the server
            const setCookies = (name, value, options) => {
                Cookies.set(name, value, options)
                Cookies.remove('password', password)
            }
            const UserSubmitData = (event) => {
                     event.preventDefault();
                    if(password !== confirmPassword) {
                        alert('Password does not match Confirm Password');
                        setPassword('')
                        setConfirmPassword('')
                        return false;
                    } else {
                      alert('Password Accepted!')
                      alert('Form Data Was Submitted Successfully');
                      const cookiesOptions = {
                        expires: 7, // expires in 7 days
                        secure: true, // Cookies are sent only over HTTPS
                        sameSite: 'Strict', // or 'Lax'
                        httpOnly: false, // Cannot be accessed vis JavaScript
                        path: '/' ,// Accessible throughout the entire website
                      };
                      setCookies('name', name, cookiesOptions);
                      setCookies('age', age, cookiesOptions)
                      setCookies('email', email, cookiesOptions)
                      //reset the form when the user submits the data
                      formRef.current.reset();
                      setName('');
                      setPassword('')
                      setConfirmPassword('')
                      setAge('')
                      setEmail('')
                    }
            }



Development.
To store cookies for broswer compatiblity from the react js-library. 
npm install js-cookie


License: 
This project is under the MIT License

Author
[Andrew Johnson] - [andrewjohnson9393@gmail.com] - [ https://www.linkedin.com/in/andrew-johnson-64632199/ ] 









Images:
![Laptop Screen](https://github.com/jesusfaithandwordisinmyheartalways/UserFormValidation-ReactJs/assets/90214404/58ea6939-1b9b-486e-b3e1-436f820b6243)


![Tablet Screen](https://github.com/jesusfaithandwordisinmyheartalways/UserFormValidation-ReactJs/assets/90214404/ff1354aa-ab42-4d73-aecd-223465aa4b81)

![Mobile Screen](https://github.com/jesusfaithandwordisinmyheartalways/UserFormValidation-ReactJs/assets/90214404/217b2910-60aa-4249-880e-84d821270a21)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
