import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

function Section({ title, children, showPagination, showViewMore }) {
  return (
    <div className='section'>
      <div className='section-header'>
        <span>{title}</span>
        {showPagination && (
          <div className='pagination'>
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        )}
        {showViewMore && <button className='view-more-btn'>Xem thêm</button>}
      </div>
      <div className='section-content'>{children}</div>
    </div>
  );
}

export default Section;
