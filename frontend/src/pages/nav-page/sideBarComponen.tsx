import React from "react";
import {Link} from 'react-router-dom';
import './sideBarComponent.css'

const SideBarComponent = () => {
return(
  <div className="parent-container">
    <div className="child-wrapper">
      <div className="left-rail">
        <div className="left-rail-content">
          <h3 className="left-rail-title">Categories</h3>
          <ul className="category-list">
            <Link to='/life-quotes'><li>Life</li></Link>
            <Link to='/motivational-quotes'><li>Motivation</li></Link>
            <Link to='/inspiration-quotes'><li>Inspiration</li></Link>
            <Link to='/love-quotes'><li>Love</li></Link>
            <Link to='/positive-quotes'><li>Positive</li></Link>
            <Link to='/friendship-quotes'><li>Friendship</li></Link>
        </ul>
        </div>
      </div>
      {/* <div className="body-ocntent">
        <span className="carousel-left"></span>
        <div className="quotes-display">
        </div>
        <span className="carousel-right"></span>
      </div> */}
    </div>
  </div>
)
}

export default SideBarComponent;