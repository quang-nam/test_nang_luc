import React from "react";
import NotificationSection from "../NotificationSection/NotificationSection";
import ActivitySection from "../ActivitySection/ActivitySection";
import TransactionSection from "../TransactionSection/TransactionSection";
import ServiceDeletionSection from "../ServiceDeletionSection/ServiceDeletionSection";
import "./ActivityLog.css";
const ActivityLog = () => {
  return (
    <div className='activity-container'>
      <NotificationSection />
      <ActivitySection />
      <TransactionSection />
      <ServiceDeletionSection />
    </div>
  );
};

export default ActivityLog;
