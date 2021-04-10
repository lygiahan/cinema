import { Col, Row, Typography } from 'antd';
import React from 'react'
import classes from './Footers.module.scss';
export default function Footers() {
    return (
        <>
        <div className={classes.footer_top}>
           <div className="mainmaxwith">
             <Row>
                 <Col xs={12} md={7} className={classes.footer_top_widget}>
                        <h2 className={classes.footer_title}>Han</h2>
                        <ul className={classes.footer_top_widget_list}>
                            <li className={classes.footer_top_widget_item}>
                                <a href="#" className={classes.footer_top_widget_link}>FAQ</a>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                <a href="#" className={classes.footer_top_widget_link}>Thỏa thuận sử dụng</a>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                <a href="#" className={classes.footer_top_widget_link}>Chính sách bảo mật</a>
                            </li>
                        </ul>
                 </Col>
                 <Col xs={24} md={7} className={classes.footer_top_doitac}>
                 <h2 className={classes.footer_title}>Đối tác</h2>
                 <ul className={classes.footer_top_widget_list}>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/cgv.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/galaxycine.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/laban.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/payoo.jpg"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/megags.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/bt.jpg"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/dongdacinema.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/TOUCH.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/cnx.jpg"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/STARLIGHT.png"/>
                            </li>

                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/dcine.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/zalopay_icon.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/payoo.jpg"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/VCB.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                <img  src="/images/AGRIBANK.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/VIETTINBANK.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/IVB.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/123go.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/dongdacinema.png"/>
                            </li>
                            <li className={classes.footer_top_widget_item}>
                                    <img  src="/images/laban.png"/>
                            </li>
                           
                        </ul>
                       
                 </Col>
                 <Col xs={12} md={5}  className={classes.footer_top_app}>
                      <h2 className={classes.footer_title}>MOBILE APP</h2>
                       <ul className={classes.footer_top_app_list} >
                             <li className={classes.footer_top_app_item}>
                                    <img  src="/images/apple-logo.png"/>
                            </li>
                            <li className={classes.footer_top_app_item}>
                                    <img  src="/images/android-logo.png"/>
                            </li>
                       </ul>

                 </Col>
                 <Col xs={12} md={5} className={classes.footer_top_social}>
                         <h2 className={classes.footer_title}>Social</h2>
                         <ul className={classes.footer_top_app_list} >
                             <li className={classes.footer_top_social_item}>
                                    <img  src="/images/facebook-logo.png"/>
                            </li>
                            <li className={classes.footer_top_social_item}>
                                    <img  src="/images/zalo-logo.png"/>
                            </li>
                       </ul>
                 </Col>
             </Row>
             <hr style={{border:'1px solid #4a4a4a'}}></hr>
             </div>
        </div>
        <div className={classes.footer_bottom}>
              <Typography.Text className={classes.footer_bottom_title}> @ Bản quyền thuộc về thiết kế bởi Giahan {new Date().getFullYear()}</Typography.Text>
        </div>
        </>
    )
}
