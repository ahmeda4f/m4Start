import React, { Component } from 'react'; 
import "../Styles/main.css";
import Img from './ava.svg'; 
class Home extends Component {
    state = {
    };

   
    render() {
        return(
          <section className='p-5  bgs'>

            <div className="container text-center  p-5 my-5 ">
            <div className=""> {/* Wrap the image in its own container */}
              <img src={Img} alt="Image" className="w-25" />
            </div>
            <div className="container my-5 ">
              <h2 className="text-white fw-bold text-center">START FRAMEWORK</h2>
              <div className="line-with-star w-25 mx-auto">
                <div className="line"></div>
                <div className="star"><i className="fa-solid fa-star"></i></div>
                <div className="line"></div>
                </div>

           <span className='text-white my-3'>Graphic Artist - Web Designer - Illustrator</span>
            </div>

            
          </div>
          </section>

          
          
          
        )
       
    }
}

export default Home; 
