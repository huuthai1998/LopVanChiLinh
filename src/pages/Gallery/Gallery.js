import React, { useEffect, useState } from 'react'
import './Gallery.css'

const Gallery = () => {
  const [popup, setPopup] = useState(false)
  const [popupUrl, setPopupUrl] = useState(false)
  const [images, setImages] = useState([
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/133874685_213044197112000_1742966481659171816_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=meIBgl26w5kAX--iaDT&_nc_ht=scontent.fsgn2-1.fna&oh=179c834e5ff6c726ea7fe5ff69f35910&oe=6088B26C',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/141275764_229361345480285_2380992647868654546_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=-CwtLP_D93sAX9MVEXB&_nc_ht=scontent.fsgn2-1.fna&oh=736ab203b0a53c760e870f2f1986b8a1&oe=608924AA',
    'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/158723724_261812052235214_2606590734782250154_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8GhGfnG7tl0AX_RcjZt&_nc_ht=scontent.fsgn2-3.fna&oh=bcdbdad379f86747b304c15ccb6fdec2&oe=60893D00',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/116860882_145384877211266_8915673271419401266_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9S2SoSd8fBcAX9Z-CHW&_nc_oc=AQmjBPr1_VhkF0qIzFfuy67YYrzYpcfKLd0StAosBraoN8RQHkky4cWC_giabu9C-es&_nc_ht=scontent.fsgn2-5.fna&oh=72d525decd74057593a4d4e28bb2e008&oe=608B3F19',
  ])
  const [images1, setImages1] = useState([
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/116156397_142008040882283_3240639975102957929_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=al7yJCa9ib4AX-4Q96o&_nc_ht=scontent.fsgn2-5.fna&oh=b48fcd75f34c6cda588923bfeda7c58e&oe=6089C838',
    'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/117096239_145771663839254_6979024715953602427_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Prgk-Mrkwz0AX_aOUeC&_nc_ht=scontent.fsgn2-3.fna&oh=2f5ae25eca5e86b359107b79e42975e8&oe=608A9696',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/117195763_150258110057276_358376980239977650_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=IvQP9UH0i8QAX_nFJm7&_nc_oc=AQnFZWDPQ3mg5IvaPr2e629acSqa9kb0lHCgDX7hfiuDXZH26sg6mSMbzpcDn2o_1uA&_nc_ht=scontent.fsgn2-5.fna&oh=3a0088b45bdf23253a3b179d8d70e159&oe=608A680D',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/106420278_129403635476057_4127696684753494446_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Z9T_r12_xaQAX-_WFUi&_nc_ht=scontent.fsgn2-1.fna&oh=9f98452e0dfdb57d5acef866579345df&oe=608A9F67',
  ])
  const [images2, setImages2] = useState([
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/130464525_198597325223354_3293957278614621565_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=GWG8FqbOHlgAX8SRNZv&_nc_ht=scontent.fsgn2-1.fna&oh=45b269ec1a62a49dc0cf32a47975b68b&oe=608AC475',
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/116545400_142008064215614_6489831180677938151_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=g9xqDIHLjb8AX88ITuW&_nc_ht=scontent.fsgn2-4.fna&oh=c0b6c082127d1cde364f5bf253f273a4&oe=608B928C',
    'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/102707392_106001167816304_6135595112293424488_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=0m8eh3DUhWkAX-9tCHh&_nc_oc=AQnbH_JPy2UdLEsuGnUkQSEdRqj2q4PT3cM--j6XQgva038-UnfUVXukcdGx2nwwPtw&_nc_ht=scontent.fsgn2-6.fna&oh=87bd680d6386eb105149241825b2ebfa&oe=608AFE3B',
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/106373499_132963805120040_3872898822664275297_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=_IeK41PiIVMAX9D6viN&_nc_ht=scontent.fsgn2-4.fna&oh=344efaf93a15a40caf4891f8cd89942e&oe=6089B09A',
  ])
  const [images3, setImages3] = useState([
    'https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/163952565_270960291320390_2344406651966690293_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=PESDgt_crfoAX8u1nvc&_nc_ht=scontent.fsgn2-2.fna&oh=c37dee9724171f811268c96c2090808a&oe=608A20D1',
    'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/117176603_149158060167281_1377490486908271119_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=9LWzL9ywq3cAX8qwcCh&_nc_ht=scontent.fsgn2-6.fna&oh=efee9c254fa2a292d51db87a55e71210&oe=6089002D',
    'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/117297888_149158106833943_2173910384259395165_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Z1RTKRcwp6oAX_FYgJZ&_nc_ht=scontent.fsgn2-1.fna&oh=6074e82806530e46c359aadbbcd784d4&oe=608AFC3C',
    'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/117178485_149158090167278_7512716210672295003_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=AKtyCEpNCtkAX92gHaJ&_nc_ht=scontent.fsgn2-5.fna&oh=eea8df2701e7139897e74acbdbe7272c&oe=6088726C',
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
      <img
        key={id}
        src={url}
        alt=""
        className="mb-3 cursor-pointer"
        onClick={popupHandler(url)}
      />
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
