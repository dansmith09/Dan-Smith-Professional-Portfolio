import React, { useState, useRef } from 'react'
import { IoWarningOutline } from 'react-icons/io5' 
import { MdMarkEmailRead } from 'react-icons/md' 
import emailjs from '@emailjs/browser';


export default function Form() {
    const [nameAlert, setNameAlert] = useState(false)
    const [emailAlert, setEmailAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState(false)

    const [nameState, setNameState] = useState(false)
    const [emailState, setEmailState] = useState(false)
    const [messageState, setMessageState] = useState(false)

    // emailjs
    const [emailSent, setEmailSent] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
        // check input isnt empty
      if(!nameState || !emailState || !messageState) {
        !nameState && setNameAlert(true);
        !emailState && setEmailAlert(true);
        !messageState && setMessageAlert(true);
        return;
      }
        // send email
      emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            // reset form
            setNameState('');
            setEmailState('');
            setMessageState('');
            form.current.reset();
            console.log(result.text);
            setEmailSent(true)
        }, (error) => {
            console.log(error.text);
        });
    };


    const handleMouseLeaveName = (e) => {
        if (e.target.value) {
            setNameAlert(false)
        } else {
            setNameAlert(true);
        }
    }

    const handleMouseLeaveEmail = (e) => {
        if (e.target.value) {
            setEmailAlert(false)
        } else {
            setEmailAlert(true);
        }
    }

    const handleMouseLeaveMessage = (e) => {
        if (e.target.value) {
            setMessageAlert(false)
        } else {
            setMessageAlert(true);
        }
    }
  return (
    <div className='formHolder'>
      <form ref={form} onSubmit={sendEmail}>
        <h3> Get In Touch</h3>
        <p></p>
        <div>
            <label className='formLabel'>Name: </label>
            <input 
                onChange={(e) => setNameState(e.target.value)}
                onMouseLeave={(e) => handleMouseLeaveName(e)}
                type='text'
                required placeholder='Full Name'
                name='user_name'>
            </input>
            {nameAlert ? <p className='alert'><IoWarningOutline /> Name is required</p> : ''}
        </div>
        <div>
            <label className='formLabel'>Email: </label>
            <input 
                onChange={(e) => setEmailState(e.target.value)}
                onMouseLeave={(e) => handleMouseLeaveEmail(e)}
                type='email'
                required placeholder='your_email@host.com'
                name='user_email'>
            </input>
            {emailAlert ? <p className='alert'><IoWarningOutline /> Email is required</p> : ''}
        </div>
        <div>
            <label className='formLabel'>Message: </label>
            <textarea 
                onChange={(e) => setMessageState(e.target.value)}
                onMouseLeave={(e) => handleMouseLeaveMessage(e)}
                required placeholder='Write your message here...'
                rows='6'
                name='message' >
            </textarea>
            {messageAlert ? <p className='alert'><IoWarningOutline /> Message is required</p> : ''}
        </div>
        <div className='buttonHolder'>
            <button
                onClick={(e) => sendEmail(e)}
                type='submit'
                dissabled={"true"}>
                Submit
            </button>
        </div>
        {emailSent ? <p className='alert success'><MdMarkEmailRead /> Thanks for getting in touch!</p> : ''}
      </form>
    </div>
  )
}
