import { Avatar, Button, Col, List, Row, Typography } from 'antd';
import React, { Fragment, useEffect, useState } from 'react'
import classes from './Checkout.module.scss';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { datVeAct, layDanhSachPhongVeAct, UserChonGhe } from '../../actions/user';
import Moment from 'react-moment';
import { message } from 'antd';


export default function Checkout() {
     const {id} = useParams();
     const dispatch =  useDispatch();
     const UserReducer = useSelector(state => state.UserReducer)

     const [disabled,setDisables] = useState(true);
     let {layDanhSachPhongVe,chonGhe}  = UserReducer;

    useEffect(()=>{
          dispatch(layDanhSachPhongVeAct(id));
    },[id])

    const chonGheUser =(data)=>{
        let newData = {...data,maLichChieu:layDanhSachPhongVe.thongTinPhim.maLichChieu};
        dispatch(UserChonGhe(newData));
         
    }
    useEffect(()=>{
        if(localStorage.getItem('chonghe')){
            setDisables(false)
        }
    },[localStorage.getItem('chonghe')])

    const getLocaltotal =()=>{
     
                return chonGhe?chonGhe.reduce((current,item)=>{
                    return current +=item.giaVe;
                },0):''
             

        }

        const getLocalGhe =()=>{
               return chonGhe?chonGhe.map((item,index)=>{
                    return <Typography.Text key={index}>{item.tenGhe} </Typography.Text>
               }):''
             
        }
    
    
    const datVe =()=>{
        let {taiKhoan} = JSON.parse(localStorage.getItem('curential'));
         let chonghe = JSON.parse(localStorage.getItem('chonghe'));
          return chonghe.map((item)=>{
              let data = {
                  "maLichChieu":item.maLichChieu,
                  "danhSachVe":[
                    {"maGhe":item.maGhe,
                    "giaVe":item.giaVe
                 }
                    
                  ],
                  "taiKhoanNguoiDung":taiKhoan
              }
              dispatch(datVeAct(data))
              message.success("Đặt vé thành công")
            })    
    }
    
    return (
        <section className={classes.checkout} id={classes.checkout}>
                 <Row>
                     <Col md={18}>
                       <div className="mainmaxwith">
                             <div>
                                <List
                                    itemLayout="horizontal">  
                                    <List.Item>
                                        <List.Item.Meta
                                        avatar={<Avatar size={50} src={layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.hinhAnh:''}/>}
                                        title={<Typography.Title level={5} style={{margin:0}}>{layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.tenCumRap:''}</Typography.Title>}
                                        description={
                                            <div>
                                              {layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.ngayChieu:''}
                                                {' - '}
                                                {layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.gioChieu:''}
                                                {' - '}
                                                {layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.tenRap:''}
                                            </div>
                                        }
                                        />
                                    </List.Item>
                                
                                </List>    
                             </div>

                             <div className={classes.ghe}>
                                  <div className={classes.ghe_content}>
                                      <Row gutter={[0,10]}>
                                        {layDanhSachPhongVe.danhSachGhe ?layDanhSachPhongVe.danhSachGhe.map((item,index)=>{
                                            return (
                                                    <Col xs={3} style={{margin:2}} sm={2} md={2} key={index}>
                                                         {item.loaiGhe ==='Thuong' ? 
                                                         <div
                                                         onClick={()=>chonGheUser(item)}
                                                         className={classes.ghe_thuong}
                                                        >{item.tenGhe}</div>:
                                                         <div
                                                         onClick={()=>chonGheUser(item)}
                                                          className={classes.ghe_vip}>{item.tenGhe}</div>}
                                                    </Col>
                                            )
                                        }):''}
                                          <Col xs={24} md={24}>
                                               <div className={classes.cacloai_ghe}>
                                                        <div className={`${classes.cacloai_ghe_item} ${classes.active}`}>
                                                        <div className={`${classes.cacloai_ghe_item_thuong} ${classes.active}`}></div>
                                                        <Typography.Title className={classes.cacloai_ghe_title} level={5}>Ghe thuong</Typography.Title>
                                                     </div>
                                                        
                                                        <div className={classes.cacloai_ghe_item}>
                                                        <div className={classes.cacloai_ghe_item_vip}></div>
                                                        <Typography.Title className={classes.cacloai_ghe_title} level={5}>Ghe Vip</Typography.Title>
                                                     </div>
                                                        
                                               </div>
                                          </Col>
                                    </Row>
                                  </div>
                             </div> 
                       </div>
                     </Col>
                     <Col sm={24} md={6} className={classes.checkout_right}>
                     <div style={{borderBottom:'1px dashed #e9e9e9',textAlign:'center'}}>
                              <Typography.Title className={classes.checkout_thanhtien}>{new Intl.NumberFormat('de-DE').format(localStorage.getItem('chonghe')? getLocaltotal():[])} đ</Typography.Title>
                    </div>
                          <List  style={{borderBottom:'1px dashed #e9e9e9'}}
                                itemLayout="horizontal">    
                                                          
                                <List.Item>
                                    <List.Item.Meta
                                    avatar ={<Avatar shape="square" size={50} src={layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.hinhAnh:''}></Avatar>}
                                    title={<Typography.Title className={classes.checkout_title} level={4}>{layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.tenPhim:''}</Typography.Title>}
                                    description={
                                        <div>
                                            <Typography.Title className={classes.checkout_rap} level={5}>{layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.tenCumRap:''}</Typography.Title>
                                            <div className={classes.checkout_date}>
                                              {layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.ngayChieu:''}
                                                {' - '}
                                                {layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.gioChieu:''}
                                                {' - '}
                                                {layDanhSachPhongVe.thongTinPhim?layDanhSachPhongVe.thongTinPhim.tenRap:''}
                                            </div>
                                        </div>
                                    }
                                    />
                                </List.Item>                          
                            </List>
                           <div className={classes.checkout_right_giaghe}>
                                <Typography.Title className={classes.checkout_right_giaghe_ghe}>Ghế {localStorage.getItem('chonghe') ?getLocalGhe():[]}</Typography.Title> 
                                <Typography.Title className={classes.checkout_right_giaghe_count}>{new Intl.NumberFormat('de-DE').format(getLocaltotal())} đ</Typography.Title> 
                           </div>
                           <div>
                                <Avatar size={20} style={{marginRight:10}} src="/images/exclamation.png"/>
                                 <Typography.Text>Vé đã mua không thể đổi hoặc hoàn tiền
Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã nhập.</Typography.Text>
                           </div>
                           <Button disabled={disabled} loading={UserReducer.loadingDatVe} onClick={()=>datVe()}  className={classes.checkout_right_datve}>Đặt Vé</Button>
                     </Col>

                 </Row>
        </section>
    )
}
