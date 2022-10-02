import React, { useState } from 'react'

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
        {nameAlert ? <p className='alert'>Name is required</p> : ''}
        <label className='formLabel'>Name: </label>
        <input onMouseLeave={(e) => handleMouseLeaveName(e)} type='text' required placeholder='Full Name' name='name'></input>
        {emailAlert ? <p className='alert'>Email is required</p> : ''}
        <label className='formLabel'>Email: </label>
        <input onMouseLeave={(e) => handleMouseLeaveEmail(e)}  type='email' required placeholder='your_email@host.com' name='email'></input>
        {messageAlert ? <p className='alert'>Message is required</p> : ''}
        <label className='formLabel'>Message: </label>
        <textarea onMouseLeave={(e) => handleMouseLeaveMessage(e)} required placeholder='Write your message here...' name='message'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
