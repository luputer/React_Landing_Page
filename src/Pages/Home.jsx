import { LazyLoadImage } from "react-lazy-load-image-component";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from 'typewriter-effect';
import lactop from '../assets/gambar.svg'
import Product from "../Component/product";
import Datas from "../data";
import About from "../Component/About";





function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);


  return (
    <div className='pt-20 h-[2000px] scroll-smooth transition-all'>
      <div className="mx-auto scroll-smooth">
        <div
          id="home"
          className="hero grid grid-cols-2 items-center gap-20 pt-8 w-full pl-16 "
        >
          <div className="box" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="false">
            <h1 className="lg:text-5xl/tight text-2xl  font-medium mb-7 opacity-75 "> 
              <Typewriter 
                options={{
                  strings: ['Find you best Device',  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
              <span className="font-bold text-[rgb(56,125,220)] underline ">TokoKU</span> {" "}
              is the place
            </h1>
            <p className="text-base/8 mb-7 font-semibold opacity-90">
            Boost your productivity with quality laptops from {" "}
              <span className="text-[rgb(56,125,220)] text-xl font-semibold">
                "TokoKU"
              </span>{" "}
              <br />
              Widest selection, affordable prices.
            </p>

          </div>
          
          <div className="box" data-aos="zoom-in" data-aos-duration="1200" data-aos-once="false ">
            <LazyLoadImage
              src={lactop}
              alt="Hero Image"
              className=" h-auto"

            />
          </div>
        </div>
        <div className="mt-10" id='product' data-aos="fade-down" data-aos-duration="1500">
          <div className=""  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" data-aos-once="false">
          <Product />
          </div>
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="false" className="grid grid-cols-2 items-center pl-12 mt-12" id="about" >
          <About/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;