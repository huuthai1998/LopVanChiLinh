import React from 'react'
import { Link } from 'react-router-dom'

const DropDownNavBar = () => {
  return (
    <div className="sticky border-t dropdownNav px-10 sm:px-10 md:px-24 lg:px-32 2xl:px-96">
      <div className="py-5">
        <Link to="/" className="text-white navButton text-xl font-bold">
          Về chúng tôi
        </Link>
        <br></br>
      </div>
      <div className="py-5">
        <Link to="/schedule" className="text-white navButton text-xl font-bold">
          Lịch / Học phí
        </Link>
        <br></br>
      </div>
      <div className="py-5">
        <Link to="/gallery" className="text-white navButton text-xl font-bold">
          Hình ảnh
        </Link>
      </div>
    </div>
  )
}

export default DropDownNavBar
