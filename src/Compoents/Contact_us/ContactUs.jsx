import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='ContactUs'>
        <div data-aos="zoom-in" className='boreder_center'> 
            <div data-aos="zoom-in" className="table_contact">
                <h1>Contact Us</h1>
                <form  className='form'>
                    
                    <label className='label_username'  htmlFor="username">username</label>
                    <input  className='input' type="text "  id='username'   placeholder='Enter your name' required />
                    <label className='label_email'  htmlFor="email">Email</label>
                    <input className='input' type="email "  id='email'   placeholder='Enter your email' required />
                    <textarea name="10" className='textarea'  id=""></textarea> 
                   <button>Submit </button>
                   
                    



                   
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default ContactUs