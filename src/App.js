import Footer from 'components/Footer/Footer'
import NavBar from 'components/NavBar/NavBar'
import Frontpage from 'pages/Frontpage/Frontpage'
import Introduction from 'pages/Introduction/Introduction'
import Schedule from 'pages/Schedule/Schedule'
import Gallery from 'pages/Gallery/Gallery'
import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlternateNavBar from 'components/AlternateNavBar/AlternateNavBar'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/schedule">
          <AlternateNavBar />
          <Schedule />
        </Route>
        <Route path="/gallery">
          <AlternateNavBar />
          <Gallery />
        </Route>
        <Route path="/">
          <AlternateNavBar />

          <Introduction />
          <Frontpage />
        </Route>
      </Switch>

      <Footer />
    </BrowserRouter>
  )
}

export default App
