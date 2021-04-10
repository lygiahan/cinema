import React from "react";
import { Modal, Typography } from "antd";
import ModalLogin from "../ModalLogin";
import ModalRegister from "../ModalRegister";
export default function Modals(props) {
  return (
    <>
      <Modal
        footer={false}
        bodyStyle={{ backgroundColor: "#0f294c" }}
        visible={props.visible}
        onOk={props.onOk}
        onCancel={props.onCancel}
      >
        <div style={{ textAlign: "center" }}>
          {props.modallogin === "login" ? (
            <>
              <Typography.Title style={{ color: "#fff" }} level={2}>
                Đăng Nhập
              </Typography.Title>
              <Typography.Text style={{ color: "#fff", fontSize: 17 }}>
                Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
              </Typography.Text>
              <ModalLogin />
              <Typography.Text style={{ color: "#fff", fontSize: 17 }}>
                Bạn chưa có tài khoản? đừng lo đăng ký ngay nào{" "}
                <a
                  style={{ color: "#fb4226" }}
                  onClick={() => props.modalLogin("register")}
                >
                  Đăng Ký
                </a>
              </Typography.Text>
            </>
          ) : (
            <>
              <Typography.Title style={{ color: "#fff" }} level={2}>
                Đăng Ký
              </Typography.Title>
              <ModalRegister />
              <Typography.Text style={{ color: "#fff", fontSize: 17 }}>
                Bạn chưa đăng ký? đừng lo tạo tài khoản nào{" "}
                <a
                  style={{ color: "#fb4226" }}
                  onClick={() => props.modalRegister("login")}
                >
                  Đăng nhập
                </a>
              </Typography.Text>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
