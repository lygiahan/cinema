import React from "react";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import { UserLogin } from "../../actions/user";
import classes from './ModalLogin.module.scss';
import {useHistory} from 'react-router-dom'

export default function ModalLogin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const curential = useSelector(state => state.UserReducer);
  console.log(curential);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>  dispatch(UserLogin(data,history));

     
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form_login}>
      <input {...register("taiKhoan")} placeholder="Tài Khoản"/>
      <input type="password" placeholder="Mật Khẩu" {...register("matKhau", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.matKhau && <span style={{color:'red',fontSize:17,fontWeight:'bold'}}>Vui lòng nhập đúng mật khẩu</span>}

      <input type="submit" value="Đăng Nhập" />
    </form>
  );
}
