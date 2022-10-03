import React, { useState } from 'react'
import { IoWarningOutline } from 'react-icons/io5'

export default function Form() {
    const [nameAlert, setNameAlert] = useState(false)
    const [emailAlert, setEmailAlert] = useState(false)
    const [messageAlert, setMessageAlert] = useState(false)

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
      <form>
        <h3> Get In Touch</h3>
        <p></p>
        <div>
            <label className='formLabel'>Name: </label>
            <input onMouseLeave={(e) => handleMouseLeaveName(e)} type='text' required placeholder='Full Name' name='name'></input>
            {nameAlert ? <p className='alert'><IoWarningOutline /> Name is required</p> : ''}
        </div>
        <div>
            <label className='formLabel'>Email: </label>
            <input onMouseLeave={(e) => handleMouseLeaveEmail(e)}  type='email' required placeholder='your_email@host.com' name='email'></input>
            {emailAlert ? <p className='alert'><IoWarningOutline /> Email is required</p> : ''}
        </div>
        <div>
            <label className='formLabel'>Message: </label>
            <textarea onMouseLeave={(e) => handleMouseLeaveMessage(e)} required placeholder='Write your message here...' rows='6' name='message' ></textarea>
            {messageAlert ? <p className='alert'><IoWarningOutline /> Message is required</p> : ''}
        </div>
        <div className='buttonHolder'>
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
