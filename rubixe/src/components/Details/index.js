import "./index.css";
import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Details = () => {
  return (
    <div className="details">
      <div className="box1">
        <h4>ABOUT US</h4>
        <p className="details-para">
          Rubixe™ is a global technology company specializing in disruptive
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).
          Rubixe mission to enable businesses to leverage the full potential of
          disruptive technologies to stay competitive in the market.
        </p>
      </div>
      <div class="box">
        <div className="box2">
          <h4>MENUS</h4>
          <ul className="list">
            <li>
              <a href="https://rubixe.com/">Home</a>
            </li>
            <li>
              <a href="https://rubixe.com/services">Services</a>
            </li>
            <li>
              <a href="https://rubixe.com/products">Products</a>
            </li>
            <li>
              <a href="https://rubixe.com/career">Career</a>
            </li>
          </ul>
        </div>
        <div className="box3">
          <h4>LEARN MORE</h4>
          <ul className="list">
            <li>
              <a href="https://rubixe.com/about">About</a>
            </li>
            <li>
              <a href="https://rubixe.com/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="box4">
        <h4>ADDRESS</h4>
        <div>
          <p className="details-para">
            Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
            Karnataka 560068
            <br />
            Phone: 0804-717-8999
            <br />
            Email: hi@rubixe.com
          </p>
        </div>
        <h4>SOCIAL MEDIA</h4>
        <div>
          <a
            className="icon"
            href="https://www.facebook.com/Rubixe.Official/"
            target="_blank"
          >
            <AiFillFacebook />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/company/rubixe"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
