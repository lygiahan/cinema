import React, { useEffect, useState } from 'react'
import { Avatar, Button, Col, List, message, Progress, Row, Typography } from "antd";
import {Link, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classes from './detailphim.module.scss';
import { StarFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import { detailPhim, layThongTinLichChieuPhimAct, thongTinCumRapTheoHeThong, thongTinHeThongRap } from '../../actions/phim';
  import Moment from 'react-moment';


const { TabPane } = Tabs;
export default function Phim() {
  const {id} = useParams();
  const history = useHistory()
  const dispatch = useDispatch();
  const PhimReducer = useSelector(state => state.PhimReducer);
  const [tabposition,setTabpositon] = useState('left');
 
  let {loadingDetailPhim,
    detailphim,infoHeThongRap,
    loadingInfoHeThongRap,getThongTinTheoHeThongRap,
    loadingThongTinTheoHeThongRap,layThongTinLichChieuPhim} = PhimReducer;
    //console.log(PhimReducer);

    useEffect(()=>{
       dispatch(detailPhim(id));
       dispatch(layThongTinLichChieuPhimAct(id))
    },[id])

    useEffect(()=>{
        dispatch(thongTinHeThongRap());
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
        <section className={classes.phim}>
               <div className="mainmaxwith">
                        <Row>
                            <Col xs={24} sm={24} md={18}>
                                 <div className={classes.phim_item}>
                                     <div style={{width:'100%'}}>
                               <img src={detailphim?detailphim.hinhAnh:''}  className={classes.phim_item_img} />

                                     </div>
                                      <div className={classes.phim_body}>
                                             <Typography.Text className={classes.phim_body_date}>{detailphim?
                                               <Moment format="DD/MM/YYYY">
                                               { detailphim.ngayKhoiChieu}
                                   </Moment>
                                            :''}</Typography.Text>
                                              <Typography.Title className={classes.phim_body_titlte}><strong>C16</strong>{detailphim?detailphim.tenPhim:''}</Typography.Title>
                                              <Typography.Text className={classes.phim_body_mota}>{detailphim?detailphim.moTa:''}</Typography.Text>
                                               <Typography.Text className={classes.phim_body_des}> 120 phút</Typography.Text>
                                               <Button className={classes.phim_body_btnmuave}>Mua vé</Button>
                                      </div>
                                 </div>
                            </Col>
                            <Col md={6} className={classes.phim_right}>
                                    <Progress type="circle" percent={detailphim?detailphim.danhGia:''} status="active" format={percent=>`${percent}`}  />
                                    <div className={classes.phim_right_star}>
                                        <StarFilled  style={{color:'orange',fontSize:'28px'}}/>
                                        <StarFilled style={{color:'orange',fontSize:'28px'}}/>
                                        <StarFilled style={{color:'orange',fontSize:'28px'}} />
                                        <img style={{color:'orange',width:'30px',marginLeft:5}} src="/images/star1.2.png"/>
                                    </div>
                            </Col>
                        </Row>

                    
               </div>
              <div className={classes.tabs}>
                    <div className="mainmaxwith">
                        <div style={{textAlign:'center',borderBottom:'1px solid #fff'}}>
                          <Typography.Title style={{color:'#fff'}} level={2}>Lịch Chiếu</Typography.Title>

                        </div>
                         <Tabs tabPosition={tabposition} defaultActiveKey={0}style={{backgroundColor:'#ffffff',padding:'0 20px'}}>
                         { 
                            layThongTinLichChieuPhim.heThongRapChieu?layThongTinLichChieuPhim.heThongRapChieu.map((thongtin,index)=>{
                                    return (
                                            <TabPane tab={
                                                  <div style={{display:'flex',alignItems:'center', justifyContent:'space-between',width:'100%'}}>
                                                      <Avatar src={thongtin.logo} size={60}/>
                                                      <Typography.Title level={4} style={{marginLeft:20}}>{thongtin.tenHeThongRap}</Typography.Title>
                                                  </div>
                                                        }  
                                            key={index}>

                                                  {thongtin ? thongtin.cumRapChieu.map((tin,index)=>{
                                                        return (
                                                            <div >
                                                                <List
                                                                key={index}
                                                                itemLayout="horizontal">
                                                                <List.Item>
                                                                    <List.Item.Meta
                                                                    avatar={<Avatar src={tin.hinhAnh} shape="square" size={40}></Avatar>}
                                                                    title={<Typography.Title level={4}>{tin.tenCumRap}</Typography.Title>}
                                                                    />
                                                                </List.Item>
                                                            
                                                                </List>
                                                                 {tin?tin.lichChieuPhim.map((lich,index)=>{
                                                                        return(

                                                                            <Button key={index} style={{margin:5}} onClick={()=>datVeHome(lich.maLichChieu)}>
                                                                                <strong>
                                                                                <Moment format="hh:mm" trim>{lich.ngayChieuGioChieu}</Moment>
                                                                                </strong>
                                                                            </Button>
                                                                        )
                                                                 }):''}
                                                            </div>
                                                        )
                                                  }):''}
                                           
                                            </TabPane>
                                            
                                    )
                                      }):''
                                 }
                          </Tabs>
                    </div>
              </div>
        </section>
    )
}
