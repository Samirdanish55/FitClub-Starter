import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_sb9ab2h', 'template_jlbgmc3', form.current, {
            publicKey: 'RM1xBCbSg_6XvGk7Y',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

  return (
    <div className="Join" id='join'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>ready to </span>
                <span>level up</span>
            </div>
            <div>
                <span>your body </span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className="right-j">
            
            <form ref={form} action="" className='email-container' onSubmit={sendEmail} >
            <input type="email" name="user_email" id="" placeholder='Enter your email address'  />
            <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join