import React from 'react'
import backgroundImg from '../../resources/main.png'
import './Introduction.css'

const Introduction = () => {
  return (
    <div className={`md:min-h-screen bg-white block`}>
      <main className="">
        <img
          src={backgroundImg}
          alt="background"
          className="backgroundImage md:h-screen w-screen"
        />
        <div className="intro absolute ml-10 sm:ml-10 md:ml-24 lg:ml-32 2xl:ml-96">
          <h1 className="text-white xl:text-5xl md:text-2xl text-lg uppercase">
            Chào mừng các bạn đến với
            <p className="vcl">Lớp Văn Chị Linh</p>
          </h1>
          <p className="md:pt-10 pt-2 xl:text-2xl md:text-xl text-md text-white">
            Lớp học Văn - lớp 7, 8, 9, 10, 11, 12 <br></br>( Đặc biệt, luyện thi
            học sinh giỏi, tuyển sinh lớp 9 và đại học )
          </p>
        </div>
      </main>
    </div>
  )
}

export default Introduction
