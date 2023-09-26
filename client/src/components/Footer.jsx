import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className=''>
  <div className="content ">
    <div className="left box">
      <div className="upper">
        <div className="topic1">About Us</div>
        <div><a href="#">Our Company</a></div>
        <div><a href="#">Our Team</a></div>
        <div><a href="#">Our Success Story</a></div>
        <div><a href="#">News</a></div>
      </div>
      <div className="lower">
        <div className="topic">Contact us</div>
        <div className="phone">
          <a href="#"><i className="fas fa-phone-volume" />+007 9089 6767</a>
        </div>
        <div className="email">
          <a href="#"><i className="fas fa-envelope" />simsunelectricwork@gmail.com</a>
        </div>
        <div className="address">
          <a href="#"><i className="fa fa-map-marker" />
            Flat No. T-1, 104, 1st Floor, Tower-1 
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Plot No. GH 01/A, Sector 16C,
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Exotica Dreamville, Greater Noida,
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  U.P. 201203 </a>
        </div>
        <br />
      </div>
    </div>
    <div className="middle box">
      <div className="topic">Services</div>
      <div><a href="#">New Installation Services</a></div>
      <div><a href="#">Annual Maintenance Services</a></div>
      <div><a href="#">Breakdown Services</a></div>
    </div>
    <div className="middle box">
      <div className="topic">Product</div>
      <div><a href="#">Lift</a></div>
      <div><a href="#">Escalator</a></div>
      <div><a href="#">Lift Spare Parts</a></div>
      <div><a href="#">Escalator Spare Parts</a></div>
    </div>
    <div className="middle box">
      <div className="topic">Customer Services</div>
      <div><a href="#">Your Orders</a></div>
      <div><a href="#">Returns &amp; Refunds</a></div>
      <div><a href="#">Manage Addresses</a></div>
      <div><a href="#">Payment Settings</a></div>
      <div><a href="#">Account Settings</a></div>
    </div>
    <div className="right box">
      <div className="topic">Subscribe us</div>
      <form action="#">
        <input type="text" placeholder="Enter email address" />
        <input type="submit" name defaultValue="Send" />
        <div className="media-icons">
          <a href="#"><i className="fab fa-facebook-f" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-linkedin-in" /></a>
        </div>
      </form>
    </div>
  </div>
  <div className="bottom">
    <p>Copyright © 2023 <a href="#">Teksila</a> All rights reserved</p>
  </div>
</footer>

    </>
  )
}

export default Footer
