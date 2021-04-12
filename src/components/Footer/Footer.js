import React from 'react'
import styles from './Footer.module.css'
import facebookSVG from '../../resources/facebook.png'

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className="text-center">
          <p className="header text-3xl uppercase font-bold py-4">Liên hệ</p>
        </div>
        <div className="contact-wrapper items-center px-10 sm:px-0 md:mx-auto flex flex-col">
          <div className="">
            <a
              href="mailto:phuongglinhh599@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <i className="fas fa-envelope mr-5 align-middle"></i>
              phuongglinhh599@gmail.com
            </a>
            <div className="text-lg">
              <i className="fas fa-phone-alt mr-5 align-middle"></i>
              076 999 6800 (chị Linh)
            </div>
            <a
              href="https://goo.gl/maps/9qVnkQN4gi5FxhuZ8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <i className="fas fa-map-marker-alt mr-6 align-middle"></i>
              54/40 Đồng Đen, Phường 14, Tân Bình, TP Hồ Chí Minh
            </a>
          </div>
        </div>
        <div className={styles.svgWrapper}>
          <a
            className={styles.footerSVG}
            href="https://www.facebook.com/LopVanchiLinh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id={styles.linkedin} src={facebookSVG} alt="Linkedin SVG" />
          </a>
        </div>
      </div>
    )
  }
}
export default Footer
