import ReactDOM from 'react-dom/client';
import './index.css';
import React, { useState , useEffect, useRef } from 'react';
import Cookies from 'js-cookie'

   function FormApp() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const input = useRef(null)    // use a useRef hook to reference the input element.
    const formRef = useRef(null) // the useRef hook is a reference to the form element


      useEffect(() => {      // use the useEffect hook to focus on the input element. the empty dependency array [] ensures that effect runs only once. 
          if(input.current) {   // This means that inputRef.current will point to this input element.
            input.current.focus()
          }
      }, [])                  // use the ref attribute is assigned to the input element that the window focus on.


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
        


      
      const UserName = (event) => {
         const userName = event.target.value;
         setName(userName);

         if(userName.length === 0) {
              document.getElementById('name-error').style.visibility = 'visible'
         }  else {
              document.getElementById('name-error').style.visibility = 'hidden'
         }

          if(userName.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)) {
              document.getElementById('name-error').style.visibility = 'hidden';
              document.querySelector('.user-input').style.border = "3px solid green";
              document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
          } else {
              document.getElementById('name-error').style.visibility = 'visible';
              document.querySelector('.user-input').style.border = "3px solid red";
              document.body.style.backgroundColor = "rgba(0,0,0,0)";
          }
    
      }
        

      const UserPassword = (event) => {
          const userPassWord =  event.target.value;
          setPassword(userPassWord);

          (userPassWord.length === 0) ? document.getElementById('password-error').style.visibility = 'hidden' :
           document.getElementById('password-error').style.visibility = 'visible' 

         
          if(userPassWord.match(/^(?=.*[A-Z].*[A-Z].*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/)) {
              document.getElementById('password-error').style.visibility = 'hidden';
              document.querySelector('.user-password').style.border = "3px solid green";
              document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
          } else {
              document.getElementById('password-error').style.visibility = 'visible';
              document.querySelector('.user-password').style.border = "3px solid red";
              document.body.style.backgroundColor = "rgba(0,0,0,0)";
          }   
        }


         const ConfirmPassword = (event) => {
                const passwordConfirmData =  event.target.value;
                setConfirmPassword(passwordConfirmData)
                
          }

        const UserAge = (event) => {
                  const userAgeData = event.target.value;
                  setAge(userAgeData)
                 
                  if(userAgeData.length > 3) {
                    alert('Invalid Age');
                    setAge('')
                      return false;
                  }

                  if(userAgeData > 130 || userAgeData < 0 || userAgeData == 0) {
                      alert('Please Enter A Valid Age: ');
                      setAge('')
                      return false;
                  }

                       return true;
            }


        const UserEmail = (event) => {
                const userEmailData =  event.target.value;
                setEmail(userEmailData);
                (userEmailData.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) ? 
                document.getElementById('email-error').style.visibility = 'hidden' : 
                document.getElementById('email-error').style.visibility = 'visible';
            }

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


              return (
                <>
               <div className='Container'>

                  <div className='Wrapper'>
                   
                  <form ref={formRef} onSubmit={(event) => {UserSubmitData(event)}} className='User-Form'>
                     <header className='form-header'>Sign In</header>
                     <input onInput={(event) => UserName(event)} ref={input} type='password' value={name} className='user-input' placeholder='Username' autoComplete='off' required></input>
                        {
                           <div className='Name-Error-Container'>
                              <div className='Name-Error-Wrapper'>
                                <span className='name-error' id='name-error'>Must Contain One Uppercase, One Special Character, Min 8 characters </span>
                              </div>
                            </div>
                                }
                      <input onInput={(event) => UserPassword(event)} type='password' value={password} className='user-password' placeholder='Password' autoComplete='off' required></input>
                               {
                               <div className='Password-Error-Container'>
                                  <div className='Password-Error-Wrapper'>
                                   <span className='password-error' id='password-error'>Must Contain 3 Uppercase, One Special Character, Min 10 characters</span>
                                  </div>
                                </div>
                                }
                      <input onInput={(event) => ConfirmPassword(event)} type='password' value={confirmPassword} placeholder='Confirm Password' autoComplete='off' required></input>
                      <input onInput={(event) => UserAge(event)} type='password' value={age} placeholder='Age' autoComplete='off' required ></input>
                      <input onInput={(event) => UserEmail(event)} type='email' value={email} placeholder='Email' autoComplete='off' required></input>
                                {
                                  <div className='Email-Error-Container'>
                                    <div className='Email-Error-Wrapper'>
                                    <span className='email-error' id='email-error'>Must Contain Valid Email Address</span>
                                    </div>
                                  </div>
                                  }    
                      <input onSubmit={(event) => UserSubmitData(event)} type='submit' value={'Submit'} />
                  </form>
                  </div>

                  </div>
          
                </>
      
            )

     }
        

      const root = ReactDOM.createRoot(document.getElementById('root'))
      root.render(<FormApp />)

