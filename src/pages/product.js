import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Modal, Navbar, Table, nav } from "react-bootstrap";
import TopNavBar from "../utils/topNavBar";
import SideBar from "../utils/sideBar";

function Product() {
  const [Product, setProduct] = useState([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);

  return (
    <div>
      <TopNavBar />
      <div className="d-flex ">
        <SideBar selected={"product"} />
        <div className="col-10 bg-white ">
          <div className="d-flex align-items-center justify-content-between m-2">
            <div className="d-flex">
              <i className="bi bi-box-seam"></i>
              <h4 className="fw-bold ms-4 m-0">Product</h4>
            </div>
            <div className="position-relative mx-4 col-6">
              <input className="form-control"></input>
              <div className="position-absolute" style={{ left: 10, top: 8 }}>
                <i class="bi bi-search"></i>
              </div>
            </div>
            <Link
              to={"/addproduct"}
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
                  <th>Pack Size</th>
                  <th>Category</th>
                  <th>MRP</th>
                  <th>Image</th>
                  <th colSpan={2}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>Amul</td>
                  <td>500 ml</td>
                  <td>Milk</td>
                  <td>Rs 27</td>
                  <td>
                    <img
                      src="logo.jpg"
                      className="img-fluid me-3"
                      width={"50"}
                    />
                  </td>
                  <td className="text-success">Active</td>
                  <td>
                    <i className="bi bi-pencil-square me-2 opacity-50"></i>
                    <i
                      className="bi bi-trash3 opacity-50"
                      onClick={() => setConfirmationPopUp(true)}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Amul</td>
                  <td>500 ml</td>
                  <td>Milk</td>
                  <td>Rs 27</td>
                  <td>
                    <img
                      src="logo.jpg"
                      className="img-fluid me-3"
                      width={"50"}
                    />
                  </td>
                  <td className="text-success">Active</td>
                  <td>
                    <i className="bi bi-pencil-square me-2 opacity-50"></i>
                    <i
                      className="bi bi-trash3 opacity-50"
                      onClick={() => setConfirmationPopUp(true)}
                    ></i>
                  </td>
                </tr>
                <tr>
                  <td>125</td>
                  <td>Amul</td>
                  <td>500 ml</td>
                  <td>Milk</td>
                  <td>Rs 27</td>
                  <td>
                    <img
                      src="logo.jpg"
                      className="img-fluid me-3"
                      width={"50"}
                    />
                  </td>
                  <td className="text-success">Active</td>
                  <td>
                    <i className="bi bi-pencil-square me-2 opacity-50"></i>
                    <i
                      className="bi bi-trash3 opacity-50"
                      onClick={() => setConfirmationPopUp(true)}
                    ></i>
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

export default Product;
