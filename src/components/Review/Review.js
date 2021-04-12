import React from 'react'
import './Review.css'
import phuonganh from '../../resources/phuonganh.png'
import tram from '../../resources/tram.png'
const Review = () => {
  return (
    <div className="py-20">
      <div className="uppercase pb-20 header text-center font-bold text-3xl">
        Phản hồi học sinh
      </div>
      <div className="reviews-wrapper">
        <div className="mb-0 md:mb-20 reviews-first flex flex-col text-center md:text-left justify-center md:grid">
          <div className="mx-auto my-4 md:my-0 md:mx-0">
            <img
              src={tram}
              alt="student's picture"
              className="h-72 w-72 rounded-full max-w-full"
            />
          </div>

          <div className="align-middle flex flex-col justify-center">
            <p className="quote italic text-2xl pb-5">
              "Trúc xinh trúc mọc đầu đình <br></br> Học văn đã có chị Linh cho
              rồi <br></br>
              Chúc tất cả các bạn học sinh của chị Linh sẽ thi Văn đạt điểm thật
              tốt và chúc tất cả mọi người bước vào kì thi học kì thật suôn sẻ
              luôn nha."
            </p>
            <h1 className="author font-bold text-2xl ">Ngọc Trâm</h1>
            <h1 className="role text-2xl">Học sinh lớp 12</h1>
          </div>
        </div>
        <div className="reviews-second flex text-center md:text-left flex-col-reverse justify-center md:grid">
          <div className="align-middle flex flex-col justify-center">
            <p className="quote italic text-2xl pb-5">
              "Yêu là phải nói cũng như đói là phải ăn. <br></br> Còn ai muốn
              giỏi Văn thì alo cho chị Linh nhá.
              <br></br> Mình đã sẵn sáng để bước vào kì thi học kì môn Văn dễ
              như ăn kẹo. Chúc các bạn thi thiệt xịn xò như đề cương của chị
              Linh."
            </p>
            <h1 className="author font-bold text-2xl">Phương Anh</h1>
            <h1 className="role text-2xl">Học sinh lớp 12</h1>
          </div>
          <div className="imgReviewWrapper flex justify-end">
            <div className="mx-auto my-4 md:my-0 md:mx-0">
              <img
                src={phuonganh}
                alt="student's picture"
                className="h-72 w-72 rounded-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
