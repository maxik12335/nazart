import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Modal from '../../Components/Modal/Modal'
import Close from '../../Components/UI/Close/Close'

import 'swiper/css'
import 'swiper/css/navigation'

import classes from './Slider.module.css'

const Slider = ({ images = [] }) => {
  const [isOpen, setIsOpen] = useState(null)
  const [swiper, setSwiper] = useState(null)
  const [active, setActive] = useState(0)

  return (
    <div className={classes.wrapper}>
      <Swiper
        modules={[Navigation]}
        navigation
        loop={false}
        slidesPerView={1}
        spaceBetween={16}
        className={classes.swiper}
        onSwiper={setSwiper}
        onSlideChange={(sw) => setActive(sw.activeIndex)}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt={`Фото ${i + 1}`} onClick={() => setIsOpen(src)}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={classes.thumbs}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Миниатюра ${i + 1}`}
            className={active === i ? classes.thumbActive : classes.thumb}
            onClick={() => swiper && swiper.slideTo(i)}
          />
        ))}
      </div>

      {isOpen &&
        <Modal>
          <Close onClick={() => setIsOpen(null)} />
          <img className={classes.img} src={isOpen} alt={`Фото full screen`} />
        </Modal>
      }
    </div>
  )
}

export default Slider
