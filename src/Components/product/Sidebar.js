/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <div className="container-fluid py-5 my-5 mt-0">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-3">
              <nav className="nav-side-menu">
                <div className="brand mt-2">FAALİYETLERİMİZ</div>
                <div className="menu-list">
                  <ul  className="menu-content p-2">
                    <li>
                      <Link as={Link} to="/Armur">
                        <i className="fa fa-fw fa-arrow-right fa-lg"></i>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-fw fa-calendar-o fa-lg"></i>Events
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-fw fa-user fa-lg"></i>Profile
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-fw fa-users fa-lg"></i>People
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-fw fa-cog fa-lg"></i>System
                      </a>
                    </li>
                    <div className="brand mb-4"></div>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
