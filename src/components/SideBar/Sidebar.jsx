import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faBox,
  faUser,
  faWallet,
  faSignOutAlt,
  faNetworkWired,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* Logo */}
      <div className='sidebar-logo'>
        <span>NEXT</span>.JS
      </div>

      {/* Menu Items */}
      <div className='sidebar-menu'>
        {/* Báo cáo */}
        <Link className='sidebar-menu-item active' to={"/"}>
          <FontAwesomeIcon icon={faChartBar} />
          <span>BÁO CÁO</span>
        </Link>

        {/* Box */}
        <Link className='sidebar-menu-item' to={"/box"}>
          <FontAwesomeIcon icon={faBox} />
          <span>BOX</span>
        </Link>

        {/* Proxy */}
        <Link className='sidebar-menu-item' to={"/lan"}>
          <FontAwesomeIcon icon={faNetworkWired} />
          <span>PROXY</span>
        </Link>

        {/* Tài khoản */}
        <Link className='sidebar-menu-item' to='/statistics'>
          <FontAwesomeIcon icon={faUser} />
          <span>TÀI KHOẢN</span>
        </Link>

        {/* Thanh toán */}
        <Link className='sidebar-menu-item' to={"/"}>
          <FontAwesomeIcon icon={faWallet} />
          <span>THANH TOÁN</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontSize: "0.75rem" }}
          />
        </Link>
      </div>

      {/* Đăng xuất */}
      <div className='sidebar-logout'>
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>ĐĂNG XUẤT</span>
      </div>
    </div>
  );
};

export default Sidebar;
