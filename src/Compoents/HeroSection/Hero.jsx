import './hero.css'
import 'animate.css';
import Aos from 'aos';
import "aos/dist/aos.css"
import hero_imgage from '../../assets/ecda472e-3f06-4bb3-a251-e516026ccabe.jpg'
import { useEffect } from 'react';

const Hero = () => {
    useEffect(()=>{

        Aos.init({duration: "600"  });

    },[])
  return (   <div className='heroSection animate__animated  animate__swing' >
        <img src={hero_imgage} className='img-hero'  alt="" />
        <div className='hero_border ' data-aos="zoom-in">
            <h1 className='' data-aos="fade-right">Full Service Barber Shop</h1>
            <p className='' data-aos="fade-right">Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus 
                dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Mauris pellentesque 
            .</p>
    
            <a href='#BOOKANAPPOINTMENT '  className='hero_book '  >
                BOOK AN APPOINTMENT
            </a>
        </div>
        
    </div>
  )
}

export default Hero