import {
  faGear,
  faPen,
  faToggleOff,
  faToggleOn,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./DashboardStatistics.css";
import { getAll } from "../../service";
import { useNavigate } from "react-router-dom";
const DashboardStatistics = () => {
  const [tableData, setTableData] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [lans, setLans] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    (async () => {
      const data = await getAll("/tableData");
      const boxData = await getAll("/boxes");
      const lanData = await getAll("/lans");
      setTableData(data);
      setBoxes(boxData);
      setLans(lanData);
    })();
  }, []);
  const getBoxName = (boxId) => {
    const box = boxes.find((b) => (b.id = boxId));
    return box ? box.name : "Unknown";
  };
  const getLanName = (lanId) => {
    const lan = lans.find((l) => l.id === lanId);
    return lan ? lan.name : "Unknown";
  };
  const toggleStatus = (id) => {
    setTableData(
      tableData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  const handleDelete = (id) => {
    (async () => {
      const res = await removeById("/tableData", id);
      if (res) {
        const data = await getAll("/tableData");
        setTableData(data);
      }
    })();
  };
  return (
    <div className='dashboard-container'>
      <header>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => nav("/")}
          className='icon-left'
        />
        <span>Dashboard Statistics</span>
      </header>
      <div className='action-buttons'>
        <button className='create-btn'>+ Create Proxy</button>
        <div>
          <select>
            <option value=''>Box 1</option>
            <option value=''>Box 2</option>
          </select>
          <select>
            <option value=''>Lan 1</option>
            <option value=''>Lan 2</option>
          </select>
          <input type='text' placeholder='Search....' />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Box</th>
            <th>LAN</th>
            <th>Local IP</th>
            <th>Public IP</th>
            <th>Proxy Port</th>
            <th>Last Reset</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{getBoxName(item.id)}</td>
              <td>{getLanName(item.id)}</td>
              <td>{item.localIP}</td>
              <td>{item.publicIP}</td>
              <td>{item.proxyPort}</td>
              <td>{item.lastReset}</td>
              <td className='toggle-switch'>
                <FontAwesomeIcon
                  onClick={() => toggleStatus(item.id)}
                  icon={item.status === true ? faToggleOn : faToggleOff}
                  color={item.status == true ? "blue" : "gray"}
                  size='2x'
                />
              </td>
              <td className='icons-btn'>
                <button className='icon-btn config'>
                  <FontAwesomeIcon icon={faGear} /> Config
                </button>
                <div className='icons-edit-config'>
                  <button className='icon-btn edit'>
                    <FontAwesomeIcon icon={faPen} /> Edit
                  </button>
                  <button
                    className='icon-btn delete'
                    onClick={() => handleDelete(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </div>
              </td>
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

export default DashboardStatistics;
