
import {instance} from '../config';

export const registerSer =(data)=>{
   return instance.post('/api/QuanLyNguoiDung/DangKy',data);
}
export const loginSer =(data)=>{
   return instance.post('/api/QuanLyNguoiDung/DangNhap',data);
}

export const layDanhSachPhongVeSer = (id) =>{
   return instance.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`)
}

export const datVeSer =(data)=>{
   let token =JSON.parse(localStorage.getItem('token'));

   return instance.post(`/api/QuanLyDatVe/DatVe`,data,{
      headers:{
         'Authorization':'Bearer '+token
      }
   });
}

export const thongTinUserSer =(tk)=>{
   return instance.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan/',tk)
}


// export const infoUserSer =()=>{
//    let token =JSON.parse(localStorage.getItem('token'));

//    return instance.post('/api/QuanLyNguoiDung/ThongTinNguoiDung',{},{
//       headers:{
//        'Authorization':'Bearer '+ token
//       }
//    }
//    )
// } 

// export const updateUserSer =(data)=>{
//    let token =JSON.parse(localStorage.getItem('token'));

//    return instance.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',data,{
//       headers:{
//          'Authorization': 'Bearer '+token
//       }
//    });
// }


// export const infoTaiKhoan =(data)=>{
//    let token =JSON.parse(localStorage.getItem('token'));

//    return instance.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan',data,{
//       headers:{
//          'Authorization': 'Bearer '+token
//       }
//    })
// }

// export const ghiDanhSer =(data)=>{
//    let token =JSON.parse(localStorage.getItem('token'));
//    return instance.post('/api/QuanLyKhoaHoc/DangKyKhoaHoc',data,{
//       headers:{
//          'Authorization': 'Bearer '+token
//       }
//    });
// }


