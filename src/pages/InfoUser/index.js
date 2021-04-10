import { Table } from 'antd'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { InfoUserAct } from '../../actions/user';
import Loading from '../../Components/Loading';
import Moment from 'react-moment';

export default function InfoUser() {
    const dispatch = useDispatch();
    const UserReducer = useSelector(state => state.UserReducer)
    let {loadingThongTin,thongTin} = UserReducer;
    
    useEffect(()=>{
        let taiKhoan = JSON.parse(localStorage.getItem('curential'))
        if(taiKhoan){
            let newTaiKhoan ={"taiKhoan":taiKhoan.taiKhoan}
            console.log(newTaiKhoan)
            dispatch(InfoUserAct(newTaiKhoan))

        }
    },[])
      
    if(loadingThongTin){
        return <Loading />
    }
    const columns=[
        {
            title:'Tên phim',
            dataIndex:'tenPhim'
        },
        {
            title:'Ngày Đặt',
            dataIndex:`ngayDat`
        }
        ,
        // {
        //      title:'Số ghế',
        //      dataIndex:'danhSachGhe',
        // },
        {
            title:'Giá vé',
            dataIndex:'giaVe'
        },
    ]

    return (
        <section className="info">
             <div className="mainmaxwith">
             <Table columns={columns} dataSource={thongTin ?thongTin.thongTinDatVe:[]}>
                   
             </Table>
             </div>
        </section>
    )
}
