import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux';
import { UserRegister } from '../../actions/user';
import classes from './ModalRegister.module.scss';
export default function ModalRegister() {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => dispatch(UserRegister({...data,maLoaiNguoiDung:'KhachHang'}));
    return (
        <>
           <form onSubmit={handleSubmit(onSubmit)} className={classes.form_login}>
                <input  placeholder="Họ Tên" {...register("hoTen")} placeholder="Họ Tên"/>
                {/* errors will return when field validation fails  */}
                <input {...register("taiKhoan",{ required: true })} placeholder="Tài Khoản"/>
                {errors.taiKhoan && <span style={{color:'red',fontSize:17,fontWeight:'bold'}}>Vui lòng nhập tài khoản</span>}
                <input type="password" placeholder="Mật Khẩu" {...register("matKhau", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.matKhau && <span style={{color:'red',fontSize:17,fontWeight:'bold'}}>Vui Lòng Nhập Mật Khẩu</span>}
                <input  placeholder="Email" {...register("email", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.email && <span style={{color:'red',fontSize:17,fontWeight:'bold'}}>Vui lòng nhập đúng email</span>}
                <input  placeholder="Số Điện Thoại" {...register("soDt")} />
                {/* errors will return when field validation fails  */}
                <select {...register("maNhom")}>
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                    <option value="GP04">GP04</option>
                    <option value="GP05">GP05</option>
                    <option value="GP06">GP06</option>
                    <option value="GP07">GP07</option>
                    <option value="GP08">GP08</option>
                    <option value="GP09">GP09</option>
                </select>
                <input type="submit"value="Đăng Ký" />
            </form>
        </>
    )
}
