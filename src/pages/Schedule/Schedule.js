import React from 'react'
import tuition from '../../resources/tuition.png'
import schedule from '../../resources/lichhoc.jpg'

const Schedule = () => {
  return (
    <div className="`min-h-screen pb-10 bg-gray-200 block pt-20 sm:px-10 md:px-24 lg:px-32 2xl:px-96">
      <div className="schedule py-10">
        <h1 className="header text-center font-bold text-2xl pb-5 uppercase">
          Thời khóa biểu
        </h1>
        <img src={schedule} alt="schedule" className="" />
      </div>
      <div className="fee">
        <h1 className="header text-center font-bold text-2xl pb-5 uppercase">
          {' '}
          Học phí{' '}
        </h1>
        <img src={tuition} alt="tuition" className="" />
      </div>
    </div>
  )
}

export default Schedule
