import React from 'react'
import './Tiles.css'
import phuongphap from '../../resources/female-teacher.svg'
import teacher from '../../resources/43386.png'
import achievement from '../../resources/achievement.png'

const Tiles = () => {
  return (
    <div className="relative w-full">
      <div className="features-wraps flex-col md:flex-row flex w-full justify-between">
        <div className="mx-auto md:mx-0 border-green-500  border text-black flex flex-col justify-center rounded-full text-center my-4 md:my-0 h-72 w-72 md:h-64 lg:h-72 2xl:h-80 md:w-64 lg:w-72 2xl:w-80">
          <h2 className="uppercase features-header font-bold text-md lg:text-lg text-center">
            Kinh nghiệm
          </h2>
          <p className="p-content text-xl text-sm lg:text-md">
            Có kinh nghiệm trong việc dạy học, ôn thi tuyển sinh, đại học, luyện
            thi học sinh giỏi
          </p>
        </div>
        <div className="mx-auto md:mx-0 border-green-500  border text-black flex flex-col justify-center rounded-full text-center my-4 md:my-0 h-72 w-72 md:h-64 lg:h-72 2xl:h-80 md:w-64 lg:w-72 2xl:w-80">
          <h2 className="uppercase features-header font-bold text-md lg:text-lg text-center">
            Hình thức
          </h2>
          <p className="p-content text-xl text-sm lg:text-md">
            Hình thức dạy học đa dạng, phục vụ tất cả nhu cầu của học sinh: Trực
            tiếp - Trực tuyến
          </p>
        </div>
        <div className="mx-auto md:mx-0 border-green-500  border text-black flex flex-col justify-center rounded-full text-center my-4 md:my-0 h-72 w-72 md:h-64 lg:h-72 2xl:h-80 md:w-64 lg:w-72 2xl:w-80">
          <h2 className="uppercase features-header font-bold text-md lg:text-lg text-center">
            Thành Tích
          </h2>
          <p className="p-content text-xl text-sm lg:text-md">
            Học sinh đạt điểm tốt, hài lòng với lớp học
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tiles
