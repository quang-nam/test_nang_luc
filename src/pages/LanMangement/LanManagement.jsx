import {
  faArrowLeft,
  faEdit,
  faGear,
  faPlus,
  faToggleOn,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./LanManagement.css";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons/faToggleOff";
import { getAll } from "../../service";
import { useNavigate } from "react-router-dom";
const LanManagement = () => {
  const [lans, setLans] = useState([]);
  const nav = useNavigate();
  const toggleStatus = (id) => {
    setLans(
      lans.map((lan) => (lan.id === id ? { ...lan, status: !lan.status } : lan))
    );
  };
  // use effect
  useEffect(() => {
    (async () => {
      const data = await getAll("/lans");
      setLans(data);
    })();
  }, []);
  const handleDelete = (id) => {
    setLans(lans.filter((lan) => lan.id !== id));
  };

  return (
    <div className='box'>
      <div className='box-container'>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => nav("/")}
          className='icon-left'
        />
        <header>LAN Management</header>
        <div className='box-body'>
          <button className='add-box'>
            <FontAwesomeIcon icon={faPlus} /> Add Box
          </button>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {lans.map((lan) => (
                <tr key={lan.id}>
                  <td>{lan.id}</td>
                  <td>{lan.name}</td>
                  <td>
                    <span
                      className='toggle'
                      onClick={() => toggleStatus(lan.id)}
                    >
                      <FontAwesomeIcon
                        icon={lan.status ? faToggleOn : faToggleOff}
                        color={lan.status ? "blue" : "gray"}
                        size='2x'
                      />
                    </span>
                  </td>
                  <td className='box-btn'>
                    <button className='action config'>
                      <FontAwesomeIcon icon={faGear} /> Config
                    </button>
                    <button className='action edit'>
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </button>
                    <button
                      className='action delete'
                      onClick={() => handleDelete(lan.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LanManagement;
