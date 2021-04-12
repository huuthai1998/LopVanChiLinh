import React from 'react'
import './Tiles.css'
import phuongphap from '../../resources/female-teacher.svg'
import teacher from '../../resources/43386.png'
import achievement from '../../resources/achievement.png'

const Tiles = () => {
  return (
    <div className="relative w-full">
      <div className="features-wraps flex-col md:flex-row flex w-full justify-between md:absolute">
        <div className="mx-auto md:mx-0 feature-item green rounded-full text-center my-4 md:my-0 h-72 w-72 md:h-64 lg:h-72 2xl:h-80 md:w-64 lg:w-72 2xl:w-80">
          <div className="flex justify-center">
            <img
              src={teacher}
              alt=""
              className="h-16 w-16 xl:h-20 xl:w-20 sm:mb-4"
            />
          </div>
          <p className="features-header font-bold text-md lg:text-lg text-center">
            Giáo viên tận tâm với nghề
          </p>
          <p className="p-content text-sm lg:text-md my-2">
            Tăng tiết học miễn phí luyện thi. Tận tình giải đáp các thắc mắc của
            học sinh 24/7
          </p>
        </div>
        <div className="mx-auto md:mx-0 feature-item orange rounded-full text-center my-4 md:my-0 h-72 w-72 md:h-64 lg:h-72 2xl:h-80 md:w-64 lg:w-72 2xl:w-80">
          <div className="flex justify-center">
            <img
              src={phuongphap}
              alt=""
              className="h-16 w-16 xl:h-20 xl:w-20 sm:mb-4"
            />
          </div>
          <p className="features-header font-bold text-md lg:text-lg text-center">
            Phương pháp giảng dạy chuyên nghiệp
          </p>
          <p className="p-content text-sm lg:text-md my-2">
            Phương pháp giảng dạy theo mô hình dự án mới nhất của bộ giáo dục
          </p>
        </div>
        <div className="mx-auto md:mx-0 feature-item red rounded-full text-center my-4 md:my-0 h-72 w-72 md:h-64 lg:h-72 2xl:h-80 md:w-64 lg:w-72 2xl:w-80">
          <div className="flex justify-center">
            <img
              src={achievement}
              alt=""
              className="h-16 w-16 xl:h-20 xl:w-20 sm:mb-4"
            />
          </div>
          <p className="features-header font-bold text-md lg:text-lg text-center">
            100% tỉ lệ tốt nghiệp
          </p>
          <p className="p-content text-sm lg:text-md my-2">
            Học sinh đỗ vào các trường danh tiếng của thành phố như: Nguyễn
            Thượng Hiền, Đại học sự phạm,...
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tiles
