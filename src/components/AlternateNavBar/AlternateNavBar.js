import DropDownNavBar from 'components/DropDownNavBar/DropDownNavBar'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../resources/trans-logo.png'
import './AlternateNavBar.css'

const AlternateNavBar = () => {
  const hamButton = useRef(null)
  const [isDrop, setIsDrop] = useState(false)
  const toggleDrop = () => {
    setIsDrop(!isDrop)
    hamButton.current.classList.toggle('change')
  }

  useEffect(() => {
    if (isDrop) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'auto'
  }, [isDrop])

  return (
    <header className="absolute top-0 w-full">
      <div className="alternateNav z-50 absolute sm:items-center w-full ">
        <div className="pb-4 sm:pb-1 nav-bar grid items-center justify-between px-10 sm:px-10 md:px-24 lg:px-32 2xl:px-96">
          <Link to="/" className="logo-wrapper">
            <img src={logo} alt="logo" className="h-20 w-20" />
          </Link>
          <div className="blank"></div>
          <div className="flex justify-end  sm:hidden">
            <div
              className="cursor-pointer"
              ref={hamButton}
              onClick={toggleDrop}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
          <div className="hidden sm:flex justify-between">
            <Link to="/" className="navButton text-xl font-bold">
              Về chúng tôi
            </Link>
            <Link to="/schedule" className="navButton text-xl font-bold">
              Lịch / Học phí
            </Link>
            <Link to="/gallery" className="navButton text-xl font-bold">
              Hình ảnh
            </Link>
          </div>
        </div>
        {isDrop && (
          <div className="">
            <DropDownNavBar />
          </div>
        )}
      </div>
      {isDrop && (
        <div
          className="block overflow-hidden absolute opacity-75 bg-black z-10 min-h-screen w-screen top-0 left-0 blank-dropdown"
          onClick={toggleDrop}
        ></div>
      )}
    </header>
  )
}

export default AlternateNavBar
