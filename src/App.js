import React from 'react'

import ConfigurationContext from './context/ConfigurationContext'
import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

const App = () => {
  const [showContent, setShowContent] = React.useState(true)
  const [showLeftNavbar, setShowLeftNavbar] = React.useState(true)
  const [showRightNavbar, setShowRightNavbar] = React.useState(true)

  const onToggleShowContent = () => {
    setShowContent(!showContent)
  }
  const onToggleShowLeftNavbar = () => {
    setShowLeftNavbar(!showLeftNavbar)
  }
  const onToggleShowRightNavbar = () => {
    setShowRightNavbar(!showRightNavbar)
  }

  return (
    <ConfigurationContext.Provider
      value={{
        onToggleShowRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowContent,
        showRightNavbar,
        showLeftNavbar,
        showContent,
      }}
    >
      <ConfigurationController />
      <Layout />
    </ConfigurationContext.Provider>
  )
}

export default App
