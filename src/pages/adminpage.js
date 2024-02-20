import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Modal, Nav, Navbar, nav } from "react-bootstrap";
import Nextpage from "./next-page";
import TopNavBar from "../utils/topNavBar";
import SideBar from "../utils/sideBar";

function AdminPage() {
  const [adminpage, setadminpage] = useState([]);
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const history = useNavigate();
  const handlesubmit = () => {
    window.open("/category");
  };
  const onsubmit = () => {
    window.open("/product");
  };
  const Nextpage = () => {
    window.open("/next-page.js");
  };

  return (
    <div>
      <TopNavBar />
      <div className="d-flex ">
        <SideBar selected={'home'}/>
        <div className="col-10 bg-white ">
          <div className="d-flex justify-content-end">
            <div className="card shadow border-danger text-danger p-1 m-2 ps-4 pe-4 "  onClick={() => setConfirmationPopUp(true)}>
              Log Out
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center h-75">
            <img src="logo.jpg" className="img-fluid" style={{width:50, height:50}} />
            <p className="mt-2 fs-1">
              <b>digital</b>flake
            </p>
            <p className="fs-4">Welcome to Digitalflake Admin</p>
          </div>
        </div>
      </div>
      <Modal
        show={confirmationPopUp}
        onHide={() => setConfirmationPopUp(false)}
      >
        <Modal.Body>
          <p className="text-center fs-3 mt-4">
            <i class="bi bi-exclamation-triangle-fill text-danger"></i>Log Out
          </p>
          <p className="text-center fs-6">Are you sure you want to Logout ?</p>

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
              onClick={() => history("/")}
            >
              Confirm
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AdminPage;
