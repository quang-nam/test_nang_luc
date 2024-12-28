import React from "react";
import "./MainContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faShoppingCart,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import ActivityLog from "../activity/ActivityLog/ActivityLog";
const MainContent = () => {
  return (
    <div className='main-content'>
      <div className='balance'>
        <div className='card'>
          <FontAwesomeIcon icon={faSuitcase} className='content-icon' />
          <div className='card-content'>
            <span>10</span>
            <p>Tổng dịch vụ</p>
          </div>
        </div>

        <div className='card'>
          <FontAwesomeIcon icon={faShoppingCart} className='content-icon' />
          <div className='card-content'>
            <span>0</span>
            <p>Đơn hàng đang xử lý</p>
          </div>
        </div>

        <div className='card'>
          <FontAwesomeIcon icon={faWallet} className='content-icon' />
          <div className='card-content'>
            <span>1,000,000 VND</span>
            <p>Tài khoản chính</p>
          </div>
        </div>
      </div>

      <ActivityLog />
    </div>
  );
};

export default MainContent;
