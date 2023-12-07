import React from 'react'
import "./Banner.css"
import BannerImg from "../../assets/BannerImage.png"
import BannerImgMobile from "../../assets/bannerImageMobile.png"

function Banner() {
  return (
    <div className='banner'>
        <div className="banner-contents">
            <h1>Купите автомобиль <br /> дешевле на 60%*</h1>
            <img className='image-mobile' src={BannerImgMobile} alt="" />
            <p>Привезем автомобиль под ключ со всеми документами. <br /> Подбор автомобиля под любой запрос  БЕСПЛАТНО  </p>
            <button>Оставить заявку</button>
        </div>
        <div className="banner-image">
            <img src={BannerImg} alt="" />
        </div>
    </div>
  )
}

export default Banner