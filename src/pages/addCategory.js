import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Navbar, Table, nav } from "react-bootstrap";
import TopNavBar from "../utils/topNavBar";
import SideBar from "../utils/sideBar";

function AddCategory() {
  const [category, setcategory] = useState([]);
  const [description, setDescription] = useState([]);
  const [status, setStatus] = useState([]);
  const history = useNavigate();

  return (
    <div>
      <TopNavBar />
      <div className="d-flex ">
        <SideBar selected={"category"} />
        <div className="col-10 bg-white d-flex flex-column justify-content-between pb-3 ">
          <div>
            <div className="d-flex align-items-center justify-content-between m-2">
              <div className="d-flex align-items-center">
                <i
                  class="bi bi-arrow-left ms-3 opacity-50"
                  onClick={() => history(-1)}
                ></i>
                <h4 className="fw-bold ms-4 m-0">Add Category</h4>
              </div>
            </div>

            <div className="d-flex justify-content-between m-5">
              <div>
                <input
                  className="form-control mt-2"
                  type="text"
                  placeholder="Category Name"
                  value={setcategory}
                />
              </div>
              <div>
                <input
                  className="form-control mt-2"
                  type="text"
                  placeholder="Description"
                  value={setDescription}
                />
              </div>
              <div>
                <input
                  className="form-control mt-2"
                  type="text"
                  placeholder="Status"
                  value={setStatus}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <div className="card py-1 px-2 me-3">Cancel</div>
            <div
              className="card py-1 px-2 me-3 text-white"
              style={{ background: "#662671" }}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
