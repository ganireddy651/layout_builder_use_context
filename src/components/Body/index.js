import React from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const {showRightNavbar, showLeftNavbar, showContent} = React.useContext(
    ConfigurationContext,
  )

  return (
    <div className="body-section-container">
      {showLeftNavbar && (
        <div className="left-container">
          <h1 className="navbar-heading">Left Navbar Menu</h1>
          <ul className="left-navbar-list-container">
            <li>
              <p className="left-navbar-list-item">Item 1</p>
            </li>
            <li>
              <p className="left-navbar-list-item">Item 2</p>
            </li>
            <li>
              <p className="left-navbar-list-item">Item 3</p>
            </li>
            <li>
              <p className="left-navbar-list-item">Item 4</p>
            </li>
          </ul>
        </div>
      )}
      {showContent && (
        <div className="content-container">
          <h1 className="navbar-content-heading">Content </h1>
          <p style={{color: '#64748b'}}>
            Initially, the checkboxes for Content, Left Navbar, Right Navbar
            should be checked and all the elements in the layout should be
            displayed When the Content checkbox is unchecked, then the content
            element should not be displayed When the Left Navbar checkbox is
            unchecked, then the Left Navbar element should not be displayed When
            the Right Navbar checkbox is unchecked, then the Right Navbar
            element should not be
          </p>
        </div>
      )}
      {showRightNavbar && (
        <div className="right-container">
          <h1 className="navbar-heading">Right Navbar</h1>
          <div className="right-navbar-content-container">
            <div className="ad-container">
              <p className="ad-text">Ad 1</p>
            </div>
            <div className="ad-container">
              <p className="ad-text">Ad 2</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Body
