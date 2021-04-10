
import { GET_INFO_LICHCHIEU_HETHONGRAP_BEGIN, ReduxThunk } from '../actions/type';
import {instance} from '../config'


export const getPhimSer =()=>{
    return instance.get('/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10');
}

export const getDetailPhimSer =(id)=>{
    return instance.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
}

export const getInfoHeThongRap =()=>{
    return instance.get('/api/QuanLyRap/LayThongTinHeThongRap');
}

export const getInfoCumRapTheoHeThong =(marap)=>{
    return instance.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${marap}`);
}

export const getInfoLichChieuHeThongRap =()=>{
    return instance.get('/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01');
}

export const layThongTinLichChieuPhim =(ma) =>{
    return instance.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${ma}`)
}

export const phanTrangHomeTool =()=>{
    return instance.get('/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=10')
}

export const phanTrangHomeToolTenRap =(data)=>{
    return instance.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${data}`);
}
// export const getCategorySer =()=>{
//     return instance.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
// }


// export const filterCourseSer=(madanhmuc)=>{
//     return instance.get(`api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${madanhmuc}&MaNhom=GP01`);
// }


// export const searchCourse=(makhoahoc)=>{
//     return instance.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${makhoahoc}`);
// }

// export const getCoursePagiSer = (page)=>{
//     return instance.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=10&MaNhom=GP01`)
// }
// export const getCheckedTypeCourseSer =(data)=>{
//     return instance.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${data}&MaNhom=GP01`)
// }

// export const getCategoryPage =(category)=>{
//    return instance.get(`/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP01`)
// }