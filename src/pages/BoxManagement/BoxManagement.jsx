import {
  faEdit,
  faGear,
  faPlus,
  faToggleOn,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./BoxManagement.css";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons/faToggleOff";
import { getAll } from "../../service";
import { Link, Outlet } from "react-router-dom";
const BoxManagement = () => {
  const [boxes, setBoxes] = useState([]);

  const toggleStatus = (id) => {
    setBoxes(
      boxes.map((box) =>
        box.id === id ? { ...box, status: !box.status } : box
      )
    );
  };
  // use effect
  useEffect(() => {
    (async () => {
      const data = await getAll("/boxes");
      setBoxes(data);
    })();
  }, []);
  const handleDelete = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div className='box'>
      <div className='box-container'>
        <header>Box Management</header>
        <div className='box-body'>
          <Link to={"/box/add"} className='add-box'>
            <FontAwesomeIcon icon={faPlus} /> Add Box
          </Link>
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
              {boxes.map((box) => (
                <tr key={box.id}>
                  <td>{box.id}</td>
                  <td>{box.name}</td>
                  <td>
                    <span
                      className='toggle'
                      onClick={() => toggleStatus(box.id)}
                    >
                      <FontAwesomeIcon
                        icon={box.status ? faToggleOn : faToggleOff}
                        color={box.status ? "blue" : "gray"}
                        size='2x'
                      />
                    </span>
                  </td>
                  <td className='box-btn'>
                    <button className='action config'>
                      <FontAwesomeIcon icon={faGear} /> Config
                    </button>
                    <Link to={`/box/edit/${box.id}`} className='action edit'>
                      <FontAwesomeIcon icon={faEdit} /> Edit
                    </Link>
                    <button
                      className='action delete'
                      onClick={() => handleDelete(box.id)}
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

export default BoxManagement;
