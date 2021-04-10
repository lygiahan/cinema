import { instance } from "../config";
import { datVeSer, layDanhSachPhongVeSer, loginSer, registerSer, thongTinUserSer } from "../services/user";
import { ReduxThunkBegin, REGISTER_BEGIN,LOGIN_BEGIN, ReduxThunk, LOGIN_SUCCESS, LOGIN_FAIL, CHECKOUT_BEGIN, CHECKOUT_SUCCESS, CHECKOUT_FAIL, CHON_GHE_SUCCESS, DATVE_SUCCESS, DATVE_BEGIN, DANGXUAT, THONGTIN_USER_BEGIN, THONGTIN_USER_SUCCESS } from "./type"


export const  UserRegister = (data)=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(REGISTER_BEGIN));
        let res = await registerSer(data);
    }
}

export const UserLogin = (data,history) =>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(LOGIN_BEGIN));
          try {
            let res = await loginSer(data);
            if(res.data){
                dispatch(ReduxThunk(LOGIN_SUCCESS,res.data));
                instance.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`;

                 history.push('/')
            }
        } catch (error) {
               dispatch(ReduxThunk(LOGIN_FAIL,error));
          }
    }
}

export const UserChonGhe =(data)=>{
    return async dispatch =>{
        dispatch(ReduxThunk(CHON_GHE_SUCCESS,data));
    }
}

export const layDanhSachPhongVeAct =(data)=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(CHECKOUT_BEGIN));
        try {
            let res = await layDanhSachPhongVeSer(data);
            dispatch(ReduxThunk(CHECKOUT_SUCCESS,res.data));
        } catch (error) {
            dispatch(ReduxThunk(CHECKOUT_FAIL,error));
        }
    }
}


export const datVeAct =(data)=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(DATVE_BEGIN));
        try {
            let res = await datVeSer(data);
            dispatch(ReduxThunk(DATVE_SUCCESS,res.data));
        } catch (error) {
            
        }
    }
} 

export const dangXuatAct =()=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(DANGXUAT));
    }
}

export const InfoUserAct =(data)=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(THONGTIN_USER_BEGIN));
        try {
            let res = await thongTinUserSer(data);
            dispatch(ReduxThunk(THONGTIN_USER_SUCCESS,res.data));
        } catch (error) {
        }
    }
}