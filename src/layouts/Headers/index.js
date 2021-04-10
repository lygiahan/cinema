import React, { Fragment, useState } from 'react'
import classes from './Headers.module.scss';
import Modals from '../../Components/Modal'
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Drawer, Dropdown, Menu, message, Typography } from 'antd';
import { AlignRightOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import {Link, useHistory} from 'react-router-dom';
import { dangXuatAct } from '../../actions/user';
export default function Headers() { 
    const dispatch = useDispatch();
    const history = useHistory();
     const UserReducer = useSelector(state => state.UserReducer)   
     // Get info UserReducer 
     let {curential,loadingLogin} = UserReducer;
     // END

   // Random Avatar
     const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
   // END

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modallogin,setModalLogin] = useState('login');
    const [color, setColor] = useState(ColorList[0]);
    const [visible, setVisible] = useState(false);


   const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

    const  modalLogin = (register)=>{
        setModalLogin(register);
    }
    const  modalRegister = (login)=>{
        setModalLogin(login);
    }
    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
   
    const dangXuat = ()=>{
        dispatch(dangXuatAct())
        history.push('/')
    }

//    let {taiKhoan} = JSON.parse(localStorage.getItem('curential'));
    return (
        <nav className={classes.nav}>
             <Link to="/" style={{color:'mediumseagreen',fontFamily:'slick',fontSize:30}}>han</Link>
             <a style={{fontSize:30,color:'#222'}}><AlignRightOutlined onClick={showDrawer} className={classes.toggle}/></a>
             <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                   <div style={{height:'100%'}}>
                   <ul style={{listStyleType:'none',height:'100%'}}>
                       <li style={{height:50}}>
                       <div style={{display:'flex',alignItems:'center',margin:'0 10px'}}>
                                <Avatar style={{backgroundColor:color,marginRight:8}}icon={<UserOutlined />} size="default"> </Avatar>
                                    {curential? <Typography.Title style={{margin:0,color:'#9b9b9b',fontSize:'1.3rem'}}>{curential.hoTen}</Typography.Title>:null}
                       </div>
                       </li>
                       <li style={{height:50}}>
                           <Link to="/#movies" style={{fontSize:18,color:'#000000'}}>Lịch Chiếu</Link>
                       </li>
                       <li style={{height:50}}>
                           <Link to="/#show_movies" style={{fontSize:18,color:'#000000'}}>Cụm Rạp</Link>
                       </li>
                       <li style={{height:50}}>
                           <Link to="/#bg_home" style={{fontSize:18,color:'#000000'}}>Ứng Dụng</Link>
                       </li>
                       <li style={{height:50}}>
                           <Link style={{fontSize:18,color:'#000000'}} onClick={()=>dangXuat()} >Đăng Xuất</Link>
                       </li>
                       
                   </ul>
                   </div>
                </Drawer>
            <ul className={classes.nav_menu}>
                <li className={classes.nav_menu_item}>
                    <a className={classes.nav_menu_item_link} href="#movies">Lịch chiếu</a>
                </li>
                <li className={classes.nav_menu_item}>
                    <a className={classes.nav_menu_item_link}href="#show_movies">Cụm rạp</a>
                </li>
                <li className={classes.nav_menu_item}>
                    <a className={classes.nav_menu_item_link} href="#bg_home">Ứng dụng</a>
                </li>
            </ul>
            <div className={classes.account}>
                              
                <div className={classes.account_content}>
                    
                     {curential ? 
                       <Fragment>

                            <a className={classes.account_item}> 
                            <Dropdown overlay={
                                <Menu>
                                     <Menu.Item>
                                        <Link to={`/user/thongtin`}>Thông Tin</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a onClick={()=>dangXuat()}>Đăng Xuất</a>
                                    </Menu.Item>
                                </Menu>}>    
                                <div style={{display:'flex',alignItems:'center',margin:'0 10px'}}>
                                <Avatar style={{backgroundColor:color,marginRight:8}}icon={<UserOutlined />} size="default"> </Avatar>
                                    {curential? <Typography.Title style={{margin:0,color:'#9b9b9b',fontSize:'1.3rem'}}>{curential.hoTen}</Typography.Title>:null}
                               </div>
                               </Dropdown>
                           </a>
                       </Fragment>

                       :
                       <Fragment>
                             <a className={classes.account_item} onClick={showModal}>            
                        <Fragment>
                               <img  src="./images/avatar.png"/>
                          <p>Đăng Nhập</p>
                        </Fragment>
                     </a>
                       </Fragment>
                    }
                   

                     <Modals visible={isModalVisible} modallogin={modallogin} modalRegister={modalRegister} modalLogin={modalLogin} onOk={handleOk} onCancel={handleCancel}/>
                </div>
                <div className={classes.account_content}>
                     <a className={classes.account_item} > 
                         <img className={classes.account_item_img2} src="./images/location-header.png"/>
                      

                          <p>Hồ Chí Minh <DownOutlined /></p>
                     </a>

                </div>
            </div>
             
        </nav>
    )
}
