import React, { Fragment } from 'react'
import Slider from "react-slick";
import classes from './Hero.module.scss';
export default function Hero() {

    

const contentStyle = {
  height: '600px',
  width:'100%',
  

};
let settings = {
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      dots:true,
      rows: 1,
      slidesPerRow: 1
    };
    return (
      <section className={classes.hero} id="hero" >
        <Slider  style={{zIndex:1}} {...settings}>
                <img style={{height:'100%',width:'100%'}} src="./images/bo-gia-16146819941008.png"/>
               <img style={{height:'100%',width:'100%'}} src="./images/gai-gia-lam-chieu-v-16152893212536.jpg"/>
               <img style={{height:'100%'}} src="./images/palm-springs-16146820863959.jpg"/>
       
       </Slider>
      </section>
    )
}
