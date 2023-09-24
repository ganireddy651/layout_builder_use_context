import React from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => {
  const {
    onToggleShowRightNavbar,
    onToggleShowLeftNavbar,
    onToggleShowContent,
    showRightNavbar,
    showLeftNavbar,
    showContent,
  } = React.useContext(ConfigurationContext)

  const onContent = () => {
    onToggleShowContent()
  }
  const onLeftNavbar = () => {
    onToggleShowLeftNavbar()
  }
  const onRightNavbar = () => {
    onToggleShowRightNavbar()
  }

  return (
    <div className="top-section-container">
      <h1 className="layout-heading">Layout</h1>
      <div className="controllers-container">
        <div className="content-checkbox-container">
          <input
            checked={showContent}
            onClick={onContent}
            id="content"
            type="checkbox"
          />
          <label htmlFor="content">Content</label>
        </div>
        <div className="left-checkbox-container">
          <input
            checked={showLeftNavbar}
            onClick={onLeftNavbar}
            id="leftNavbar"
            type="checkbox"
          />
          <label htmlFor="leftNavbar">Left Navbar</label>
        </div>
        <div className="right-checkbox-container">
          <input
            checked={showRightNavbar}
            onClick={onRightNavbar}
            id="rightNavbar"
            type="checkbox"
          />
          <label htmlFor="rightNavbar">Right Navbar</label>
        </div>
      </div>
    </div>
  )
}
export default ConfigurationController
