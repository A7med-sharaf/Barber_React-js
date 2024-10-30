import './hero.css'
import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import hero_imgage from '../../assets/ecda472e-3f06-4bb3-a251-e516026ccabe.jpg'
import { useEffect } from 'react';

const Hero = () => {
    useEffect(()=>{

        Aos.init({duration: "2000" ,delay:"1000" });

    },[])
  return (   <div className='heroSection animate__animated  animate__swing' >
        <img src={hero_imgage} className='img-hero'  alt="" />
        <div className='hero_border ' data-aos="fade-right">
            <h1 className=''>Full Service Barber Shop</h1>
            <p className=''>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus 
                dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mauris pellentesque 
            pulvinar pellentesque habitant morbi tristique senectus.</p>
            <div className='hero_book animate__animated  animate__delay-3s animate__repeat'>
                BOOK AN APPOINTMENT
            </div>
        </div>
        <div data-aos="fade-right"><h1> hello</h1></div>
    </div>
  )
}

export default Hero