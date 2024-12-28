import React from "react";
import "./ServiceDeletionSection.css";
function ServiceDeletionSection() {
  return (
    <div className='service-container'>
      <div className='service-deletion'>
        <span className='service-deletion-title'>
          Danh sách dịch vụ sắp bị xóa
        </span>
        <div className='service-deletion-activities'>
          <p>Hiện chưa có dịch vụ nào sắp bị xóa</p>
        </div>
      </div>
      <div className='service-expiration'>
        <span className='service-expiration-title'>
          Danh sách dịch vụ sắp hết hạn
        </span>
        <div className='service-expiration-activities'>
          <p>Hiện chưa có dịch vụ nào sắp bị xóa</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceDeletionSection;
