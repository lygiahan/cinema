

export const ReduxThunk  = (type,data)=>{
       return {
           type,
           data
       }
}

export const ReduxThunkBegin  = (type)=>{
    return {
        type     
    }
}

/** User ---------------------------------------------------------- */
export const REGISTER_BEGIN  = 'REGISTER_BEGIN';
export const REGISTER_SUCCESS  = 'REGISTER_SUCCESS';
export const REGISTER_FAIL  = 'REGISTER_FAIL';

export const LOGIN_BEGIN  = 'LOGIN_BEGIN';
export const LOGIN_SUCCESS  = 'LOGIN_SUCCESS';
export const LOGIN_FAIL  = 'LOGIN_FAIL';

export const CHECKOUT_BEGIN="CHECKOUT_BEGIN";
export const CHECKOUT_SUCCESS="CHECKOUT_SUCCESS";
export const CHECKOUT_FAIL="CHECKOUT_FAIL";

export const CHON_GHE_SUCCESS="CHON_GHE";

export const DATVE_BEGIN="DATVE_BEGIN";
export const DATVE_SUCCESS="DATVE_SUCCESS";
export const DATVE_FAIL="DATVE_FAIL";


export const DANGXUAT ="DANGXUAT";

export const THONGTIN_USER_BEGIN ="THONGTIN_USER_BEGIN";
export const THONGTIN_USER_SUCCESS ="THONGTIN_USER_SUCCESS";
/**End User ------------------------------------------------------- */


/**PHIM ------------------------------------------------------------ */

export const GET_PHIM_BEGIN = "GET_PHIM_BEGIN"
export const GET_PHIM_SUCCESS = "GET_PHIM_SUCCESS"
export const GET_PHIM_FAIL = "GET_PHIM_FAIL"

export const DETAIL_PHIM_BEGIN = 'DETAIL_PHIM_BEGIN';
export const DETAIL_PHIM_SUCCESS = 'DETAIL_PHIM_SUCCESS';
export const DETAIL_PHIM_FAIL = 'DETAIL_PHIM_FAIL';


export const HOMETOOL_TENPHIM ="HOMETOOL_TENPHIM";
export const HOMETOOL_TENRAP="HOMETOOL_TENRAP";
//ENDPHIM ----------------------------------------------------------


/** Rap --------------------------------- */

export const GET_THONGTIN_HETHONG_BEGIN = "GET_THONGTIN_HETHONG_BEGIN";
export const GET_THONGTIN_HETHONG_SUCCESS = "GET_THONGTIN_HETHONG_SUCCESS";
export const GET_THONGTIN_HETHONG_FAIL = "GET_THONGTIN_HETHONG_FAIL";


export const GET_THONGTIN_CUMRAP_THEOHETHONG_BEGIN="GET_THONGTIN_CUMRAP_THEOHETHONG_BEGIN";
export const GET_THONGTIN_CUMRAP_THEOHETHONG_SUCCESS="GET_THONGTIN_CUMRAP_THEOHETHONG_SUCCESS";
export const GET_THONGTIN_CUMRAP_THEOHETHONG_FAIL="GET_THONGTIN_CUMRAP_THEOHETHONG_FAIL";


export const GET_INFO_LICHCHIEU_HETHONGRAP_BEGIN ="GET_INFO_LICHCHIEU_HETHONGRAP_BEGIN";
export const GET_INFO_LICHCHIEU_HETHONGRAP_SUCCESS ="GET_INFO_LICHCHIEU_HETHONGRAP_SUCCESS";
export const GET_INFO_LICHCHIEU_HETHONGRAP_FAIL ="GET_INFO_LICHCHIEU_HETHONGRAP_FAIL";


export const LAY_THONGTIN_LICHCHIEUPHIM_BEGIN='LAY_THONGTIN_LICHCHIEUPHIM_BEGIN';
export const LAY_THONGTIN_LICHCHIEUPHIM_SUCCESS='LAY_THONGTIN_LICHCHIEUPHIM_SUCCESS';
export const LAY_THONGTIN_LICHCHIEUPHIM_FAIL='LAY_THONGTIN_LICHCHIEUPHIM_FAIL';


