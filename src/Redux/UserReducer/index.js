import { CHECKOUT_BEGIN, CHECKOUT_FAIL, CHECKOUT_SUCCESS, CHON_GHE_SUCCESS, DANGXUAT, DATVE_BEGIN, DATVE_SUCCESS, LOGIN_BEGIN, LOGIN_SUCCESS, THONGTIN_USER_BEGIN, THONGTIN_USER_SUCCESS } from "../../actions/type";

let StateUser = {
     curential:null,
     loadingLogin:false,
     layDanhSachPhongVe:[],
     loadinglayDanhSachPhongVe:false,
     chonGhe:[],
     datVe:[],
     loadingDatVe:false,
     thongTin:null,
     loadingThongTin:false
}

export const UserReducer  = (state = StateUser,action)=>{

    switch (action.type) {
        case LOGIN_BEGIN:
            return {...state,loadingLogin:true}

        case LOGIN_SUCCESS:
           let loginLocal =  action.data;
           localStorage.setItem('curential',JSON.stringify(loginLocal))
           localStorage.setItem('token',JSON.stringify(loginLocal.accessToken))

        return {...state,loadingLogin:false,curential:loginLocal}

        case DANGXUAT:
           let news = state.curential = null;
           localStorage.setItem('curential',JSON.stringify(news));
             return {...state}
        case CHECKOUT_BEGIN:
            return {...state,loadinglayDanhSachPhongVe:true}

        case CHECKOUT_SUCCESS:
            return {...state,loadinglayDanhSachPhongVe:false,layDanhSachPhongVe:action.data}

        case CHECKOUT_FAIL:
            return {...state,loadinglayDanhSachPhongVe:false,layDanhSachPhongVe:action.data}

        case CHON_GHE_SUCCESS:
                   let newsghe = [...state.chonGhe,action.data];
                   console.log(newsghe)
                //    console.log(state.layDanhSachPhongVe.danhSachGhe)
                //    let newdanhSach =  state.layDanhSachPhongVe.danhSachGhe.
                    localStorage.setItem('chonghe',JSON.stringify(newsghe));
                   return {...state,chonGhe:newsghe}

      
         case DATVE_BEGIN:
             return {...state,loadingDatVe:true}

        case DATVE_SUCCESS:
            return {...state,loadingDatVe:false,datVe:action.data}
            

        case THONGTIN_USER_BEGIN:
            return {...state,loadingThongTin:true}

        case THONGTIN_USER_SUCCESS:
            return {...state,thongTin:action.data,loadingThongTin:false}
        default:
            return state;
    }
}