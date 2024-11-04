import './Register.css'

const Register = () => {
  return (
    <div className='Register' id='BOOKANAPPOINTMENT'>
        <div className="Input_Data">
            <div className="filter">
            <form action="">
                <label htmlFor="Name">Name</label>
                <input type="text" id='Name' placeholder='Enter your name' required />
                <label htmlFor="Number">Nnmber</label>
                <input type="text" id='Number' placeholder='Enter your phone' required />
                <button>    BOOK NOW</button>
            </form>
            </div>

            
        </div>
        <div className="Time_down">
                <h2>Time down</h2>
                <h1> 00:00:00 </h1>
            </div>
    </div>
  )
}

export default Register