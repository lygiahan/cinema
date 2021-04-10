import React from 'react'
import classes from "./Movies.module.scss";
import { Button,Typography } from 'antd';
import { Card } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import Slider from "react-slick";
import { Link } from 'react-router-dom';

export default function Movies() {
      const PhimReducer = useSelector(state => state.PhimReducer);
       let {dsphim,loadingdsPhim}  = PhimReducer;
  let settings = {
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      dots:true,
      rows: 2,
      slidesPerRow: 4
    };
    return (
        <section className={classes.movies} id="movies">
            <div className={classes.mainmaxwith}>
            <div className={classes.movies_title}>
                <p>Đang Chiếu</p>
            </div>
            <Slider autoplaySpeed={3000} {...settings}  className={classes.movies_carousel}>
                    {dsphim.map((phim,index)=>{
                    let {tenPhim,trailer,hinhAnh,danhGia,maPhim} = phim;
                     return (
                      <Link to={`/phim/${maPhim}`} className="ahihi" style={{padding:10}} key={index}>
                        <Card   
                              
                              className={classes.movies_card}
                              hoverable
                              bordered={false}
                              style={{height:'auto' }}
                              cover={<img alt="example"  className={classes.movies_card_img} height="300" src={hinhAnh} />}
                              
                        >    
                            <div className={classes.card_meta_content}>
                                  <Typography.Title className={classes.card_meta_title} level={4}>
                                  <Typography.Text className={classes.card_meta_C}>C16</Typography.Text>
                                     {tenPhim}</Typography.Title>
                            </div>
                            <Typography.Text className={classes.movies_card_time}>115phút</Typography.Text>
      
                            <div className={classes.overplay_ibm}>
                                         <Typography.Title level={5} style={{color:'#fff',margin:'0'}}>{danhGia}</Typography.Title>
                                         <div style={{display:'flex',alignSelf:'flex-start'}}>
                                         <StarFilled style={{color:'orange',fontSize:'10px',}}/>
                                          <StarFilled style={{color:'orange',fontSize:'10px'}}/>
                                          <StarFilled style={{color:'orange',fontSize:'10px'}} />
                                          <img style={{color:'orange',width:'13px',marginLeft:5}} src="/images/star1.2.png"/>
                                         </div>
      
                                  </div>
                            <div className={classes.overplay}>                          
                                  <div className={classes.overplay_img}>
                                               <a className={classes.overplay_video} href={trailer}>
                                                  <img  src="/images/play-video.png" alt="play-video"/>
                                               </a>

                                 
                                  </div>
                                  <div className={classes.overplay_btn}>
                                       <Button className={classes.overlay_addcart} type="primary">Mua Vé</Button>
                                  </div>
                            </div>
                        </Card>
                     </Link>
                     )
                })}        
      </Slider>
             </div>
        </section>
    )
}
