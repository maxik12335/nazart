import { NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Btn from '../UI/Btn/Btn'
import Close from '../UI/Close/Close'
import classes from './MobileMenu.module.css'
import { useState } from 'react'
import Burger from '../UI/Burger/Burger'
import watsapp from '../../assets/watsapp.png'
import telegram from '../../assets/telegram.png'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>

      <div className={classes.burgerBox}>
        {/* <p className="text-base bold">Nazart</p> */}
        <Burger onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && 
        <Modal onClick={() => setIsOpen(null)}>
          <div className={classes.mobyleMenu}>
            <div className={classes.header}>
              <NavLink to={'/'} className="h3" onClick={() => setIsOpen(null)}>Nazart</NavLink>
              <Close onClick={() => setIsOpen(null)} />
            </div>

            <div className={classes.content}>
              <h3 className='h3'>Мебель из дерева на заказ</h3>
              <a className={classes.tel} href="tel:+79255087785">+7 925 508 77 85</a>
              <Btn isColor={'light'} link={'/catalog'} onClick={() => setIsOpen(null)}>
                каталог
              </Btn>
            </div>

            <div className={classes.footer}>
              <a
                className={classes.icon}
                href="https://wa.me/79255087785?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%21%20%D0%A1%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20NazArt.shop"
                target="_blank"
              >
                <img className={classes.iconImg} src={watsapp} alt="watsapp" />
              </a>
              <a
                className={classes.icon}
                href="https://t.me/Alex_sound1"
                target="_blank"
              >
                <img className={classes.iconImg} src={telegram} alt="telegram" />
              </a>
            </div>
          </div>
        </Modal>
      }

    </div>
  )
}

export default MobileMenu
