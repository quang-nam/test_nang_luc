import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faUserCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className='container'>
      <h3>BÁO CÁO TỔNG QUAN</h3>
      <div className='body'>
        <div className='info'>
          <div className='wallet'>
            <span className='text'>SỐ DƯ: </span>
            <span className='balance'>1,000,000 VND</span>
          </div>
          <FontAwesomeIcon icon={faPlus} className='icon' />
        </div>
        <button className='btn'>
          <FontAwesomeIcon
            icon={faUserCircle}
            style={{ backgroundColor: "transparent" }}
          />
          <span className='admin-text'>ADMIN</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
