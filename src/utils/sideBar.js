import React from "react";
import { Link } from "react-router-dom";

function SideBar(props){


    return(

        <div className="col-2 bg-light py-4" style={{ height: "91vh" }}>
          <Link to={"/adminpage"} className={`d-flex justify-content-between p-3 mt-2 text-black ${props.selected=='home' && 'side-bar'}`}>
            <div>
              <i class="bi bi-house me-2"></i>Home
            </div>
            <i className="bi bi-caret-right-fill"></i>
          </Link>
          <Link to={"/category"} className={`d-flex justify-content-between p-3 mt-2 text-black ${props.selected=='category' && 'side-bar'}`}>
            <div>
              <i class="bi bi-ui-checks-grid me-2"></i>Category
            </div>
            <i className="bi bi-caret-right-fill"></i>
          </Link>
          <Link to={"/product"} className={`d-flex justify-content-between p-3 mt-2 text-black ${props.selected=='product' && 'side-bar'}`}>
            <div>
              <i class="bi bi-box-seam-fill me-2"></i>Product
            </div>
            <i className="bi bi-caret-right-fill"></i>
          </Link>
        </div>

    )
}
export default SideBar;