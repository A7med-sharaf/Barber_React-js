import { useEffect, useRef } from 'react'
import './ContactUs.css'
import axios from 'axios';
import Swal from 'sweetalert2';

    
const ContactUs = () => {
  let user=useRef();
  let email=useRef();
  let texteara=useRef();
 
  
    
  const Feedback=(event)=>{
    event.preventDefault()

    
    let username= user.current.value
    let Email= email.current.value
    let Texteara= texteara.current.value

    const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const isValidEmail = emailRegex.test(Email) || "invalid "
    // const Full_Name = /^([\u0600-\u06FFa-zA-Z]+)\s+([\u0600-\u06FFa-zA-Z]+)\s+([\u0600-\u06FFa-zA-Z]+)$/;
    // const isValidName = Full_Name.test(username) || "invalid"

    if(isValidEmail ==1){

      axios.post(`https://easetasks.com/mail/index.php/api/mail/send` ,
    

      {
        "email_to": username,
        "email_subject": Email,
        "email_msg": Texteara
    
    
    
    }


    ).then((res)=>{

      user.current.value=" "
    email.current.value=" "
    texteara.current.value=" "

      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });

 
    })
    
  }else{
    // alert(isValidEmail)
    // alert(isValidName)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
    
    // console.log(user.current.value +email.current.value+ texteara.current.value);
    



  }

  return (
    <div className='ContactUs' id='ContactUs'>
        <div data-aos="zoom-in" className='boreder_center'> 
            <div data-aos="zoom-in" className="table_contact">
                <h1>Contact Us</h1>
                <form onSubmit={Feedback} className='form'>
                    
                    <label className='label_username'  htmlFor="username">username</label>
                    <input ref={user} className='input' type="text "  id='username'   placeholder='Enter your name' required />
                    <label  className='label_email'  htmlFor="email">Email</label>
                    <input ref={email} className='input' type="email "  id='email'   placeholder='Enter your email' required />
                    <textarea ref={texteara} name="10" className='textarea'  id=""></textarea> 
                   <button>Submit </button>
                   
                    



                   
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default ContactUs