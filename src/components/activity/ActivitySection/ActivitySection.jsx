import React from "react";
import Section from "../Section";
import "./ActivitySection.css";
function ActivitySection() {
  return (
    <div className='recent-container'>
      <div className='recent-title'>
        <span>Hoạt động gần đây</span>
        <button className='recent-btn'>Xem thêm</button>
      </div>
      <div className='recent-body-container'>
        <div className='recent-body'>
          <div className='recent-icon'></div>
          <p className='recent-name'>Đăng nhập</p>
          <p className='recent-time'>12/12/2012, 11:47:30 AM</p>
        </div>
        <div className='recent-body'>
          <div className='recent-icon'></div>
          <p className='recent-name'>Đăng xuat</p>
          <p className='recent-time'>12/12/2012, 11:47:30 AM</p>
        </div>
      </div>
    </div>
  );
}

export default ActivitySection;
