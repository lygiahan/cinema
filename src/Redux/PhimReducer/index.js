import { DETAIL_PHIM_BEGIN, DETAIL_PHIM_FAIL, DETAIL_PHIM_SUCCESS, GET_INFO_LICHCHIEU_HETHONGRAP_BEGIN, GET_INFO_LICHCHIEU_HETHONGRAP_SUCCESS, GET_PHIM_BEGIN, GET_PHIM_FAIL, GET_PHIM_SUCCESS, GET_THONGTIN_CUMRAP_THEOHETHONG_BEGIN, GET_THONGTIN_CUMRAP_THEOHETHONG_SUCCESS, GET_THONGTIN_HETHONG_BEGIN, GET_THONGTIN_HETHONG_FAIL, GET_THONGTIN_HETHONG_SUCCESS, HOMETOOL_TENPHIM, HOMETOOL_TENRAP, LAY_THONGTIN_LICHCHIEUPHIM_BEGIN, LAY_THONGTIN_LICHCHIEUPHIM_SUCCESS } from "../../actions/type";


let statePhim ={
    dsphim:[],
    loadingdsPhim:false,
    getInfoLichChieuHeThongRap:[],
    loadinggetInfoLichChieuHeThongRap:false,
    detailphim:null,
    loadingDetailPhim:false,
    infoHeThongRap:[],
    loadingInfoHeThongRap:false,
    getThongTinTheoHeThongRap:[],
    loadingThongTinTheoHeThongRap:false,
    layThongTinLichChieuPhim:[],
    loadinglayThongTinLichChieuPhim:false,
    homeToolTenPhim:[],
    homeToolTenRap:[]
    
};


export const PhimReducer = (state = statePhim,action)=>{
    switch (action.type) {
        case GET_PHIM_BEGIN:
            return {...state,loadingdsPhim:true}
        case GET_PHIM_SUCCESS:
            let newState = action.data;
            return {...state,loadingdsPhim:false,dsphim:newState}
        case GET_PHIM_FAIL:
            return {...state,loadingdsPhim:false}
        
        case GET_INFO_LICHCHIEU_HETHONGRAP_BEGIN:
            return {...state,loadinggetInfoLichChieuHeThongRap:true};
        case GET_INFO_LICHCHIEU_HETHONGRAP_SUCCESS:
            return {...state,loadinggetInfoLichChieuHeThongRap:false,getInfoLichChieuHeThongRap:action.data}

        case DETAIL_PHIM_BEGIN:
        return {...state,loadingDetailPhim:true};

        case DETAIL_PHIM_SUCCESS:
        return {...state,detailphim:action.data,loadingDetailPhim:false};

        case DETAIL_PHIM_FAIL:
            return {...state,loadingDetailPhim:false,detailphim:action.data};

        case GET_THONGTIN_HETHONG_BEGIN:
            return {...state,loadingInfoHeThongRap:true}
        
        case GET_THONGTIN_HETHONG_SUCCESS:
            return {...state,loadingInfoHeThongRap:false,infoHeThongRap:action.data}

        case GET_THONGTIN_HETHONG_FAIL:
            return {...state,loadingInfoHeThongRap:false,infoHeThongRap:action.data}
           
        case GET_THONGTIN_CUMRAP_THEOHETHONG_BEGIN:
            return {...state,loadingThongTinTheoHeThongRap:true}

        case GET_THONGTIN_CUMRAP_THEOHETHONG_SUCCESS:
            return {...state,loadingThongTinTheoHeThongRap:true,getThongTinTheoHeThongRap:action.data}


        case LAY_THONGTIN_LICHCHIEUPHIM_BEGIN:
            return{...state,loadinglayThongTinLichChieuPhim:true}
        
        case LAY_THONGTIN_LICHCHIEUPHIM_SUCCESS:
            return {...state,loadinglayThongTinLichChieuPhim:false,layThongTinLichChieuPhim:action.data}
       
        case HOMETOOL_TENPHIM:

        return {...state,homeToolTenPhim:action.data};

        case HOMETOOL_TENRAP:
            return {...state,homeToolTenRap:action.data}
        default:
            return state;
    }
}