import React from 'react'
import linh from '../../resources/linh.jpg'
import cv from '../../resources/cv.jpeg'
import './Teacher.css'

const Teacher = () => {
  return (
    <div className={`pt-10 md:pt-56`}>
      <div className="reviews-second md:grid flex flex-col-reverse">
        <div className="pt-4 md:pt-0 align-middle text-center md:text-left flex flex-col justify-center">
          <ul>
            <div className="text-xl mb-2">
              <i className="fas fa-user-graduate mr-5 align-middle"></i>
              Tốt nghiệp song ngành Đại học sư phạm
            </div>
            <div className="text-xl mb-2">
              <i className="fas fa-trophy mr-5 align-middle"></i>
              Học sinh giỏi Văn cấp thành phố (2012, 2016)
            </div>
            <div className="text-xl mb-2">
              <i className="fas fa-chalkboard-teacher mr-5 align-middle"></i>
              Kinh nghiệm 5 năm giảng dạy
            </div>
          </ul>
          <h1 className="author font-bold text-2xl mt-4">
            Nguyễn Ngọc Phương Linh
          </h1>
          <h1 className="role text-2xl">Cô giáo lớp văn chị Linh</h1>
          <div className="resumeWrapper mx-auto md:mx-0 mt-5">
            <a href={cv} target="_blank" rel="noopener noreferrer">
              <button className="resume-button p-3 rounded-lg outline-none">
                Sơ yếu lý lịch
              </button>
            </a>
          </div>
        </div>
        <img
          src={linh}
          alt="teacher's picture"
          className="rounded-full max-w-full"
        />
      </div>
    </div>
  )
}

export default Teacher
