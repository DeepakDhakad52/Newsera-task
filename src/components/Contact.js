import React from 'react'
import '../styles/contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
  const [close,setClose] = React.useState(false);
  const handleOnClick = () =>{
    setClose(!close);
  }
  
  return (
    <div className='shadded'>
      <div className='containerr'>
      <Link to={'/'}><i className="close-btn fa-solid fa-x" onClick={handleOnClick}></i></Link>
        <h2>Contact</h2>
        <p>Lorem Ipsum is simply dummy text of the printing</p>

        <form action="">
          <div className="input-box">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder='Enter your name here' />
          </div>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter your e-mail address here' />
          </div>
          <div className="input-box">
            <label htmlFor="message">Message</label>
            <input type="text" placeholder='Wanna share something with us?' />
          </div>
          <button className='btn' type="submit">Submit</button>
        </form>
        <div className="socials">
          <p>Need more info? hello@newzera.com</p>
          <div className="icons">
            <a href="https://zangoh.com/"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://zangoh.com/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://zangoh.com/"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
