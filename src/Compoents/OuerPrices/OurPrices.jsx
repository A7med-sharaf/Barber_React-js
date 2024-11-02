import "./OurPrices.css"

const OurPrices = () => {
  return (
    <div className='imgBackgroud'>
        <h1  data-aos="zoom-in">Our Pricing</h1>

        <div data-aos="fade-right" className="serverBerber">
            <div className="box1">
                <h2>Regular Haircut</h2>
                <p>$34+</p> 
            </div>

            <div className="box1">
                <h2>
                Royal Shave
                </h2>
                <p>$35+</p> 
            </div>

            
            <div className="box1">
                <h2>
                Haircut + Royal Shave

                </h2>
                <p>$60+</p> 
            </div>


            
            <div className="box1">
                <h2>
                Haircut + Beard Trim


                </h2>
                <p>$65+</p> 
            </div>




                <div className="box1">
                <h2>
                Beard Trim Machine
                </h2>
                <p>$23+</p> 
                </div>
                
                
                <div className="box1">
                <h2>
                Beard + Facial

                </h2>
                <p>$55+</p> 
                </div>



                <div className="box1">
                <h2>
                Haircut and Facial


                </h2>
                <p>$50+</p> 
                </div>
               

               
                <div className="box1">
                <h2>
                Men’s Facial


                </h2>
                <p>$25+</p> 
                </div>
   
        </div>
    </div>
  )
}

export default OurPrices