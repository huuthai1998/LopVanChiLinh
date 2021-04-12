import Teacher from 'components/Teacher/Teacher'
import Tiles from 'components/Tiles/Tiles'
import React from 'react'
import Review from '../../components/Review/Review'
import './Frontpage.css'

const Frontpage = () => {
  return (
    <div className="body-wrap w-full pb-10 bg-gray-200 px-10 md:px-24 lg:px-32 2xl:px-96">
      <Tiles />
      {/* <div className="flex justify-center w-full pt-40 px-2">
        <div
          className="fb-page items-center w-full sm:w-1/2"
          data-href="https://www.facebook.com/milovietnam/"
          data-tabs="timeline"
          data-width="500"
          data-height=""
          data-small-header="true"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/milovietnam/"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/milovietnam/">Milo</a>
          </blockquote>
        </div>
      </div> */}
      <Teacher />
      <Review />
    </div>
  )
}

export default Frontpage
