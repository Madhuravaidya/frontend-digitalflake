import React, { useState, useEffect } from "react";
import { useHref, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Modal, Navbar, Table, nav } from "react-bootstrap";
import TopNavBar from "../utils/topNavBar";
import SideBar from "../utils/sideBar";

function Category() {
  const [category, setcategory] = useState([]);
  const [confirmationPopUp,setConfirmationPopUp] = useState(false);

  return (
    <div>
      <TopNavBar />
      <div className="d-flex ">
        <SideBar selected={"category"} />
        <div className="col-10 bg-white ">
          <div className="d-flex align-items-center justify-content-between m-2">
            <div className="d-flex">
              <i className="bi bi-box-seam"></i>
              <h4 className="fw-bold ms-4 m-0">Category</h4>
            </div>
            <div className="position-relative mx-4 col-6">
              <input className="form-control"></input>
              <div className="position-absolute" style={{ left: 10, top: 8 }}>
                <i class="bi bi-search"></i>
              </div>
            </div>
            <Link
              to={"/addcategory"}
              className="card py-2 px-4 mx-3 shadow text-white"
              style={{ background: "#662671" }}
            >
              Add New
            </Link>
          </div>

          <div className="m-4">
            <Table>
              <thead>
                <tr className="table-header">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th colSpan={2}>Status</th>
                </tr>
              </thead>
              <tbody>
             {/* 
************************Here is data mapping for dynamic data********************************* 
              {   json.map((item,index)=>(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td className="text-success">{item.status}</td>
                  <td>
                    <i className="bi bi-pencil-square me-2 opacity-50"></i>
                    <i className="bi bi-trash3 opacity-50"></i>
                  </td>
                </tr>
                ))}
**********************************************************************************************/}
                <tr>
                  <td>123</td>
                  <td>Milk</td>
                  <td>It is a sample dummy text.</td>
                  <td className="text-success">Active</td>
                  <td>
                    <i className="bi bi-pencil-square me-2 opacity-50"></i>
                    <i className="bi bi-trash3 opacity-50" onClick={()=>setConfirmationPopUp(true)}></i>
                  </td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Fruits</td>
                  <td>It is a sample dummy text.</td>
                  <td className="text-success">Active</td>
                  <td>
                    <i className="bi bi-pencil-square me-2 opacity-50"></i>
                    <i className="bi bi-trash3 opacity-50" onClick={()=>setConfirmationPopUp(true)}></i>
                  </td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Vegitables</td>
                  <td>It is a sample dummy text.</td>
                  <td className="text-danger">Inactive</td>
                  <td>
                    <i className="bi bi-pencil-square me-2 opacity-50"></i>
                    <i className="bi bi-trash3 opacity-50" onClick={()=>setConfirmationPopUp(true)}></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Modal
        show={confirmationPopUp}
        onHide={() => setConfirmationPopUp(false)}
      >
        <Modal.Body>
          <p className="text-center fs-3 mt-4">
            <i class="bi bi-exclamation-triangle-fill text-danger"></i>Delete
          </p>
          <p className="text-center fs-6">Are you sure you want to delete ?</p>

          <div className="d-flex justify-content-center">
            <button
              className="btn card mt-3 me-3"
              onClick={() => setConfirmationPopUp(false)}
            >
              Cancel
            </button>

            <button
              className="btn text-white mt-3"
              style={{ backgroundColor: "#662671" }}
              onClick={() => setConfirmationPopUp(false)}
            >
              Confirm
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Category;
