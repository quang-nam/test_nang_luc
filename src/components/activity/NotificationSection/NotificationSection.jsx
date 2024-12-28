import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faBell,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Section from "../Section";
import "./NotificationSection.css";
function NotificationSection() {
  return (
    <div className='notification-container'>
      <div className='notification-title'>
        <span>Những bài hướng dẫn quan trọng</span>
        <div className='notification-icon-container'>
          <FontAwesomeIcon icon={faChevronLeft} className='notification-icon' />
          <FontAwesomeIcon
            icon={faChevronRight}
            className='notification-icon'
          />
        </div>
      </div>
      <div className='notification-text'>
        <p className='notification-title'>Thông tin đăng nhập</p>
        <p>Tên đăng nhập: admin, Mật khẩu: 123456</p>
      </div>
    </div>
  );
}

export default NotificationSection;
