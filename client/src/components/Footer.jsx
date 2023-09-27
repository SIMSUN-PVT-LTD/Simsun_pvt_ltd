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
        <div className="phone flex">
          <a href="#" className='flex ml-7'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>

          +007 9089 6767</a>
        </div>
        <div className="email">
          <a href="#" className='flex ml-7 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
            <span className='pl-2'>
            simsunelectricwork@gmail.com
            </span>
          </a>
        </div>
        <div className="address">
          <a href="#" className='ml-7'>


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
