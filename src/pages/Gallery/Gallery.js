import React, { useEffect, useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [popup, setPopup] = useState(false)
  const [popupUrl, setPopupUrl] = useState(false)
  const [images, setImages] = useState([
    'https://live.staticflickr.com/65535/51302083813_1f6f01bc2d_k.jpg',
    'https://live.staticflickr.com/65535/51302611964_df3948aebc_b.jpg',
    'https://live.staticflickr.com/65535/51302613249_6aa1e9fbef_b.jpg',
    'https://live.staticflickr.com/65535/51302081308_ef9ee37200_h.jpg',
  ])
  const [images1, setImages1] = useState([
    'https://live.staticflickr.com/65535/51301147657_e45b212ed6_o.jpg',
    'https://live.staticflickr.com/65535/51302612004_3507b8ebc6_k.jpg',
    'https://live.staticflickr.com/65535/51302613209_f336430525_h.jpg',
    'https://live.staticflickr.com/65535/51302081288_fc853c3787_b.jpg',
  ])
  const [images2, setImages2] = useState([
    'https://live.staticflickr.com/65535/51302083488_d15f1ceb26_k.jpg',
    'https://live.staticflickr.com/65535/51301893906_48dc61ee9f_b.jpg',
    'https://live.staticflickr.com/65535/51302909250_ea2b510b57_b.jpg',
    'https://live.staticflickr.com/65535/51302085668_283f992cd6_h.jpg',
  ])
  const [images3, setImages3] = useState([
    'https://live.staticflickr.com/65535/51302911720_a917dd3cdc_k.jpg',
    'https://live.staticflickr.com/65535/51301148297_b81d414a2e_b.jpg',
    'https://live.staticflickr.com/65535/51302085663_3a39393bd1_h.jpg',
    'https://live.staticflickr.com/65535/51302081323_5b8cdf6b0c_k.jpg',
  ])

  // useEffect(() => {
  //   if (popup) document.body.style.overflowY = 'hidden'
  //   else document.body.style.overflowY = 'auto'
  // }, [popup])

  const popupHandler = (url) => (e) => {
    setPopup(true)
    setPopupUrl(url)
  }

  const closePopup = () => {
    setPopup(false)
  }

  const imageRender = images.map((url, id) => {
    return (
      <div className="mb-3 relative">
        <img
          key={id}
          src={url}
          alt=""
          className="cursor-pointer"
          onClick={popupHandler(url)}
        />
      </div>
    )
  })

  const imageRender1 = images1.map((url, id) => {
    return (
      <img
        key={id}
        src={url}
        alt=""
        className="mb-3 cursor-pointer"
        onClick={popupHandler(url)}
      />
    )
  })
  const imageRender2 = images2.map((url, id) => {
    return (
      <img
        key={id}
        src={url}
        alt=""
        className="mb-3 cursor-pointer"
        onClick={popupHandler(url)}
      />
    )
  })
  const imageRender3 = images3.map((url, id) => {
    return (
      <img
        key={id}
        src={url}
        alt=""
        className="mb-3 cursor-pointer"
        onClick={popupHandler(url)}
      />
    )
  })
  return (
    <div className="`min-h-screen pb-10 bg-gray-200 block pt-20 sm:px-10 md:px-24 lg:px-32 2xl:px-96">
      <div className="Gallery py-10">
        <h1 className="text-center font-bold text-2xl pb-5 uppercase header">
          {' '}
          Hình Ảnh
        </h1>
      </div>
      <div className="flex-wrap flex">
        <div className="column pr-3 w-1/4">{imageRender} </div>
        <div className="column pr-3 w-1/4">{imageRender1} </div>
        <div className="column pr-3 w-1/4">{imageRender2} </div>
        <div className="column pr-3 w-1/4">{imageRender3} </div>
      </div>
      {popup && (
        <div className="">
          <div className="popup fixed z-50 mx-auto text-right">
            <button
              className="close w-12 mb-4 bg-gray-400"
              onClick={closePopup}
            >
              X
            </button>

            <div className="imgPopupWrapper max-h-90 pb-4">
              <img src={popupUrl} alt="" className="popupImg" />
            </div>
          </div>
          <div
            className="block overflow-hidden fixed opacity-75 bg-black z-20 min-h-screen w-screen top-0 left-0 blank-dropdown"
            onClick={closePopup}
          ></div>
        </div>
      )}
    </div>
  )
}

export default Gallery
