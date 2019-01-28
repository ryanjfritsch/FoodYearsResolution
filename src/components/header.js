import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.css';
import circleLogo from "../images/circleLogoSM.png";
// import circleTextLogo from "../images/circleTextLogoSM.png";


const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="headerTextItems">
      <Link to="/" 
        style={{ textDecoration: 'none' }}
        activeStyle={{ cursor: 'default' }}>
        {/* <span id="FYRlogo">R+D</span> */}
        <img src={circleLogo} id="fyrLogo" alt="" />
        <span id="fyrText">Kitchen</span>
      </Link>
      <div className="subHeaderText" id="rightHeaderText">
          <Link to="all-meals"
            className="headerNav"
            activeClassName="headerNav"
            activeStyle={{ color: '#E8E8EB', cursor: 'default' }}
            >All Meals</Link>
          <span className="headerNav">Calendar</span>
          <span className="headerNav navLast">About</span>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
