import React from "react";
import profile from './../assets/profile.jpg'
import './CSS/Container.css'
import { Link } from "react-router-dom";

function Sidebar() {
  return <>
      <section className="sidebar">
       
        <div className="name-card">
        <div className="profile">
            <img src={profile} alt="" style={{width:'100px', borderRadius:'50%', objectFit:'cover',boxShadow:'0px 0px 10px 0 '}} />
        </div>
            <h2>
                Padmanaban M
            </h2>
            
            <h4>Software Developer</h4>
            <h6>Javascript, React.js, Node.js, GitHub, MongoDb, MySql</h6>
           
        </div>
        <nav className="navigation">
        <ul>
          <li>
            <div className="about">
              <Link to='/About' style={{textDecoration:'none'}}><p>About</p></Link>
            </div>
          </li>
          <li>
            <div className="contact">
              <Link to='/Contact' style={{textDecoration:'none'}}><p>Contact</p></Link>
            </div>
          </li>
        </ul>
        </nav>
        <div className="bottom">
          <div className="social-links">
          <a href="https://linkedin.com/in/padmanaban2002" target="_blank" className="alink"><i class="fa-brands fa-linkedin"></i></a>
           <a href="https://github.com/Pad-coder" target="_blank" className="alink"> <i class="fa-brands fa-github"></i></a>
           <a href="https://www.instagram.com/pad_coder/?utm_source=qr&igsh=N2EwYmJveTZ2NXZh" target="_blank" className="alink"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com/pad_coder" target="_blank" className="alink"><i class="fa-brands fa-x-twitter"></i> </a>
            </div>
        </div>
      </section>
      
    </>
}

export default Sidebar;
