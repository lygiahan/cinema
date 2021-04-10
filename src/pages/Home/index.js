import { Button, Carousel, Col, message, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero";
import Movies from "../../Components/Movies";
import classes from "./Home.module.scss";
import { Tabs} from "antd";
import { List, Avatar } from "antd";
import {useDispatch, useSelector } from 'react-redux';
import { getPhim, getThongTinLichChieuHeThongRap } from "../../actions/phim";
import Loading from "../../Components/Loading";
import Moment from 'react-moment';
import { useHistory } from "react-router-dom";

const { TabPane } = Tabs;
export default function Home() {
  const history = useHistory();
const dispatch = useDispatch();
   const PhimReducer = useSelector(state => state.PhimReducer);
   let {dsphim,loadingdsPhim,getInfoLichChieuHeThongRap,loadinggetInfoLichChieuHeThongRap}  = PhimReducer;
    const [tabposition,setTabpositon] = useState('left');
   useEffect(()=>{       
       dispatch(getPhim());
   },[])
   useEffect(()=>{
       dispatch(getThongTinLichChieuHeThongRap())
   },[])
   useEffect(()=>{
         if(window.innerWidth <650){
           setTabpositon('top')
         }
         else{
           setTabpositon('left')
         }
   },[window.innerWidth])

   const datVeHome =(id)=>{
        let token =JSON.parse(localStorage.getItem('curential'));

        if(token){
         return history.push(`/checkout/${id}`)
        }
        else{
         message.warn('Vui lòng đăng nhập để đặt vé')

        }
       }
  return (
    <>
      <Hero />
      {/* <HomeTool /> */}
      {loadingdsPhim
      ?
        <Loading />
      :  <Movies />}     
      <section className={classes.show_movies} id="show_movies" style={{marginTop:60}}>
        <div className="mainmaxwith">
        
          <div>
            <Tabs tabPosition={tabposition} defaultActiveKey={0} style={{border:'1px solid rgba(238,238,238,.88)'}}>
              {getInfoLichChieuHeThongRap?getInfoLichChieuHeThongRap.map((item,index)=>{
                    return(
                      <TabPane
                active               
                tab={<img style={{ width: 50 }} src={item.logo} alt={item.logo}/>}
                key={index}
              > 
                 <Row gutter={[24,0]}>
                  <Col md={24}>
                    <List
                      className={classes.show_movies_list_rap}
                      itemLayout="horizontal"
                    >
                     <Tabs tabPosition={tabposition} key={index}>

                     {item.lstCumRap.map((ite,inn)=>{
                       return (
                          <TabPane style={{height:200}}  tab={<div style={{textAlign:'left'}}>
                            <Typography.Title level={5} style={{margin:0}}>{ite.tenCumRap}</Typography.Title>
                            <Typography.Text>{ite.diaChi.slice(0,40) + '...'}</Typography.Text>
                          </div>} key={inn}>
                              <div style={{
                                    borderLeft: "1px solid rgba(238,238,238,.88)",
                                    height:500,overflowY:'scroll'
                                  }}>
              <div className={classes.show_movies_detail_groups}>
                      <div className={classes.show_movies_detail__groups_item}>
                        <List
                          className={classes.show_movies_detail_list}
                          itemLayout="horizontal"
                        >
                            {ite.danhSachPhim.map((i,index)=>{
                              return(
                                <>                           
                                <List.Item
                                key={index}
                                className={classes.show_movies_detail_item}
                                 
                              >
                                <List.Item.Meta
                                  avatar={
                                    <Avatar
                                      shape="square"
                                      className={
                                        classes.show_movies_detail_item_img
                                      }
                                      src={i.hinhAnh}
                                    />
                                  }
                                  title={
                                    <div style={{display:'flex',marginTop:10}}>
                                    <p className={classes.show_movies_detail_C}>C13</p>
                                   <p
                                     
                                     className={
                                       classes.show_movies_detail_item_title
                                     }
                                   >
                                    {i.tenPhim}
                                   </p>
                                   </div>
                                  }
                                  description={
                                    <>
                                      <p
                                        className={
                                          classes.show_movies_deital_item_des
                                        }
                                      >
                                        120 phut
                                      </p>{" "}
                                     
                                    </>
                                  }
                                />
                              </List.Item>
                        <Row gutter={[0, 12]}>
                          {i? i.lstLichChieuTheoPhim.map((lich,index)=>{
                            return(
                              <Col md={6} key={index}>
                                {/**onClick={()=>datVe(lich.maLichChieu)} */}
                        <Button className={classes.show_movies_time} onClick={()=>datVeHome(lich.maLichChieu)}  type="default">
                                <strong>
                                  <Moment format="hh:mm" trim>{lich.ngayChieuGioChieu}</Moment>
                                </strong>
                              </Button>
                            </Col>
                            )
                          }):''}
                         
                        </Row>                
                              </>
                              )
                            })}
                      
                        </List>
                     
                      </div>

                    </div>
                             </div>
                           </TabPane>

                       )

                     })}
                    </Tabs>

                    </List>
                  </Col>
                 
                </Row> 
              </TabPane>
                    )
              }):''}
              
            </Tabs>
          </div>
        </div>
      </section>
      <section className={classes.bg_home} id="bg_home">
         <img className={classes.bg_home_img} src="/images/backapp.jpg"/>
           <div className="mainmaxwith">
                 <div className={classes.bg_home_content}>
                    <Row className={classes.bg_home_mobile}>
                          <Col sm={24} md={12} className={classes.bg_home_left}>
                                <Typography.Title className={classes.bg_home_left_title}>Ứng dụng tiện lợi dành cho người yêu điện ảnh</Typography.Title>
                                <Typography.Text className={classes.bg_home_left_des}>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</Typography.Text>
                                <br></br>
                                 <Button className={classes.bg_home_left_btn} size="large">App miễn phí - Tải về ngay!</Button>
                           </Col>
                          <Col sm={24} md={12} className={classes.bg_home_right}>
                            <div className={classes.bg_home_right_img}>
                                <img  src="/images/mobile.png" alt="mobile"/>
                                <div className={classes.bg_overplay}>
                                     
                                      <Carousel autoplay className={classes.bg_overplay_carousel} style={{height:'100%'}}>
                                         <img className={classes.bg_overplay_carousel_item} src="/images/slide1.jpg"/>
                                        <img className={classes.bg_overplay_carousel_item} src="/images/slide2.jpg"/>
                                        <img className={classes.bg_overplay_carousel_item} src="/images/slide3.jpg"/>

                                        <img className={classes.bg_overplay_carousel_item} src="/images/slide12.jpg"/>

                                        <img className={classes.bg_overplay_carousel_item} src="/images/slide12.jpg"/>


                                      </Carousel>
                                </div>
                            </div>
                          </Col>
                      </Row>
                 </div>
           </div>
      </section>
    </>
  );
}
