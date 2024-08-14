import React from 'react'
import { Link } from 'react-router-dom'

const SideBarMenu = () => {
  return (
     
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-3 d-md-block sidebar collapse"
      >
        <div className="position-sticky py-4 px-3 sidebar-sticky">
          <ul className="nav flex-column h-100">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                <i className="bi-house-fill me-2" />
                Tổng quan
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="wallet.html">
                <i className="bi-house-fill me-2" />
                Ví của Tôi
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="profile.html">
                <i className="bi-house-fill me-2" />
                Hồ sơ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="setting.html">
                <i className="bi-house-fill me-2" />
                Cài đặt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="help-center.html">
                <i className="bi-house-fill me-2" />
                Trung tâm Trợ giúp
              </Link>
            </li>
            <li className="nav-item border-top mt-auto pt-2">
              <Link className="nav-link" to="#">
                <i className="bi-box-arrow-left me-2" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default SideBarMenu
