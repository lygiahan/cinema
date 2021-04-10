import { Button, Col, Row, Select, Typography } from "antd";
import React, { useEffect } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import {useDispatch, useSelector} from 'react-redux'
import classes from './HomeTool.module.scss';
import { homeToolTenPhimAct, homeToolTenRapAct } from "../../actions/phim";
import Moment from 'react-moment';

const { Option } = Select;
export default function HomeTool() {
    const dispatch = useDispatch();
     const PhimReducer = useSelector(state => state.PhimReducer);
     let {homeToolTenPhim,homeToolTenRap} = PhimReducer;
     console.log(homeToolTenPhim)
     console.log(homeToolTenRap)


  useEffect(()=>{
        
      dispatch(homeToolTenPhimAct())
  },[])
  
  const  handleChange =(value) =>{
       dispatch(homeToolTenRapAct(value))
}
  return (
    <section className={classes.home_tool}>
      <Row className={classes.mainmaxwith}>
        <Col md={8}>
          <Select onChange={handleChange} defaultValue={<Typography.Title 
 level={5}>Phim</Typography.Title>} style={{width:'100%',height:'100%'}}>
            {homeToolTenPhim? homeToolTenPhim.map((item,index)=>{
              return(
                <Option key={index} value={`${item.maPhim}`}>
                  {item.tenPhim}
                </Option>
                )
           }):''}
          </Select>
        </Col>
        <Col md={4}>
          <Select  defaultValue={<Typography.Title 
 level={5}>Rạp</Typography.Title>} style={{width:'100%',height:'100%'}}>
           
          </Select>
        </Col>
        <Col md={4}>
          <Select  defaultValue={<Typography.Title 
 level={5}>Ngày xem</Typography.Title>} style={{width:'100%',height:'100%'}} style={{width:'100%',height:'100%'}}>
             {homeToolTenRap?homeToolTenRap.lichChieu.map((item,index)=>{
               return(
              <Option key={index}  value={item.ngayChieuGioChieu}>                                                  <Moment format="DD/MMMM/YYYY">{item.ngayChieuGioChieu}</Moment>
              </Option>
               ) 
            }):null}
          </Select>
        </Col>
        <Col md={4}>
          <Select  defaultValue={<Typography.Title 
 level={5}>Suất chiếu</Typography.Title>} style={{width:'100%',height:'100%'}}>
           {homeToolTenRap?homeToolTenRap.lichChieu.map((item,index)=>{
               return(
              <Option key={index}
              value={item.ngayChieuGioChieu}>                                                  <Moment format="hh:mm">{item.ngayChieuGioChieu}</Moment>
              </Option>
               ) 
            }):null}
          </Select>
        </Col>
        <Col md={4}>
            <Button type="primary" className={classes.home_tool_btnmuave}>Mua vé ngay</Button>
        </Col>
      </Row>
    </section>
  );
}
