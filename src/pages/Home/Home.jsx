import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";

const Home = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className='main'>
        <Header />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
