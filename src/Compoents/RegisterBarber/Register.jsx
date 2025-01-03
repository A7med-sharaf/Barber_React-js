import { useRef, useState } from 'react'
import './Register.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRecoilState } from 'recoil'
import { $baseUrl } from '../Storg/Recoil'


const Register = () => {
const [time]=useState(0)

  // const [Name_user]=useState(Name)

  const [baseUrl]= useRecoilState($baseUrl)

  
 let username=useRef()
 let userphone=useRef()



  const upData= (event)=>{
    event.preventDefault()
    
    let Name=username.current.value
    let Phone=userphone.current.value
    
//     old regex  /^([a-zA-Z\u0600-\u06FF]+)\s([a-zA-Z\u0600-\u06FF]+)\s([a-zA-Z\u0600-\u06FF]+)\s([a-zA-Z\u0600-\u06FF]+)$/;
// /^([\u0600-\u06FFa-zA-Z]+)\s+([\u0600-\u06FFa-zA-Z]+)\s+([\u0600-\u06FFa-zA-Z]+)$/;

    // /^(?:[\u0600-\u06FF]+|[a-zA-Z]+)(?:\s(?:[\u0600-\u06FF]+|[a-zA-Z]+)){2,3}$/;

    // const Full_Name = /^([A-Za-z]+)(?:\s[A-Za-z]+){2,3}$/;
    // const isValidName = Full_Name.test(Name) || "Name invalid"
    
    // /^01\d{9}$/
    const Fullphone = /^(01)\d{9}$/;
    const isValidPhone = Fullphone.test(Phone) 
    // isValidName +
    if(isValidPhone  == 1){
      axios.post(`${baseUrl}/api/post-datas`,
        {
          data :{
            User_name: Name,
            Phone_number: Phone,
            
          }
        }
      ).then((res)=>{
       
        
          // console.log(res.data);
          Swal.fire({
            title: "Reqister Done!",
            
            text: res.data.data.id - 1 + " " +  res.data.data.User_name  ,
            
            icon: "success",
            footer: '<h5>Please take a screenshot of the ticket.</h5>'  ,
            // timer:2000,
          });

    

       

        Name=username.current.value=" "
        Phone=userphone.current.value=" "
        
        
 
       
      })

    }else{
      // alert("erro Name or Phone")
      // alert(isValidName);
      // alert(isValidPhone);
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        
        timer:2000,
      });
     
    }
    
    
  }
  return (
    <div className='Register ' id='BOOKANAPPOINTMENT'>
        <div className="Input_Data  ">
            <div className="filter">
            <form   onSubmit={upData }>
                <label  htmlFor="Name">Name</label>
                <input ref={username} type="text" id='Name' placeholder='Enter your name' required />
                <label htmlFor="Number">Nnmber</label>
                <input ref={userphone} type="text" id='Number' placeholder='Enter your phone' required />
                <button >BOOK NOW</button>
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