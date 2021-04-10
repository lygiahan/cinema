import { getPhimSer,getDetailPhimSer, getInfoHeThongRap, getInfoCumRapTheoHeThong, getInfoLichChieuHeThongRap, layThongTinLichChieuPhim, phanTrangHomeTool, phanTrangHomeToolTenRap } from "../services/phim";
import { DETAIL_PHIM_BEGIN,HOMETOOL_TENRAP, DETAIL_PHIM_FAIL, DETAIL_PHIM_SUCCESS, GET_INFO_LICHCHIEU_HETHONGRAP_BEGIN, GET_INFO_LICHCHIEU_HETHONGRAP_SUCCESS, GET_PHIM_BEGIN, GET_PHIM_FAIL, GET_PHIM_SUCCESS, GET_THONGTIN_CUMRAP_THEOHETHONG_BEGIN, GET_THONGTIN_CUMRAP_THEOHETHONG_FAIL, GET_THONGTIN_CUMRAP_THEOHETHONG_SUCCESS, GET_THONGTIN_HETHONG_BEGIN, GET_THONGTIN_HETHONG_FAIL, GET_THONGTIN_HETHONG_SUCCESS, HOMETOOL_TENPHIM, LAY_THONGTIN_LICHCHIEUPHIM_BEGIN, LAY_THONGTIN_LICHCHIEUPHIM_FAIL, LAY_THONGTIN_LICHCHIEUPHIM_SUCCESS, ReduxThunk, ReduxThunkBegin } from "./type"


export const getPhim =()=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(GET_PHIM_BEGIN));
        try {
            let res = await getPhimSer();
            dispatch(ReduxThunk(GET_PHIM_SUCCESS,res.data.items));
        } catch (error) {
            dispatch(ReduxThunk(GET_PHIM_FAIL,error));
        }
    }
}

export const detailPhim =(data)=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(DETAIL_PHIM_BEGIN));
       try {
        let res = await getDetailPhimSer(data);
           dispatch(ReduxThunk(DETAIL_PHIM_SUCCESS,res.data));
       } catch (error) {
           dispatch(ReduxThunk(DETAIL_PHIM_FAIL,error));
       }
    }
}

export const layThongTinLichChieuPhimAct = (data)=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(LAY_THONGTIN_LICHCHIEUPHIM_BEGIN));
        try {
            let res = await layThongTinLichChieuPhim(data);
            dispatch(ReduxThunk(LAY_THONGTIN_LICHCHIEUPHIM_SUCCESS,res.data));
        } catch (error) {
            dispatch(ReduxThunk(LAY_THONGTIN_LICHCHIEUPHIM_FAIL,error));
        }
    }
}

export const thongTinHeThongRap =()=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(GET_THONGTIN_HETHONG_BEGIN));
        try {
            let res  = await getInfoHeThongRap();
            dispatch(ReduxThunk(GET_THONGTIN_HETHONG_SUCCESS,res.data));

        } catch (error) {
            dispatch(ReduxThunk(GET_THONGTIN_HETHONG_FAIL,error));

        }
    }
}

export const thongTinCumRapTheoHeThong =(data)=>{
    return async dispatch =>{
        dispatch(ReduxThunkBegin(GET_THONGTIN_CUMRAP_THEOHETHONG_BEGIN));
      try {
        let res= await getInfoCumRapTheoHeThong(data);
        dispatch(ReduxThunk(GET_THONGTIN_CUMRAP_THEOHETHONG_SUCCESS,res.data));
      } catch (error) {
          dispatch(ReduxThunk(GET_THONGTIN_CUMRAP_THEOHETHONG_FAIL,error));
      }
    }
}

export const getThongTinLichChieuHeThongRap =()=>{
    return async dispatch =>{
           dispatch(ReduxThunk(GET_INFO_LICHCHIEU_HETHONGRAP_BEGIN));
             try {
            let res = await getInfoLichChieuHeThongRap();
            dispatch(ReduxThunk(GET_INFO_LICHCHIEU_HETHONGRAP_SUCCESS,res.data));
           } catch (error) {
               
           }
    }
}

export const homeToolTenPhimAct =()=>{
    return async dispatch =>{
          let res = await phanTrangHomeTool();
          dispatch(ReduxThunk(HOMETOOL_TENPHIM,res.data.items));
    }
}

export const homeToolTenRapAct=(data)=>{
    return async dispatch =>{
        let res = await phanTrangHomeToolTenRap(data);

          dispatch(ReduxThunk(HOMETOOL_TENRAP,res.data));
    }
}