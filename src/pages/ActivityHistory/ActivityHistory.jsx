import React, { useState } from "react";
import "./ActivityHistory.css";
const ActivityHistory = () => {
  const [activeTab, setActiveTab] = useState("transactions");

  const transactionData = [
    {
      title: "Giao dịch 1",
      description: "Mô tả giao dịch 1",
      date: "2023-06-01",
    },
    {
      title: "Giao dịch 2",
      description: "Mô tả giao dịch 2",
      date: "2023-06-02",
    },
  ];

  const activityData = [
    {
      title: "Đăng nhập",
      description: "Tài khoản đã đăng nhập tại IP: 190.142.2.123",
      date: "2023-06-01",
    },
    {
      title: "Đăng xuất",
      description: "Tài khoản đã đăng xuất tại IP: 190.142.2.123",
      date: "2023-06-02",
    },
    {
      title: "Đăng nhập",
      description: "Tài khoản đã đăng nhập tại IP: 190.142.2.123",
      date: "2023-06-03",
    },
    {
      title: "Kích hoạt Proxy",
      description: "Kích hoạt thành công Proxy IP: 154.244.178.44.111",
      date: "2023-06-03",
    },
    {
      title: "Kích hoạt Proxy",
      description: "Kích hoạt thành công Proxy IP: 154.244.178.44.555",
      date: "2023-06-03",
    },
  ];
  const data = activeTab === "transactions" ? transactionData : activityData;
  return (
    <div className='activityhistory-container'>
      <div className='tab-buttons'>
        <button
          className={`tab-button ${
            activeTab === "transactions" ? "active" : ""
          }`}
          onClick={() => setActiveTab("transactions")}
        >
          Lịch sử giao dịch
        </button>
        <button
          className={`tab-button ${activeTab === "activities" ? "active" : ""}`}
          onClick={() => setActiveTab("activities")}
        >
          Lịch sử hoạt động
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='history-title'>{item.title}</td>
              <td className='history-desc'>{item.description}</td>
              <td className='history-date'>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        <button>&lt;</button>
        <button>1</button>
        <button>&gt;</button>
      </div>
    </div>
  );
};

export default ActivityHistory;
