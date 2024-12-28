import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import BoxManagement from "./pages/BoxManagement/BoxManagement";
import ActivityHistory from "./pages/ActivityHistory/ActivityHistory";
import DashboardStatistics from "./pages/DashboardStatistics/DashboardStatistics";
import LanManagement from "./pages/LanMangement/LanManagement";
import FormAdd from "./pages/Form/FormAdd";
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/box' element={<BoxManagement />} />
        <Route path='/box/add' element={<FormAdd />} />
        <Route path='/box/edit/:id' element={<FormAdd />} />
        <Route path='/history' element={<ActivityHistory />} />
        <Route path='/statistics' element={<DashboardStatistics />} />
        <Route path='/lan' element={<LanManagement />} />
      </Routes>
    </>
  );
};

export default App;
